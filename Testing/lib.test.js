const { describe } = require("node:test");
const myFirstTest = require("./functions2test");

describe("testMeBaby1", () => {
  // typically this first part of naming of test would be the name of the function

  it("My very first test :) - should return positive number if input is positive", () => {
    const result = myFirstTest.testMeBaby1(1); // best not to use random numbers when testing.
    expect(result).toBe(1);
  });

  it("should return positive number if input is negative", () => {
    const result = myFirstTest.testMeBaby1(-1); // best not to use random numbers when testing.
    expect(result).toBe(1);
  });

  it("should return positive number if input is negative", () => {
    const result = myFirstTest.testMeBaby1(0); // best not to use random numbers when testing.
    expect(result).toBe(0);
  });
});

// The expect() function is the starting point for any assertion in Jest. It wraps the value you want to test.
// The toBe() is a matcher function. Matchers are used to compare the value wrapped by expect() with an expected value.
