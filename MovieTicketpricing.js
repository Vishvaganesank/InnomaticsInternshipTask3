function calculateTicketPrice(age, showTime) {
    const standardPrice = 12; 

    let discount = 0;

   
    if (showTime < 17) {
        discount += 0.20; 
    }

    
    if (age > 60) {
        discount += 0.30; 
    }

    
    if (age < 12) {
        discount += 0.40; 
    }

    
    const finalPrice = standardPrice * (1 - discount);

    return finalPrice.toFixed(2); 
}


console.log(calculateTicketPrice(65, 14)); 
console.log(calculateTicketPrice(10, 19)); 
console.log(calculateTicketPrice(25, 13));
console.log(calculateTicketPrice(70, 20)); 
