//// Typescript

//// Table Of Content

//// - General
//// - Readonly Property
//// - Interfaces & Type Aliases

// TypeScript is a superset of JavaScript that adds static typing to the language.

// - Statically Typed - TypeScript allows you to define the types of variables, function parameters, and return values. This means the compiler can check for type errors during development, catching potential issues early on.
// - Superset of JavaScript - Any valid JavaScript code is also valid TypeScript code. This means you can gradually introduce TypeScript into existing JavaScript projects.
// - Transpiles to JavaScript - TypeScript code is not directly executed by browsers. It is first transpiled (converted) into plain JavaScript using a TypeScript compiler (usually called tsc).

let num: number = 12;
if (num < 10) num += 2;

//// - Readonly Property

// The readonly modifier makes a property of an object immutable after it's assigned a value. This means you can only read the value of the property, but not change it after the object is created.

interface ThePerson {
  readonly theName: string;
  age: number;
  dateOfDeath: (date: Date) => void;
}

const person3: ThePerson = { theName: "Luis", age: 26, dateOfDeath: Date.now }; // <= it's a joke, a dark joke... hehehehe ;)

//// Interfaces & Type Aliases ////

// Both interfaces and type aliases are powerful tools in TypeScript for defining the shape of data, but they have some key distinctions that make them suitable for different scenarios.

// - Interfaces

interface MyBooThangs {
  name: string;
  age: number;
}

// - Declared using the `interface` keyword.
// - Primarily used to define the shape of objects. They excel at describing the structure of classes and objects, especially when dealing with inheritance and implementation.
// - Can be extended using the extends keyword, allowing you to inherit properties from other interfaces. Interfaces also support declaration merging, where multiple declarations of the same interface are automatically merged.

// - Type Alias

type MyType = {
  name: string;
  age: number;
};

// - Declared using the `type` keyword.
// - More versatile and can define various types.
//  - Object shapes (like interfaces)
//  - Primitive types (e.g., string, number, boolean)
//  - Unions (string | number)
//  - Tuples ([string, number])
//  - Intersection types (TypeA & TypeB)
//  - Function types ((a: number) => string)

// - Extensibility - Can be extended using intersection types (&). However, they do not support declaration merging.
