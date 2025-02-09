function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shippingCost = 0;

   
    if (orderAmount > 1000) {
        discount = 0.20 * orderAmount; 
    } else if (orderAmount >= 500) {
        discount = 0.10 * orderAmount; 
    }

  
    if (orderAmount < 50) {
        shippingCost = 10; 
    }

    
    let finalAmount = orderAmount - discount + shippingCost;
    return finalAmount.toFixed(2); 
}


console.log(calculateFinalAmount(1200)); 
console.log(calculateFinalAmount(700));  
console.log(calculateFinalAmount(400));  
console.log(calculateFinalAmount(40));  
