function isEligibleForJob(age, experience, qualification) {
    
    if (age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree") {
        return true; 
    } else {
        return false; 
    }
}


console.log(isEligibleForJob(30, 3, "Bachelor's Degree")); 
console.log(isEligibleForJob(19, 3, "Bachelor's Degree")); 
console.log(isEligibleForJob(40, 1, "Bachelor's Degree")); 
console.log(isEligibleForJob(25, 5, "Master's Degree")); 
