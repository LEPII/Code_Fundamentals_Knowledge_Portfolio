//// Typescript AdvancedTypes

//// Table Of Content

//// - Type Aliases
//// - Union Types
//// - Intersection Types
//// - Literal Types
//// - never Type
//// - Nullable Types
//// - Optional Chaining
//// - The Nullish Coaelscing Operator
//// - Type Assertions

//// - unknown Type

//// Type Aliases ////

// In TypeScript, type aliases are a powerful tool for creating custom names for existing types. They enhance code readability and maintainability by allowing you to give meaningful names to complex types.

type CurrentAlias = string; // Alias for the string type
type Puppy = {
  name: string;
  age: number;
};

type UserName = string | number;

//// Union Types ////

// In TypeScript, a union type allows a variable to hold values of more than one type.

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