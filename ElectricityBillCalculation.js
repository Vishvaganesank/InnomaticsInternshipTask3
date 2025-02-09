function calculateElectricityBill(units, timeOfDay) {
    let ratePerUnit = 0;
    let billAmount = 0;

    if (units < 100) {
        ratePerUnit = 5;
    } else if (units >= 100 && units <= 300) {
        ratePerUnit = 4;
    } else {
        ratePerUnit = 3;
    }

    billAmount = units * ratePerUnit;

    if (timeOfDay >= 20 || timeOfDay < 8) {
        billAmount += billAmount * 0.10; 
    }

    return billAmount.toFixed(2);
}

console.log(calculateElectricityBill(50, 15));  
console.log(calculateElectricityBill(150, 10)); 
console.log(calculateElectricityBill(350, 22)); 
console.log(calculateElectricityBill(200, 21)); 
