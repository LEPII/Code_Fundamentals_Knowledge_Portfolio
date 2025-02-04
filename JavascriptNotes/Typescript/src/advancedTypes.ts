//// Typescript AdvancedTypes

//// Table Of Content

//// - Type Aliases
//// - Union Types
//// - Intersection Types
//// - Literal Types
//// - Nullable Types
//// - Optional Chaining
//// - never Type
//// - The Nullish Coaelscing Operator
//// - Type Assertions

//// - unknown Type

//// Type Aliases ////

// Type aliases are a powerful tool for creating custom names for existing types. They enhance code readability and maintainability by allowing you to give meaningful names to complex types.

type CurrentAlias = string; // Alias for the string type
type Puppy = {
  name: string;
  age: number;
};

type UserName = string | number;

//// Union Types ////

// A union type allows a variable to hold values of more than one type.

// Type Narrowing: When working with union types, you often need to "narrow down" the type to access specific properties or methods. This is usually done using typeof checks or other conditional checks.

function weightConversion(weight: number | string): number {
  if (typeof weight === "number") {
    return weight.valueOf();
  } else {
    return parseInt(weight);
  }
}

//// Intersection Types ////

// An intersection type combines multiple types into a single type that must have all the properties of each of the combined types.
// - Uses the ampersand (&) operator to combine types.
// An object of an intersection type must have all the properties from each of the intersecting types.

interface Animal {
  species: string;
}

interface Dog {
  age: number;
}

type myNewPet = Animal & Dog;

const luisNewPet: myNewPet = {
  species: "Tarsier",
  age: 10,
};

//// - Literal Types

// Literal types allow you to define a type that can only hold a specific, fixed value
// By using literal types, you can enforce that a variable or function parameter can only accept a specific value, making your code more predictable and less error-prone.

type favoriteLift = "squat" | "bench" | "deadlift" | "ohp";

function move(favLift: favoriteLift) {
  console.log(favLift);
}

move("squat"); // OK
// move("lateral raises"); // Error: 'forward' is not assignable to type 'Direction'

//// Nullable Types ////

// The nullable types allow a variable to hold either a value of a specific type or the value null.
// Nullable types explicitly acknowledge the possibility of null values, helping you write code that handles these cases gracefully.
// Example ===> number? (a variable can be a number or null)

const findingDiamonds = (value: string | null | undefined) => {
  if (value) {
    console.log("looking");
  } else {
    console.log("no diamonds found");
  }
};


//// Optional Chaining ////

// The optional property access operator (?.) provides a concise way to safely access properties of an object that might be null or undefined

// 

interface gamerTag {
  name: string;
  address?: {
    street: string;
  };
}

const user: gamerTag | null = {
  name: "lulu",
  address: {
    street: "Main St, Miami Lakes",
  },
};

// Safe access of address
const street = user?.address?.street; 

console.log(street); // Main St, Miami Lakes

const user2: gamerTag | null = null; 
const street2 = user2?.address?.street; 

console.log(street2); // Output: undefined