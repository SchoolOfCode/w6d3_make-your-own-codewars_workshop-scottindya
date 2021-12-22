//👉 Write your tests below here:
test("Check the function correctly calculates the number of days to reach the target", function () {
  const expected = 15816;
  const n = 100;
  const actual = makeAMillion(n);
  expected(actual).toBe(expected);
});
test("Check the function correctly calculates the number of days to reach the target", function () {
  const expected = 280;
  const n = 10000;
  const actual = makeAMillion(n);
  expected(actual).toBe(expected);
