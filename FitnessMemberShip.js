function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    let suggestedPlan = '';

    
    if (planType === "Basic") {
        suggestedPlan = "Basic Plan ($20/month): Only gym access";
    } else if (planType === "Premium" && wantsTrainer && !wantsDietPlan) {
        suggestedPlan = "Premium Plan ($50/month): Gym + Personal Trainer";
    } else if (planType === "VIP" && wantsTrainer && wantsDietPlan) {
        suggestedPlan = "VIP Plan ($80/month): Gym + Personal Trainer + Diet Plan";
    } else {
        suggestedPlan = "Please select a valid plan based on your requirements.";
    }

    return suggestedPlan;
}


console.log(choosePlan("Basic", false, false)); 
console.log(choosePlan("Premium", true, false));
console.log(choosePlan("VIP", true, true)); 
console.log(choosePlan("Premium", false, true)); 
