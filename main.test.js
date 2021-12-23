// 👉 Write your kata here!
//A man wants to make a million pounds, starts with £n
//Can work at his first job until doubles his current balance - they pay 10% of his initial starting balance per day (i.e n*0.1)
//Second job until he triples current balance etc. - second job will pay 20% of his initial starting balance per day (i.e. n*0.2)
//
//he will work only full days, and only until he makes his million, not a day longer.
//Output should be how many days it will take hime to make his million

//👉 Write your tests below here:

import { makeAMillion } from "./main";

test("Check the function correctly calculates the number of days to reach the target", function () {
  const expected = 15816;
  const n = 100;
  const actual = makeAMillion(n);
  expect(actual).toBe(expected);
});
test("Check the function correctly calculates the number of days to reach the target", function () {
  const expected = 280;
  const n = 10000;
  const actual = makeAMillion(n);
  expect(actual).toBe(expected);
});
