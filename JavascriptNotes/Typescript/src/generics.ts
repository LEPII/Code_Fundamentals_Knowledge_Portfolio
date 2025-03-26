//// Generics

//// Table Of Content

//// - General
//// - Generic Classes
//// - Generic Functions
//// - Generic Interfaces
//// - Generic Constraints
//// - Type Mapping

//// - General

// Generics allows you to create reusable components that work with a variety of types.
// It introduces type parameters, which are similar to placeholders for types. The parameter is specified when a function, class or interface is used which allows for reusability and flexibility while still maintaining type safety.

// The problem generics solve include:
// - Code duplication
// - Loss of Type Info (using `any`)
// - Creating reusable DSAs.

//// Generic Classes ////

class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair<number, string>(3, "new");
// You don't need to explicity set the generic type arguments. The compiler will can infer it for us. Intellisense will still work.

let pair2 = new KeyValuePair(32, "newer");

//// Generic Functions/Methods ////

class Arrays {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
// let numbers = Arrays.wrapInArray(1);

//// Generic Interfaces ////

interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<User>("url");
// result.data. /// you will see all the properties of the user object.

//// Generic Constraints ////

//  Generic constraints allow you to limit the types that can be used with a generic type parameter.

function myCustomFunction<T extends number | string>(value: T) {
  return value;
}

myCustomFunction(3); // valid
myCustomFunction("value"); // valid
// myCustomFunction(true); // not valid

// can be used to predefine the shape of an object

function mySecondCustomFunction<T extends { myName: string }>(value: T) {
  return value;
}

mySecondCustomFunction({ myName: "Lui" });

// can be used with classes(or any classes created from a parent class) and interfaces

interface MyExtendedInterface {
  name: string;
}

function myThirdCustomFunction<T extends MyExtendedInterface>(value: T) {
  return value;
}

myThirdCustomFunction({ name: "Lui" });
