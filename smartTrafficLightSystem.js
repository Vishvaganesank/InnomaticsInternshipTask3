function trafficLightControl(density) {
    let greenLightDuration;

    
    if (density === "Heavy Traffic") {
        greenLightDuration = 60; 
    } else if (density === "Moderate Traffic") {
        greenLightDuration = 40; 
    } else if (density === "Light Traffic") {
        greenLightDuration = 20; 
    } else {
        greenLightDuration = 0; 
        console.log("Invalid traffic density input.");
    }

    return greenLightDuration;
}


console.log(trafficLightControl("Heavy Traffic")); 
console.log(trafficLightControl("Moderate Traffic")); 
console.log(trafficLightControl("Light Traffic")); 
console.log(trafficLightControl("Unknown Traffic")); 
