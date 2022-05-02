function refresh(){
    let value = parseInt(document.getElementById("value").value);
    
    
    const feet = 3.2808399; //*metres
    const meters = 0.3048; //*foot
    const gallons = 3.78541178; //*litres
    const litres = 0.264172052; //*gallons
    const pounds = 0.45359237; // *kilos
    const kilos = 2.20462262; // * pounds
    
    let feetMetres = value * feet;
    feetMetres = +feetMetres.toFixed(3);
    let metresFeet = value * meters;
    metresFeet = + metresFeet.toFixed(3);
    let gallonsLitres = value * gallons;
    gallonsLitres = +gallonsLitres.toFixed(3);
    let litresGallons = value * litres;
    litresGallons = +litresGallons.toFixed(3);
    let poundsKilos = value * pounds;
    poundsKilos = +poundsKilos.toFixed(3);
    let kilosPounds = value * kilos;
    kilosPounds = +kilosPounds.toFixed(3);
    
    document.getElementById("meterFeet").textContent = value + " meters = " + metresFeet + " feet | " + value + " feet = " + feetMetres +" meters";
    
    document.getElementById("litersGallons").textContent = value + " liters = " + gallonsLitres + " gallons | " + value + " gallons = " + litresGallons + " liters";
    
    document.getElementById("kilogramsPounds").textContent = value + " kilos = " + kilosPounds + " pounds | " + value + " popunds = " + poundsKilos + " kilos";
    }