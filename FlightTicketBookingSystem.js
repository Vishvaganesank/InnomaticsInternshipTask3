function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let baseFare = 300; 
    let additionalCharges = 0;

    
    if (classType === "Business") {
        additionalCharges += 200; 
    } else if (classType === "First") {
        additionalCharges += 500; 
    }

    
    if (luggageWeight > 20) {
        let extraLuggage = luggageWeight - 20;
        additionalCharges += Math.ceil(extraLuggage / 10) * 50; 
    }

    
    let finalPrice = baseFare + additionalCharges;

    
    if (isStudent) {
        finalPrice *= 0.85; 
    } else if (isSenior) {
        finalPrice *= 0.90; 
    }

    return finalPrice.toFixed(2); 
}


console.log(calculateFlightFare("Business", 25, true, false)); 
console.log(calculateFlightFare("First", 18, false, true));    
console.log(calculateFlightFare("Economy", 30, false, false)); 
console.log(calculateFlightFare("First", 22, true, false));    