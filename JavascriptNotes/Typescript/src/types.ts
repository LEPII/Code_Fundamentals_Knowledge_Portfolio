//// Typescript Types

//// Table Of Content

//// - General
//// - Built In Type
//// - The Any Type
//// - The Array Type
//// - The Enums Type
//// - The Functions Type
//// - The Objects Type
//// - The Tuples Type
//// - Readonly Property

//// General ////

// - Type Inference - TypeScript often infers the type of a variable based on its initial value, reducing the need for explicit type annotations.
// - Type Compatibility - TypeScript has rules for determining when two types are compatible. For example, a variable of type number can be assigned to a variable of type number | string.

//// Built In Primitive Types ////

// boolean;
// null;
// number;
// string
// symbol
// undefined

//// The Any Type ////

// Any - This type allows you to assign any value to a variable, effectively disabling type checking.

// - Use with Caution - While any can be convenient in certain situations, it's generally discouraged as it defeats the purpose of using TypeScript (type safety).

let myVariable: any = 10;
myVariable = "Hello";
myVariable = true;

//// The Array Type ////

// Array - Represents an ordered collection of values. You can specify the type of elements within the array.
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob", "Charlie"];
let mixed: (number | string)[] = [1, "two", 3];

//// The Enums Type ////

// Enum - Defines a set of related named constants.They provide a more readable and maintainable way to represent a fixed set of values.
// By default, enum members are assigned numerical values starting from 0.
// Direction.Up will have the value 0, Direction.Down will have the value 1, and so on.

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// You can assign custom values to individual enum members:

enum StatusCode {
  Success = 200,
  NotFound = 404,
  ServerError = 500,
}

let myStatusCode: StatusCode = StatusCode.NotFound;

console.log(myStatusCode); // => 404

//// The Functions Type ////

// Function: Represents a block of code that can be executed. You can specify the types of parameters and the return type.
// - As a best practice while using Typescript, you should always annotate your functions. Especially if you're building an API

function greet(name: string, age: number): string {
  return "Hello, " + name + "!, you're" + age + " right?";
}

// - Function with Optional Parameter

function drive(mph?: number) {
  mph = mph;
}

// - Function parameters and return types can be of various types:

// 1. Primitive Types
// string: Represents text data.
// number: Represents numerical values (integers and floating-point numbers).
// boolean: Represents true or false values.
// null: Represents the intentional absence of a value.
// undefined: Represents a variable that has been declared but not assigned a value.
// symbol: Represents unique and immutable values.

// 2. Object Types
// object: Represents any JavaScript object (but not primitive types).
// Array: Represents an ordered collection of values.
// Date: Represents a specific point in time.
// RegExp: Represents a regular expression for pattern matching.

// 3. Other Types
// void: Indicates that the function does not return any value.
// never: Indicates that the function never returns (e.g., in functions that throw exceptions).
// any: Represents a value of any type. Use with caution, as it can undermine type safety.

// 4. Custom Types
// Interfaces: Define the shape of an object by specifying its properties and their types.
// Type Aliases: Create new names for existing types.
// Union Types: Combine multiple types into a single type.
// Intersection Types: Combine multiple types to create a type that satisfies all of the combined types.
// Generic Types: Create reusable type definitions that can work with different types.

// 5. Function Types
// Functions themselves can be used as types, allowing you to define functions that take other functions as arguments or return functions as results.

//// The Objects Type ////

// Object - Represents a collection of key-value pairs. You can define the structure of an object using interfaces or type aliases.
interface Person {
  name: string;
  age: number;
}

const person2: Person = { name: "Lui", age: 26 };

//// The Tuples Type ////

// Tuple - A fixed-length array with elements of specific types.
let person: [string, number] = ["Lui", 30];
// Access elements by index: person[0] // "John"

// You can make elements in a tuple optional by using the ? symbol
let mySecondTuple: [string, number?] = ["hello"]; // Second element is optional

// Rest Elements:
// You can use the rest operator (...) to represent an array of elements after a fixed number of elements:
let myThirdTuple: [string, ...number[]] = ["Yo", 1, 2, 3];

//// - Readonly Property

// The readonly modifier makes a property of an object immutable after it's assigned a value. This means you can only read the value of the property, but not change it after the object is created.

interface ThePerson {
  readonly theName: string;
  age: number;
  dateOfDeath: (date: Date) => void;
}

const person3: ThePerson = { theName: "Luis", age: 26, dateOfDeath: Date.now }; // <= it's a joke, a dark joke... hehehehe ;) 
