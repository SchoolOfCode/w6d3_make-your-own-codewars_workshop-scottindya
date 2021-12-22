//👉 Write your tests below here:

import {makeAMillion} from './main'

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

