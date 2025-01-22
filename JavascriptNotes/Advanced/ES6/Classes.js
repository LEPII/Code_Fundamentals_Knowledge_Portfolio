//// Classes

//// Table Of Content

//// - General
//// - Methods
//// - Class Declaration / Hoisting
//// - Static vs Instance Methods
//// - Strict Mode
//// - Private Members
//// - Inheritance In Classes
//// - Method Overriding

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

// Object.getOwnPropertySymbols(myObject)
// getOwnPropertySymbols - This method returns an array of all symbol properties of the myObject instance.

/// Private Members - Approach 2/2 - WeakMaps ///

// - A WeakMap is a special type of object in JavaScript that stores key-value pairs.
// - The key of each pair must be an object.
// - The most crucial difference between a WeakMap and a regular Map is that keys in a WeakMap are weakly held.
//    - weakly held meaning when an object used as a key in a WeakMap is no longer referenced anywhere else in your code, it becomes eligible for garbage collection.
//    - This means that the key-value pair associated with that object in the WeakMap will also be automatically removed.

// Key Characteristics of WeakMaps

// - Keys must be objects: You cannot use strings, numbers, or other primitive values as keys in a WeakMap.
// - No iteration: You cannot directly iterate over the keys or values of a WeakMap using methods like forEach or keys(). This is because the keys might be garbage collected at any time, making iteration unreliable.
// - Size is not trackable: You cannot determine the number of key-value pairs in a WeakMap using the size property.

// Example #1

const weakmap = new WeakMap(); // Creates WeakMap

const obj1 = {};
const obj2 = {};

weakmap.set(obj1, "value1"); // Set key-value pairs
weakmap.set(obj2, "value2");

// Example #2

class MyClass {
  constructor() {
    this._privateData = new WeakMap();
  }

  setData(key, value) {
    this._privateData.set(key, value);
  }

  getData(key) {
    return this._privateData.get(key);
  }
}

// Usage:
const obj3 = {};
const obj4 = {};

const myInstance = new MyClass();

myInstance.setData(obj3, "data for obj3");
myInstance.setData(obj4, "data for obj4");

console.log(myInstance.getData(obj3)); // Output: "data for obj3"

// If obj1 is no longer referenced, the data associated with it will be garbage collected.

// Having All Private Members in a Single WeakMap

// Pros:
// Simplicity
// Reduced Overhead

// Cons:
// Reduced Privacy
// Less Granular Control

// In Summary:
// Choose splitting into separate WeakMaps when:
// - Strong privacy and isolation of private data are critical.
// - Code maintainability and organization are paramount.
// - You anticipate frequent changes or removals of specific sets of private data.

// Choose a single WeakMap when:
// - Simplicity and performance are prioritized.
// - The risk of unintended data access is minimal.
// - Managing multiple WeakMaps adds unnecessary complexity.

//// Inheritance In Classes ////

class Dog {
  constructor(name, vaccinated, groomed) {
    this.name = name;
    this.vaccinated = vaccinated;
    this.groomed = groomed;
  }

  birth(numAmountOfPuppies) {
    console.log(`See gave birth to ${numAmountOfPuppies} puppies`);
  }
}

class Puppy extends Dog {
  constructor(name, vaccinated, groomed, barkedAtNeighborToday) {
    super(name, vaccinated, groomed);
    this.barkedAtNeighborToday = barkedAtNeighborToday;
  }
}

const mySillyDog1 = new Puppy("Lily", true, true, true);

console.log(mySillyDog1.name); // Output: Lily
console.log(mySillyDog1.vaccinated); // Output: true
mySillyDog1.birth(35); // "See gave birth to 35 puppies"

// - Order of Arguments: Make sure the arguments passed to super() in the subclass constructor match the order of parameters in the superclass constructor.
// - Property Shadowing: If a subclass defines a property with the same name as a property in the superclass, the subclass property will "shadow" the superclass property within the subclass.

/// Super() ///

// When a subclass inherits from a superclass, the subclass's constructor must call super() before accessing or modifying `this`

// Why?
// Initialization: The superclass constructor usually initializes essential properties that the subclass relies on. By calling super(), you ensure that these properties are correctly set up before the subclass's constructor continues.
// Preventing errors: If you try to use this before calling super(), you might encounter errors or unexpected behavior, as the object might not be fully initialized yet.

//// Method Overriding ////

// Concept - Method overriding allows a subclass to provide a specific implementation for a method that is already defined in1 its superclass.

// Polymorphism - Enables objects of different classes to be treated as objects of a common superclass, leading to more flexible and adaptable code.

class BaseMethodClass {
  action() {
    console.log("Action!");
  }
}

class SubClass extends BaseMethodClass {
  action() {
    super.action();
    console.log("Cut!");
  }
}

SubClass.action() // ==> "Action!" "Cut!"
