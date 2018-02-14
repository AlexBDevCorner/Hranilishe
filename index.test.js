const max = require("./max.js");

const { getMaxFromArray, amIFat } = max;

describe("Tests, which checks operations with array :", () => {

  it("should return max number from given array", () => {
    const testArray = [2, 4, 7, 8];

    expect(getMaxFromArray(testArray)).toBe(8);
  });

});

describe("Tests, which checks are you fat :", () => {

  it("should say that you are fat", () => {
    expect(amIFat(100)).toBe("yes!");
  });

  it("should say that you are not fat", () => {
    expect(amIFat(98)).toBe("no!");
  });

});
