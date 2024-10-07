//// OBJECTS

// Objects are a collection a collection of {key: value} pairs.

/// Defining An Object

// 1. Object literal
const myExAvi = {
  name: "Lui", // can be any type of value.
  age: 30,
  city: "New York",
};

// Explanation: Directly defines properties and values within curly braces.
// Pros: Simple, concise, and commonly used.
// Cons: Limited for creating complex objects with methods or inheritance.

// 2. Constructor function

function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const myExAvi2 = new Person("Lui", 30, "New York");

// Explanation: Creates a function that acts as a blueprint for creating objects.
// Pros: Can be used for creating multiple objects with the same structure, supports inheritance.
// Cons: Less readable and maintainable compared to classes, can lead to confusion with this keyword.

// 3. Class syntax

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }
}

// Explanation: A more modern and cleaner way to define objects and classes.
// Pros: Improved readability, supports inheritance, and has built-in methods like extends and super.
// Cons: Requires ES6 or later compatibility.

const myExAvi3 = new Person("Lui", 30, "New York");

// 4. Object.create() method

const myExAvi4 = Object.create(null, {
  name: { value: "Lui" },
  age: { value: 30 },
  city: { value: "New York" },
});

// Explanation: Creates a new object with a specified prototype, allowing for inheritance.
// Pros: Provides fine-grained control over the prototype and properties.
// Cons: Can be more complex to understand for beginners.

// 5. Destructuring assignment

const myExAvi5 = {
  names: "Lui",
  ages: 30,
  cities: "New York, Miami",
};

// Explanation: Extracts properties from an existing object into variables.
// Pros: Concise syntax, useful for creating new objects based on existing ones.
// Cons: Primarily used for extracting properties rather than creating new objects.

const { names, ages, city } = myExAvi5;

// 6. Object.assign() method

const myExAvi6 = Object.assign(
  {},
  { name: "Lui" },
  { age: 30 },
  { city: "New York" }
);

// Explanation: Creates a new object by copying properties from existing objects.
// Pros: Flexible for merging properties from multiple objects.
// Cons: Can be less readable for complex object creations.

/// Accessing An Object

// There are several ways to access properties and values of an object in JavaScript:

// 1. Dot notation:
// Use a dot (.) followed by the property name to access the value.

const person = {
  name: "Luis",
  age: 26,
};
console.log(person.name); // Output: Luis
console.log(person.age); // Output: 26

// 2. Bracket notation:
// Use square brackets ([]) with the property name as a string to access the value.
// This is especially useful when the property name is dynamic or contains special characters
const person2 = {
  name: "Luis",
  "favorite color": "Red",
};
console.log(person["name"]); // Output: Luis
console.log(person["favorite color"]); // Output: Red

// 3. Computed property names:
// Use square brackets with an expression inside to dynamically create property names.
const key = "age";
const person3 = {
  [key]: 26,
};
console.log(person.age); // Output: 30

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
