//// OBJECTS

// - Objects are a collection a collection of {key: value} pairs.
// - Object are dynamic by nature. Once they are created, we can always add new properties or methods or remove existing ones.

// Using `const` , we cannot reassign the object itself but we could always change the object by adding/removing properties

// - The `delete` keyword in JavaScript is used to remove properties from an object. When you use delete followed by an object and the property name, it attempts to remove the specified property from that object. If the property exists, it is successfully deleted. If the property doesn't exist or is non-configurable, the delete operation will return false.

// Important Notes:
// You cannot delete properties that are part of the object's prototype chain.
// If the property is non-configurable (e.g., defined with Object.defineProperty with configurable: false), the delete operation will fail and return false.
// Using delete can modify the object's structure, so use it with caution.

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
delete MyFavoriteMcDonaldsOrder.number; // or sides - could be property or method.
console.log(MyFavoriteMcDonaldsOrder.favoriteBurger);

//// Defining An Object

/// 1. Object literal
const myExAvi = {
  name: "Lui", // can be any type of value.
  age: 30,
  city: "New York",
};

// Explanation: Directly defines properties and values within curly braces.
// Pros: Simple, concise, and commonly used.
// Cons: Limited for creating complex objects with methods or inheritance.

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
    eatFood() {
      console.log("eat");
    },
  };
}

const exampleObj1 = createObject(1, 2, 3).eatFood();

// To make the object dynamic, we pass them in within the values as properties.
// A short-hand way of writing if the key & value are the same by simply adding the key like in ^ property3

/// 2.2 Constructor function

// Special functions: They are defined using the function keyword, but with a capital letter convention.
// this keyword: They use the this keyword to refer to the newly created object within the function body.

// new keyword: They are called using the new keyword, which creates a new object and binds it to the this keyword.
// When you create a new object from a constructor function without using the new keyword, the behavior can be unpredictable and often leads to unexpected results.
// Here's a breakdown of what typically happens:
// this Binding: Without new, the this keyword inside the constructor function is not automatically bound to a new object. Instead, it usually refers to the global object (e.g., window in a browser environment).
// Property Assignment: Any properties assigned using this within the constructor will be added to the global object, potentially overwriting existing properties.
// Return Value: The constructor function itself will return undefined unless explicitly specified otherwise.

// More formal: They follow a specific syntax and pattern.

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const myExAvi2 = new Person("Lui", 30, "New York");

// Explanation: Creates a function that acts as a blueprint for creating objects.
// Pros: Can be used for creating multiple objects with the same structure, supports inheritance.
// Cons: Less readable and maintainable compared to classes, can lead to confusion with this keyword.

/// `new` keyword
// When you use new followed by a constructor function, it performs the following steps:

// 1. Creates a new empty object.
// 2. Sets the `this` keyword within the constructor function to reference the newly created object.
// 3. Executes the code within the constructor function.
// 4. Returns the newly created object.

/// Key Differences:

//-Feature -	                 - Factory Function -                - Constructor Function -
// Syntax	                       Regular function	                   Capitalized function
// Object creation	             Returns a new object	               Uses new keyword
// this keyword	                 Not used	                           Used to refer to the new object
// Flexibility	                 More flexible	                     Less flexible

/// 3. Class syntax

class Person23 {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

// Explanation: A more modern and cleaner way to define objects and classes.
// Pros: Improved readability, supports inheritance, and has built-in methods like extends and super.
// Cons: Requires ES6 or later compatibility.

const myExAvi3 = new Person23("Lui", 30, "New York");

/// 4. Object.create() method

const myExAvi4 = Object.create(null, {
  name: { value: "Lui" },
  age: { value: 30 },
  city: { value: "New York" },
});

// Explanation: Creates a new object with a specified prototype, allowing for inheritance.
// Pros: Provides fine-grained control over the prototype and properties.
// Cons: Can be more complex to understand for beginners.

/// 5. Destructuring assignment

const myExAvi5 = {
  names: "Lui",
  ages: 30,
  cities: "New York, Miami",
};

// Explanation: Extracts properties from an existing object into variables.
// Pros: Concise syntax, useful for creating new objects based on existing ones.
// Cons: Primarily used for extracting properties rather than creating new objects.

const { names, ages, city } = myExAvi5;

/// 6. Object.assign() method

const myExAvi6 = Object.assign(
  {},
  { name: "Lui" },
  { age: 30 },
  { city: "New York" }
);

// Explanation: Creates a new object by copying properties from existing objects.
// Pros: Flexible for merging properties from multiple objects.
// Cons: Can be less readable for complex object creations.

//

//

//// Accessing An Object

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
  "favorite color": "Red",
};
console.log(person2["name"]); // Output: Luis
console.log(person2["favorite color"]); // Output: Red

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

// // // // //
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

// When you create an object using an object literal, the constructor property points to the Object function. This is because object literals are essentially shorthand for creating new objects using the Object constructor.

/// Primitive / Value Types

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

// Object: Represents a collection of key-value pairs.
// Array: Represents an ordered collection of values.
// Function: Represents a block of code that can be executed.
// Date: Represents a specific point in time.
// RegExp: Represents a regular expression pattern.

/// Key Differences:

// Primitives / Value Types: When you assign a value type to a variable, the variable stores a copy of the value. Changes to one variable do not affect the other. In other words, they are copied by their value.
// Reference Types: When you assign a reference type to a variable, the variable stores a reference to the object in memory. Changes to one variable can affect the other if they refer to the same object. In other words, reference types / objects are copied by their reference.

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
// the object is stored somewhere else in memory and the address of that memory location is stored inside the variable. When you modify either variable, it's changed are immediately available to the other variable.

//
//
//

/// Cloning An Object

const randomObj2 = {
  myNum: 3,
  favFood: "Arepas",
};

const favoriteMeal = {};

//// Methods for Cloning Objects

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

//
//
//

/// Default Methods on Objects

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

//
//
//

//// Built In Objects

/// ARRAY
// - The Array object represents an ordered collection of elements.

// Common Properties:
// length: The number of elements in the array.

// Common Methods:
// push(...elements): Adds elements to the end of the array.
// pop(): Removes the last element from the array and returns it.
// shift(): Removes the first element from the array and returns it.
// unshift(...elements): Adds elements to the beginning of the array.
// slice(start, end): Extracts a portion of the array.
// splice(start, deleteCount, ...items): Removes elements from the array and inserts new elements.
// join(separator): Joins the elements of the array into a string.
// forEach(callback(element, index, array)): Calls a function for each element in the array.
// map(callback(element, index, array)): Creates a new array with the results of calling a function for each element in the array.
// filter(callback(element, index, array)): Creates a new array with elements that pass a test implemented by the provided function.
// reduce(callback(accumulator, currentValue, currentIndex, array), initialValue): Applies a function to an accumulator and each element in the array to reduce it to a single value.

//
//

/// BOOLEAN
// - The Boolean object represents a boolean value (true or false).

// Common Properties
// Boolean.prototype.valueOf(): Returns the primitive boolean value associated with the Boolean object.

//
//

// Error Object
// The Error object represents an error that occurred during program execution.

// Common Properties:
// Error.prototype.message: A human-readable description of the error.
// Error.prototype.name: The name of the error.
// Error.prototype.stack: A string representing the stack trace of the error.

// Common Methods:
// Error.prototype.toString(): Returns a string representation of the error.

//
//

/// MATH
// The Math object provides mathematical constants and functions.

// Common Properties
// Math.E: Euler's number (approximately 2.71828).
// Math.PI: Pi (approximately 3.14159).
// Math.SQRT2: The square root of 2 (approximately 1.41421).
// Math.SQRT1_2: The square root of 1/2 (approximately 0.70711).
// Math.LN2: The natural logarithm of 2 (approximately 0.69315).
// Math.LN10: The natural logarithm of 10 (approximately 2.30259).
// Math.LOG2E: The base-2 logarithm of E (approximately 1.44269).
// Math.LOG10E: The base-10 logarithm of E (approximately 0.43429).

// Common Methods
// Math.abs(x): Returns the absolute value of x.
// Math.acos(x): Returns the arccosine of x in radians.
// Math.asin(x): Returns the arcsine of x in radians.
// Math.atan(x): Returns the arctangent of x in radians.
// Math.atan2(y,
// x): Returns the arctangent of y/x in radians.
// Math.ceil(x): Returns the smallest integer greater than or equal to x.
// Math.cos(x): Returns the cosine of x in radians.
// Math.exp(x): Returns e raised to the power of x.
// Math.floor(x): Returns the largest integer less than or equal to x.
// Math.log(x): Returns the natural logarithm of x.
// Math.max(...values): Returns the maximum value among the arguments.
// Math.min(...values): Returns the minimum value among the arguments.
// Math.pow(x, y): Returns x raised to the power of y.
// Math.random(): Returns a random floating-point number between 0 and 1 (exclusive).
// Math.round(x): Returns the nearest integer to x.
// Math.sin(x): Returns the sine of x in radians.
// Math.sqrt(x): Returns the square root of x.
// Math.tan(x): Returns the tangent of x in radians.

//
//

/// NUMBER
// - The Number object represents a numeric value.

// Common Properties:
// Number.MAX_VALUE: The maximum positive number representable in JavaScript.
// Number.MIN_VALUE: The minimum positive number representable in JavaScript.
// Number.NaN: Represents "Not a Number".
// Number.POSITIVE_INFINITY: Represents positive infinity.
// Number.NEGATIVE_INFINITY: Represents negative infinity.

// Common Methods:
// Number.isInteger(value): Checks if a value is an integer.
// Number.parseFloat(string): Parses a string to a floating-point number.
// Number.parseInt(string, radix): Parses a string to an integer.

//
//

// REGEXP
// The RegExp object represents regular expressions, which are patterns used to match text.

// Common Properties:
// RegExp.prototype.flags: A string containing the flags used in the regular expression.

// Common Methods:
// RegExp.prototype.test(string): Tests whether a string matches a regular expression.
// RegExp.prototype.exec(string): Executes a search for a match in a string.

//
//
//

//// Garbage Collection

// JavaScript handles memory management automatically through a process called garbage collection. This means that the JavaScript engine is responsible for tracking objects and determining when they are no longer in use. When an object becomes unreachable, the garbage collector frees up the memory it occupies.

// Reference Counting: JavaScript often uses a technique called reference counting. Every object keeps track of the number of references pointing to it. When an object's reference count reaches zero, it becomes unreachable and is marked for deletion.

// Mark and Sweep: Another common method is mark and sweep. The garbage collector periodically scans the memory heap, marking reachable objects. Objects that are not marked are considered garbage and are reclaimed.
