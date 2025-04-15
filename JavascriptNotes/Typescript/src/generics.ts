//// Generics

//// Table Of Content

//// - General
//// - Generic Classes
//// - Generic Functions/Methods
//// - Generic Interfaces
//// - Generic Constraints
//// - Extending Generic Classes
//// - The keyof Operator
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

//// Extending Generic Classes ////

// There is three primary ways you can handle generic type parameters when extending a generic class in TypeScript.
class DataProcessor<T> {
  constructor(public data: T[]) {}

  process(): T[] {
    return this.data;
  }
}
// 1. Fixing the Generic Type Parameter

// When you fix the generic type parameter in a child class, you specify a concrete type for the parent's generic type parameter. This means the child class will only work with that specific type.

// Here the NumbersArrayOnly class extends DataProcessor, but it fixes the generic type T to be number. Any instance of NumbersArrayOnly will specifically work with arrays of numbers.

class NumbersArrayOnly extends DataProcessor<number> {
  constructor(data: number[]) {
    super(data);
  }

  sum(): number {
    return this.data.reduce((sum, num) => sum + num, 0);
  }
}

// 2. Restricting the Generic Type Parameter

// When you restrict the generic type parameter in a child class, you use a constraint (extends) to limit the types that the child class can work with. The child class itself remains generic but with a more specific bound.

// Below, the SortableProcessor class extends DataProcessor, but it restricts the generic type T to be any type that implements the Sortable interface (meaning it must have a value property of type number). The SortableProcessor itself remains generic, allowing it to work with different Sortable types.

interface Sortable {
  value: number;
}

class SortableProcessor<T extends Sortable> extends DataProcessor<T> {
  constructor(data: T[]) {
    super(data);
  }
  sortByValue(): T[] {
    return [...this.data].sort((a, b) => a.value - b.value);
  }
}

interface ItemA extends Sortable {
  name: string;
}

interface ItemB {
  id: string;
}

const sortableItems: ItemA[] = [
  { value: 3, name: "C" },
  { value: 1, name: "A" },
  { value: 2, name: "B" },
];

const sortableProcessor = new SortableProcessor(sortableItems);

console.log(sortableProcessor.process());
// Output: [{ value: 3, name: 'C' }, { value: 1, name: 'A' }, { value: 2, name: 'B' }]

console.log(sortableProcessor.sortByValue());
// Output: [{ value: 1, name: 'A' }, { value: 2, name: 'B' }, { value: 3, name: 'C' }]

// 3. Simply Passing It On to the Child Class

// In this case, the child class also becomes generic with the same type parameter as the parent. This allows the child class to maintain the flexibility of the parent class.

class AdvancedProcessor<T> extends DataProcessor<T> {
  filter(predicate: (item: T) => boolean): T[] {
    return this.data.filter(predicate);
  }
}

//// The keyof Operator ////

// The keyof operator takes a type as an operand and produces a union of string literal types representing the public property names (keys) of that type.

interface NewDragons {
  name: string;
  age: number;
  firepower: number;
}

type NewDragon = keyof NewDragons; // "name" | "age" | "firepower"

//// Type Mapping ////

// Type mapping  allows you to transform the properties of an existing type to create a new type.
// It's a powerful way to derive new types based on existing ones, applying modifications like making properties read-only, optional, or changing their types.

type ReadOnlyFictionAnimal<T> = {
  readonly [K in keyof T]: T[K];
};

let newestDragon: ReadOnlyFictionAnimal<NewDragons> = {
  name: "lulu",
  age: 3,
  firepower: 4,
};

// newestDragon.name = "myEx" //Cannot assign to 'name' because it is a read-only property
