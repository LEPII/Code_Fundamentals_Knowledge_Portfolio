//// Classes

//// Table Of Content

//// - General
//// - Methods
//// - Class Declaration / Hoisting
//// - Static vs Instance Methods
//// - Strict Mode
//// - Private Members

// Syntactic Sugar - At their core, JavaScript classes are essentially syntactic sugar over the existing prototype-based inheritance system. They provide a more familiar and cleaner syntax for creating objects and managing their behavior.
// Blueprint for Objects - A class acts as a blueprint or template for creating objects. It defines the properties and methods that objects created from that class will have.
// Under the hood, JavaScript classes still rely on the prototype system.

// Key Features:
// Constructor - The constructor() method is used to initialize the properties of an object when it's created.
// Methods - Define the behavior of objects. These are functions that are part of the class definition.
// Inheritance - Classes can inherit from other classes, allowing for code reusability and creating hierarchical relationships between objects.
// Static Methods - Methods that belong to the class itself, rather than individual instances of the class.

class Pet {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, my dog's name is " + this.name);
  }
}

const patico = new Pet("patico");
patico.greet();

//// Methods ////

// Adding Methods:

// Class Prototype - Methods defined within the class are added to the class's prototype. This makes them accessible to all instances of the class.
// Instance Prototype - You cannot directly add methods to the prototype of an individual instance in a straightforward way. Modifying the instance's prototype directly can lead to unexpected behavior and is generally not recommended.
// Inheritance - When you create an instance of a class, that instance inherits the properties and methods from the class's prototype.
// Method Lookup - When you call a method on an instance, JavaScript first looks for that method on the instance itself. If it's not found, it searches the instance's prototype for the method.w

//// Class Declaration / Hoisting ////

// Hoisting: Class declarations are also hoisted, but with a key difference: only the declaration itself is hoisted, not the class itself.
// - The class name is recognized: You can refer to the class name (e.g., MyClass) before its actual definition.
// - But, you can't use it: You cannot create instances of the class (new MyClass()) or access its properties or methods before the class is fully defined.

// Temporal Dead Zone (TDZ): Between the point where a class is declared and the point where it's actually defined, it's in a "Temporal Dead Zone."

// You cannot access or use the class within this zone.
// Attempting to do so will result in a ReferenceError.

//// Static vs Instance Methods ////

// Instance methods are about the behavior of individual objects.
// Static methods are about actions or utilities related to the class as a whole.

// Feature	       Instance Method	              Static Method
// Belongs to      Object instance	              Class
// Access	         object.method()	              Class.method()
// this keyword	   Available                      Not available
// Purpose         Operates on instance data	    Utility functions, class-level operations

class House {
  constructor(downPayment) {
    this.downPayment = downPayment;
  }

  // instance method
  buy() {}

  // static method
  static parse(str) {
    const downPayment = JSON.parse(str).downPayment;
    return new House(downPayment);
  }
}

const house = House.parse('{"downPayment": 100}');

//// Strict Mode ////

// Strict mode is a special mode of JavaScript execution.
// Enabled by adding "use strict"; at the beginning of a script or a function.
// Introduces stricter rules and helps prevent common errors.
// this is undefined in global scope: If a function is called in the global scope (not as a method of an object), this will be undefined in strict mode. This helps prevent accidental reliance on the global object.

// Classes - Stricter rules apply:
// - All code within a class body (constructor, methods, static methods, etc.) is executed in strict mode.
// - This helps catch potential errors and makes the code more robust.

//// Private Members ////

/// Private Members - Approach 1/2 - Symbols ///

// # (Official Syntax): - NOT RECOMMENDED
// Introduced in a later ECMAScript version.
// Provides true language-level support for private class fields.
// Enforced by the JavaScript engine.

// _ (Convention): - NOT RECOMMENDED
// A widely used convention to signal that a property or method is not part of the public API.
// Relies on developers adhering to the convention.
// Offers no inherent protection against external access.

// What is Symbol()?
// Creates unique identifiers: The Symbol() function creates a unique and immutable value called a Symbol.
// Purpose: Primarily used to create unique property keys for objects.

// Use Cases:
// Unique Property Keys:
// Avoid naming collisions when adding properties to objects, especially when working with third-party libraries.
// Create private properties within objects.

// Enumerations:
// Create unique values for constants or enums.

const uniqueID = Symbol();

// Create unique symbols
const id1 = Symbol();
const id2 = Symbol();

console.log(id1 === id2); // Output: false (Symbols are unique)

// Use symbols as property keys
const obj = {};
obj[id1] = "value1";
obj[id2] = "value2";

console.log(obj[id1]); // Output: "value1"

// Symbols are not included in for...in loop
for (const key in obj) {
  console.log(key); // Output: Will not include id1 or id2
}

//

const _prop1 = Symbol();
const _method1 = Symbol();

class SymbolClass {
  constructor(_prop1) {
    this[_prop1] = _prop1;
  }
  [_method1]() {}
}

/// Private Members - Approach 2/2 - WeakMaps ///
