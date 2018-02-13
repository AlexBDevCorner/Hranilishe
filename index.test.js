const max = require("./max.js");

it("should return max number from given array", () => {
  const testArray = [2, 4, 7, 8];

  expect(max(testArray)).toBe(8);
});
