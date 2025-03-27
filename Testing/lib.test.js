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

describe("testing array of houses", () => {
  it("should return houses of Westeros", () => {
    const result = myFirstTest.testMeBaby3();

    // Too general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too specific
    expect(result[0]).toBe("Starks");
    expect(result[1]).toBe("Targaryen");
    expect(result[2]).toBe("Lannister");

    // More proper but not ideal
    expect(result).toContain("Starks");
    expect(result).toContain("Lannister");

    // ideal way
    // the arrayContaining accepts an array where the items can be in any order. "you can also look more in the docs my bro" - me
    expect(result).toEqual(
      expect.arrayContaining(["Targaryen", "Lannister", "Starks"])
    );
  });
});

describe("testing my dragon object", () => {
  it("should return a dragon... lol", () => {
    const result = myFirstTest.testMeBaby4("Patico");

    // using .toBe() on objects will fail because it's expecting the two objects in memory to fail. Better to use .toEqual instead

    // expect(result).toBe({ name: "Patico", power: "fire" });

    //
    expect(result).toEqual({ name: "Patico", power: "fire" });

    // if an object has many properties and you want to test for specific properties but not all, you can use the .toMatchObject() or the .toHaveProperty()

    // Use .toHaveProperty() when you primarily need to verify the existence of a particular property (potentially nested) in an object.

    expect(result).toMatchObject({ name: "Patico" });
    expect(result).toHaveProperty("power", "fire");
  });
});


