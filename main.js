// 👉 Write your kata here!
//A man wants to make a million pounds, starts with £n
//Can work at his first job until doubles his current balance - they pay 10% of his initial starting balance per day (i.e n*0.1)
//Second job until he triples current balance etc. - second job will pay 20% of his initial starting balance per day (i.e. n*0.2)
//
//he will work only full days, and only until he makes his million, not a day longer.
//Output should be how many days it will take hime to make his million

//👉 Write the function your CodeWarriors will start with below here:

//while dollarsInTheBank < 1000000

let totalDays = 0;
let salaryMultiplier = 0.1;
let dollarsInTheBank;
let jobNumber = 1;
let targetMultiplier = 2;

export function makeAMillion(startingBalance) {
  dollarsInTheBank = startingBalance;

  while (dollarsInTheBank < 1000000) {
    console.log("Job #" + jobNumber);
    let target = startingBalance * targetMultiplier;
    console.log("Target:" + target);
    //how to fix this as the startingBalance value from the 1st loop???
    let dailypay = 10000 * salaryMultiplier;
    console.log("DailyPay:" + dailypay);
    let numberOfDays = (target - startingBalance) / dailypay;

    console.log("Days worked in this job: " + numberOfDays);
    dollarsInTheBank = target;
    console.log("You have thsi much money: $" + dollarsInTheBank);

    //iterate the accumulators for the next loop
    totalDays = totalDays + numberOfDays;
    console.log("Total days is: " + totalDays);
    targetMultiplier++;
    salaryMultiplier = salaryMultiplier + 0.1;
    jobNumber++;

    //if statement here to check if the next loop will take us over a million
    // if it does, we need different logic (day by day with the current dailyPay up to 1000000)
    if (target * targetMultiplier >= 1000000) {
      //do something different
      let difference = 1000000 - dollarsInTheBank;
      console.log("difference: " + difference);
      dailypay = 10000 * salaryMultiplier;
      let extraDays = difference / dailypay;
      console.log("extra days: " + extraDays);
      totalDays = totalDays + extraDays;
      console.log(totalDays);
      dollarsInTheBank = 1000000;
      return totalDays;
    }

    //if not, we can run the loop again
    else {
      makeAMillion(target, targetMultiplier);
    }
  }

  console.log(totalDays);
  return totalDays;
}

makeAMillion(10000);
