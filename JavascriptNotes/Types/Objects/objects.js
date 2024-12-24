//// OBJECTS

//// Table Of Content
//// - General Notes
//// - Defining An Object
//// - Accessing / Deleting Properties
//// - Enumerating Properties
//// - Primitive / Value Types
//// - Cloning An Object
//// - Default Methods on Objects
//// - Garbage Collection

//// General Notes

// - Objects are a collection a collection of {key: value} pairs.
// - Object are dynamic by nature. Once they are created, we can always add new properties or methods or remove existing ones.

/// Constructor Property
// Every object in JS has a property called `constructor`, and that references the function that was used to construct or create that object.
// When you create an object using the object literal syntax, internally the JS engine uses the Object() constructor function.

const MyFavoriteMcDonaldsOrder = {
  number: 6,
  meal: {
    mainFood: "10 Piece Nuggets",
    sideFood: "Fries",
    size: "Large",
    sauce: true,
    napkins: true,
    drink: "Diet Coke",
  },
  sides: () => {
    console.log("name: Chocolate Cookies; quantity: 3");
  },
};

MyFavoriteMcDonaldsOrder.sides();
MyFavoriteMcDonaldsOrder.favoriteBurger = "Big Mac";
console.log(MyFavoriteMcDonaldsOrder.favoriteBurger);

//// Defining An Object

/// 1. Object literal

// Explanation: Directly defines properties and values within curly braces.
// Pros: Simple, concise, and commonly used.
// Cons: Limited for creating complex objects with methods or inheritance.

const myExAvi = {
  name: "Lui", // can be any type of value.
  age: 30,
  city: "New York",
};

/// 2.1 Factory Function

// Regular functions: They are defined using the function keyword.
// Return objects: They return a new object with properties and methods directly within the function body.
// Flexible: They allow for more dynamic object creation, as properties and methods can be added or modified at runtime.
// Less formal: They don't follow a specific syntax or pattern.

function createObject(property1, property2, property3) {
  return {
    property1: property1,
    property2: property2,
    property3,
    eatFood: function () {
      console.log("eat");
    },
  };
}

const exampleObj1 = createObject(1, 2, 3).eatFood();

// To make the object dynamic, we pass them in within the values as properties.
// A short-hand way of writing if the key & value are the same by simply adding the key like in ^ property3

/// 2.2 Constructor Function

// They are defined using the function keyword, but with a capital letter convention. You create a function that acts as a blueprint for creating objects.

// Pros:
// Can be used for creating multiple objects with the same structure, supports inheritance.
// More formal: They follow a specific syntax and pattern.
// Cons: Less readable and maintainable compared to classes, can lead to confusion with this keyword.

// `new` keyword: They are called using the new keyword, which creates a new object and binds it to the this keyword.
// When you use `new` keyword followed by a constructor function, it performs the following steps:
// 1. Creates a new empty object.
// 2. Sets the `this` keyword within the constructor function to reference the newly created object.
// 3. Executes the code within the constructor function.
// 4. Returns the newly created object.

// `this` keyword: They use the this keyword to refer to the newly created object within the function body.
// Here's a breakdown of what typically happens:
// this Binding: Without new, the this keyword inside the constructor function is not automatically bound to a new object. Instead, it usually refers to the global object (e.g., window in a browser environment).
// Property Assignment: Any properties assigned using this within the constructor will be added to the global object, potentially overwriting existing properties.
// Return Value: The constructor function itself will return undefined unless explicitly specified otherwise.

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.drive = function () {
    console.log("drive");
  };
}
s;
const myExAvi2 = new Person("Lui", 30, "New York");

/// 3. Class syntax

// Explanation: A more modern and cleaner way to define objects and classes.
// Pros: Improved readability, supports inheritance, and has built-in methods like extends and super.
// Cons: Requires ES6 or later compatibility.

class Person23 {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

const myExAvi3 = new Person23("Lui", 30, "New York");

/// 4. Object.create() method

// Explanation: Creates a new object with a specified prototype, allowing for inheritance.
// Pros: Provides fine-grained control over the prototype and properties.
// Cons: Can be more complex to understand for beginners.

const myExAvi4 = Object.create(null, {
  name: { value: "Lui" },
  age: { value: 30 },
  city: { value: "New York" },
});

/// 5. Destructuring assignment

// Explanation: Extracts properties from an existing object into variables.
// Pros: Concise syntax, useful for creating new objects based on existing ones.
// Cons: Primarily used for extracting properties rather than creating new objects.

const myExAvi5 = {
  names: "Lui",
  ages: 30,
  cities: "New York, Miami",
};

const { names, ages, city } = myExAvi5;

/// 6. Object.assign() method

// Explanation: Creates a new object by copying properties from existing objects.
// Pros: Flexible for merging properties from multiple objects.
// Cons: Can be less readable for complex object creations.

const myExAvi6 = Object.assign(
  {},
  { name: "Lui" },
  { age: 30 },
  { city: "New York" }
);

//// Accessing / Deleting Properties

// - The `delete` keyword in JavaScript is used to remove properties from an object. When you use delete followed by an object and the property name, it attempts to remove the specified property from that object. If the property exists, it is successfully deleted. If the property doesn't exist or is non-configurable, the delete operation will return false.

delete MyFavoriteMcDonaldsOrder.number; // or sides - could be property or method.

// Important Side Notes:
// You cannot delete properties that are part of the object's prototype chain.
// If the property is non-configurable (e.g., defined with Object.defineProperty with configurable: false), the delete operation will fail and return false.
// Using delete can modify the object's structure, so use it with caution.

// There are several ways to access properties and values of an object in JavaScript:

// 1. Dot notation:
// Use a dot (.) followed by the property name to access the value.

const person45 = {
  name: "Luis",
  age: 26,
};
console.log(person45.name); // Output: Luis
console.log(person45.age); // Output: 26

// 2. Bracket notation:
// Use square brackets ([]) with the property name as a string to access the value.
// This is especially useful when the property name is dynamic or contains special characters

const person2 = {
  name: "Luis",
  favoriteColor: "Red",
};
console.log(person2["name"]); // Output: Luis
console.log(person2["favoriteColor"]); // Output: Red

// 3. Computed property names:
// Use square brackets with an expression inside to dynamically create property names.

const key = "age";
const person3 = {
  [key]: 26,
};
console.log(person2.age); // Output: 30

// 4. Destructuring assignment:
// Extract properties from an object into variables using destructuring syntax.

const { name, age } = person3;
console.log(age); // Output: 26

const person567 = {
  name: "Sam",
  age: 30,
};

// 5. Object.keys():
// Returns an array containing the names of all enumerable properties of an object.

const keys = Object.keys(person567);
console.log(keys); // Output: ["name", "age"]

// 6. Object.values():
// Returns an array containing the values of all enumerable properties of an object.

const values = Object.values(person567);
console.log(values); // Output: ["Sam", 30]

// 7. Object.entries():
// Returns an array of key-value pairs for all enumerable properties of an object.

const entries = Object.entries(person567);
console.log(entries); // Output: [["name", "Alice"], ["age", 30]]

//// The Constructor Property in JavaScript

// The constructor property is a built-in property of objects in JavaScript that {references the function used to create the object.} It essentially points back to the constructor function that was used to instantiate the object.

// Accessing the Constructor Property
// You can access the constructor property of an object using dot notation:

function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

const dog = new Dog(
  "Lily",
  "The most beautiful pit mix that the human naked eyes can lay on"
);
console.log(dog.constructor); // Output: Dog
console.log(dog instanceof Animal); // Output: true

//// - Enumerating Properties

function EnumeratingProperties(argument) {
  this.exampleArgument = argument;
  this.exampleMethod = function () {
    console.log("random");
  };
}

const enumProperty = new EnumeratingProperties(5);

for (let key in enumProperty) {
  //if (typeof enumProperty[key] !== "function") to filter properties only and not methods
  console.log(key, enumProperty[key]);
}
//outputs:
// exampleArgument 5
// exampleMethod f () { console.log("random");}

/// Primitive / Value Types vs Reference Types

/// Key Differences:

// Primitives / Value Types - COPIED : When you assign a primitive/value type to a variable, the variable stores a copy of the value. Changes to one variable do not affect the other. In other words, they are copied by their value.
// Reference Types - REFERENCED: When you assign a reference type to a variable, the variable stores a reference to the object in memory. Changes to one variable can affect the other if they refer to the same object. In other words, reference types / objects are copied by their reference.

// Value types
let x = 10;
let y = x;
y = 20;
console.log(x); // Output: 10

// Reference types
let person19 = { name: "Bobby" };
let person20 = person19;
person20.name = "Rocky";
console.log(person19.name); // Output: Rocky

// JavaScript has built-in constructors for all value types:
// Number(): Creates a new number object.
// String(): Creates a new string object.
// Boolean(): Creates a new boolean object.
// Symbol(): Creates a new symbol object.
// BigInt(): Creates a new BigInt object.
// null(): Represents the absence of a value.
// undefined(): Represents an undefined value.

// Constructor Property for Value Types / Primitives:
// Value Types / Primitives: When you create a primitive value (e.g., const number = 10;), it doesn't have a constructor property. Primitive values are not objects.
// Wrapper Objects: However, JavaScript automatically wraps primitive values in corresponding wrapper objects when you access their properties or methods. These wrapper objects have a constructor property that points to the corresponding built-in constructor.
// Constructor functions in JavaScript have several built-in methods and properties that provide additional functionality and flexibility.

/// Reference Type
// Object(): Represents a collection of key-value pairs.
// Array(): Represents an ordered collection of values.
// Function(): Represents a block of code that can be executed.
// Date(): Represents a specific point in time.
// RegExp(): Represents a regular expression pattern.

/// Cloning An Object

const randomObj2 = {
  myNum: 3,
  favFood: "Arepas",
};

const favoriteMeal = {};

/// Methods for Cloning Objects

// - for...in loop: This is the method used in the example. It iterates over the properties of the original object and creates new properties in the new object with the same keys and values.

// - Spread operator (...): This is a concise way to create a shallow copy of an object. For example: const newObject = { ...originalObject };

const another = { ...randomObj2 };

// - Object.assign(): This method can be used to create a shallow copy or a deep copy depending on how it's used. To create a shallow copy;. To create a deep copy, you'll need to implement a custom function or use a library that provides deep cloning functionality.

const newObject = Object.assign(
  {
    newProperty: true,
  },
  randomObj2
);

// Output a cloned randomObj2 + the newProperty: true within the new cloned object

// - JSON.parse(JSON.stringify()): This method can also be used to create a deep copy of an object, but it's less efficient than other methods and may not handle all object types correctly.

//// Shallow vs. Deep Copy:

// A shallow copy of an object creates a new object with the same properties and values. However, if the original object contains nested objects or arrays, the shallow copy will reference the same nested objects or arrays. This means that changes made to the nested objects or arrays in the original object will also be reflected in the shallow copy.

// A deep copy creates a new object with the same properties and values, but it also creates new copies of any nested objects or arrays. This ensures that changes made to the nested objects or arrays in the original object will not affect the deep copy.

// The principle of shallow and deep copies applies to all types in JavaScript, but it's particularly relevant for objects and arrays due to their potential to contain nested structures.

//// Default Methods on Objects

apply(thisArg, [args]);
// Calls a function with a given this value and an array of arguments.
// Useful for passing arguments dynamically or changing the context of a function.

bind(thisArg, args);
// Creates a new function that, when called, has a specified this value and a set of arguments prepended to those provided as call-time arguments.
// Used for creating functions with a fixed this value or for partial application.

call(thisArg, args);
// Calls a function with a given this value and individual arguments.
// Similar to apply, but takes individual arguments instead of an array.

toString();
// Returns a string representation of the function

//// Garbage Collection

// JavaScript handles memory management automatically through a process called garbage collection. This means that the JavaScript engine is responsible for tracking objects and determining when they are no longer in use. When an object becomes unreachable, the garbage collector frees up the memory it occupies.

// Reference Counting: JavaScript often uses a technique called reference counting. Every object keeps track of the number of references pointing to it. When an object's reference count reaches zero, it becomes unreachable and is marked for deletion.

// Mark and Sweep: Another common method is mark and sweep. The garbage collector periodically scans the memory heap, marking reachable objects. Objects that are not marked are considered garbage and are reclaimed.
