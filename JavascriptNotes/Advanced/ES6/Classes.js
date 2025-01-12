//// Classes

//// Table Of Content

//// - General 
//// - Methods 

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

In JavaScript classes, methods end up on the prototype of the class.

// Prototype - Every class has an associated prototype object. This prototype object contains the methods that are defined within the class.
// Inheritance - When you create an instance of a class, that instance inherits the properties and methods from the class's prototype.
// Method Lookup - When you call a method on an instance, JavaScript first looks for that method on the instance itself. If it's not found, it searches the instance's prototype for the method.