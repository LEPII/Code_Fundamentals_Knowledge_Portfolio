const { describe } = require("node:test");
const myFirstTest = require("./functions2test");

/// testing numbers

// The expect() function is the starting point for any assertion in Jest. It wraps the value you want to test.
// The toBe() is a matcher function. Matchers are used to compare the value wrapped by expect() with an expected value.

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

/// testing strings

// The .toMatch() function asserts that a string contains a substring that matches the provided regular expression.

// The .toContain() function is used to check if an item exists within an ARRAY or if a substring exists within a STRING.

describe("testing strings", () => {
  it("should return my proper title", () => {
    const result = myFirstTest.testMeBaby2("Lulu");
    expect(result).toMatch(/Lulu/);
    expect(result).toContain("Lulu");
  });
});
