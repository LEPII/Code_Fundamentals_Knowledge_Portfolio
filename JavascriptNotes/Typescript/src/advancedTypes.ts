//// Typescript AdvancedTypes

//// Table Of Content

//// - Type Aliases
//// - Union Types
//// - Intersection Types
//// - Literal Types
//// - Nullable Types
//// - Optional Chaining
//// - The Nullish Coalescing Operator
//// - Type Assertions
//// - unknown Type
//// - never Type

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

/// Optional Property Access Operator

// The optional property access operator (?.) provides a concise way to safely access properties of an object that might be null or undefined

//How it works:
// - If the object before the ?. is not null or undefined, the property access proceeds as usual.
// - If the object is null or undefined, the entire expression evaluates to undefined.

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
// const street2 = user2?.address?.street;
// console.log(street2); // Output: undefined

/// Optional Element Access Operator

// The optional element access operator (?.[]) provides a safe way to access elements within an array that might be null or undefined.

// How it works
// - If the array before the ?.[] is not null or undefined, the element access proceeds as usual.
// - -If the array is null or undefined, the entire expression evaluates to undefined

const numbersArray: number[] | null = [1, 2, 3];
const firstNumber = numbersArray?.[0];

console.log(firstNumber); // Output: 1

const emptyArray: number[] | null = null;
const firstNumber2 = emptyArray?.[0];

console.log(firstNumber2); // Output: undefined

/// Optional Call Operator

// The optional call operator (?.()) provides a safe way to call a function that might be null or undefined.

// How it works
// - If the object before the ?.() is not null or undefined and is a function, the function is called.
// - If the object is null, undefined, or not a function, the entire expression evaluates to undefined.

type Callback = () => void;

const myFunction: Callback | null = () => {
  console.log("Function called!");
};

myFunction?.(); // Output: "Function called!"

const nullFunction: Callback | null = null;

// nullFunction?.(); // Output: undefined

//// - The Nullish Coalescing Operator

//  The Nullish Coalescing Operator ( ?? ) in JavaScript and TypeScript is a concise way to provide a default value for a variable that may be null or undefined.

//  How it works:
// - If the left-hand side operand of ?? is not null or undefined,
//  the operator returns the left-hand side operand itself.
// - If the left-hand side operand of ?? is null or undefined,
// the operator returns the right-hand side operand.

const myUser: string | null = null;

const displayName = myUser ?? "Guest";

console.log(displayName); // Output: "Guest"

const username: string | null = "LUI";

const displayUsername = username ?? "Guest";

console.log(displayUsername); // Output: "LUI"

// Key Differences from the Logical OR Operator (||)

// || returns the first truthy value. This means that || will return the right-hand side operand if the left-hand side operand is falsy, including 0, false, '', NaN, and of course, null and undefined.

// ?? specifically checks for null or undefined. It will only return the right-hand side operand if the left-hand side operand is strictly null or undefined.

//// - Type Assertions

// type assertions allow you to tell the compiler that a value has a certain type, even if the compiler cannot infer it correctly.

// as Syntax: as Type

let myMcDonaldsOrder = document.getElementById("Big_Mac") as HTMLInputElement;

myMcDonaldsOrder.value =
  "#1 Big Mac Large, Diet Coke + Extra Large Fries & 2 Chocolate Chip Cookies";

// as Syntax: as Type

const inputElement = <HTMLInputElement>document.getElementById("myInput");

//// unknown Type ////

// the `unknown` type represents a value of any type, including `null` and `undefined`.

// any vs. unknown:

// any
// - Tells the compiler to "trust me jaborni, I know what I'm doing" and disables most type checks for that value.
// - Can lead to unexpected runtime errors if the actual type is different from what you assumed.

// unknown
// - Represents a value of any type, but with stricter type checking.
// - You can't perform any operations on an unknown value until you've narrowed its type through type guards or assertions.

function processData(data: unknown) {
  if (typeof data === "string") {
    console.log(data.length);
  } else if (Array.isArray(data)) {
    console.log(data[0]);
  } else {
    console.log("Unknown data type");
  }
}

//// never Type ////

// The `never` type represents values that never occur.

// Functions that never return:
// - Functions that throw exceptions.
// - Functions that enter infinite loops.

function throwError(message: string): never {
  throw new Error(message);
}