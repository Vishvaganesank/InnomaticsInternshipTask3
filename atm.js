function atmWithdrawal(balance, amount, pin, enteredPin) {
   
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }

   
    if (amount > balance) {
        return "Insufficient Funds";
    }

    
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }

    
    balance -= amount;
    return `Withdrawal successful! Remaining balance: ${balance}`;
}


console.log(atmWithdrawal(5000, 2000, 1234, 1234)); 
console.log(atmWithdrawal(5000, 2500, 1234, 1234));
console.log(atmWithdrawal(5000, 6000, 1234, 1234)); 
console.log(atmWithdrawal(5000, 2000, 1234, 1111)); 
