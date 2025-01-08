//// INHERITANCE

//// Table Of Content

//// - Concept
//// - Superclass
//// - Prototypes
//// - Instance Members vs Prototype Members
//// - Attributes

//// Concept ////

// Inheritance is a fundamental concept in object-oriented programming (OOP). It allows you to create new classes (or objects) that inherit properties and methods from existing classes. This promotes code reusability and helps organize your code into a hierarchical structure.

/// How Inheritance Works in JavaScript

// JavaScript doesn't have a traditional "class" keyword like languages like Java or C++. However, it achieves inheritance through the prototype chain.
// Prototypes: Every object in JavaScript has a hidden property called [[Prototype]] (or __proto__ in some older browsers). This property points to another object, which acts as its prototype.
// Inheritance: When you try to access a property or method on an object, JavaScript first checks if the object itself has that property. If not, it searches the object's prototype. If the prototype doesn't have it, the search continues up the prototype chain until it either finds the property or reaches the end of the chain (usually the Object.prototype).In Chrome, you can inspect "__proto__" property. But you should not use that in the code.

//// Superclass ////

// In object-oriented programming, a superclass (also known as a base class or parent class) is the class from which other classes inherit properties and methods.

// - Think of it like this:
// Superclass: The general, broader category.
// Subclass: A more specific category that inherits traits from the superclass.

// - Example:
// Superclass: Animal
// Properties: hasLife, canMove
// Methods: eat, sleep

// Subclass: Dog (inherits from Animal)
// Properties: breed, color
// Methods: bark, wagTail (in addition to those inherited from Animal)

//// Prototypes ////

// Every object (except the root object) has a prototype (parent).
// To get the prototype of an object:
Object.getPrototypeOf(obj);

// All objects created with the same constructor will have the same prototype.
// A single instance of this prototype will be stored in the memory.
const x = {};
const y = {};
Object.getPrototypeOf(x) === Object.getPrototypeOf(y); // returns true

// Any changes to the prototype will be immediately visible to all objects
// referencing this prototype.

// Constructors have a "prototype" property. It returns the object that will be used as the prototype for objects created by the constructor.
Object.prototype === Object.getPrototypeOf({});
Array.prototype === Object.getPrototypeOf([]);

//// Instance Members vs Prototype Members  ////

// - Instance Members

function InstanceMember(dog) {
  this.dog = dog; // Instance member
}

const pet1 = new InstanceMember("Lily");
const pet2 = new InstanceMember("Patico");

console.log(pet1.dog); // Output: "Lily"
console.log(pet2.dog); // Output: "Patico"

// Definition:
// Properties and methods that belong to a specific instance (object) of a class or constructor function.
// They are created within the constructor function's body using this.

// Benefits:
// Unique Values: Each instance has its own copy of the instance member, allowing for unique values for each object.
// Data Privacy (to some extent): While not true encapsulation, instance members are less directly accessible from outside the object compared to prototype members.

// - Prototype Members

function PrototypeMember(name) {
  this.name = name;
}

PrototypeMember.prototype.greet = function () {
  console.log("Hello, my pet's name is " + this.name); // <= prototype member
};

const pet3 = new Person("Lily");
const pet4 = new Person("Pa");

pet3.greet(); // Output: "Hello, my name is Alice"
pet4.greet();

// Definition:
// Properties and methods that are shared among all instances of a class or constructor function.
// They are added to the prototype property of the constructor function.

// Benefits:
// Memory Efficiency: Prototype members are shared among all instances, saving memory.
// Code Reusability: Avoids code duplication by defining methods and properties only once on the prototype.
// Flexibility: Changes to prototype members affect all instances of the class.

// - You can also overwrite methods

PrototypeMember.prototype.toString = function () {
  return "Pet with this" + this.name;
};

//// Attributes ////

// In JavaScript, attributes are characteristics or properties that define aspects of an object's behavior. They are not directly the values themselves, but rather control how those values can be accessed and modified.

// To set the attributes for a property:
Object.defineProperty(obj, "propertyName", {
  configurable: false, // cannot be deleted
  writable: false,
  enumerable: false,
});

// To get the attributes of a property:
Object.getOwnPropertyDescriptor(obj, "propertyName");

// Configurable:
// - True (default):
// Property can be deleted.
// Attribute values can be changed.
// - False:
// Property cannot be deleted or changed.

// Enumerable:
// - True (default):
// Property is included in loops like for...in.
// - False:
// Property is not included in for...in loops.

// Writable:
// - True (default):
// Property's value can be changed.
// - False:
// Property's value cannot be changed.

// Value:
// The actual data associated with the property.
