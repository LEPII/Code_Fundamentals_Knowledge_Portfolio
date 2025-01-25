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

function greet(name: string): string {
  return "Hello, " + name + "!";
}

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
