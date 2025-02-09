function applyCoupon(orderAmount, couponCode) {
    let finalPrice = orderAmount;

    
    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        finalPrice = orderAmount * 0.90; 
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        finalPrice = orderAmount; 
    } else if (couponCode !== "" && orderAmount <= 200) {
        console.log("Coupon code applies only for orders above $200");
    } else {
        console.log("Invalid or expired coupon code");
    }

    return finalPrice.toFixed(2); 
}


console.log(applyCoupon(600, "DISCOUNT10")); 
console.log(applyCoupon(250, "FREESHIP")); 
console.log(applyCoupon(150, "DISCOUNT10")); 
console.log(applyCoupon(700, "FREESHIP")); 
