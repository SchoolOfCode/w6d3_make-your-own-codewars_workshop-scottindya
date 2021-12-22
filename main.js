
// 👉 Write your kata here!
//A man wants to make a million pounds, starts with £n
//Can work at his first job until doubles his current balance - they pay 10% of starting balance per day (i.e n*0.1)
//Second job until he triples current balance etc. - second job will pay 20% of his starting balance per day (i.e. n*0.2)
//
//he will work only full days, and only until he makes his million, not a day longer.
//Output should be how many different jobs he needs if he starts with n 

//👉 Write the function your CodeWarriors will start with below here:


//while dollarsInTheBank < 1000000



function makeAMillion(startingBalance,targetMultiplier){
    
let dollarsInTheBank = startingBalance;
while(dollarsInTheBank<1000000){


let salaryMultiplier = 0.1;

let target = startingBalance*targetMultiplier;
let dailypay = startingBalance*salaryMultiplier;
let numberOfDays = (target-startingBalance)/dailypay;
console.log(numberOfDays);
targetMultiplier ++;
salaryMultiplier = salaryMultiplier+0.1;
dollarsInTheBank = dollarsInTheBank+target;
console.log("You have thsi much money: $" + dollarsInTheBank)
// dollarsInTheBank = dollarsInTheBank + dailypay*numberOfDays;
makeAMillion(target);
};
};


makeAMillion(10000,2);
