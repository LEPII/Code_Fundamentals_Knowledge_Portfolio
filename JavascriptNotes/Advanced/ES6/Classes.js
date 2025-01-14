//// Classes

//// Table Of Content

//// - General
//// - Methods
//// - Class Declaration / Hoisting 
//// - Static vs Instance Methods


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

// Feature	       Instance Method	              Static Method
// Belongs to      Object instance	              Class
// Access	         object.method()	              Class.method()
// this keyword	   Available Not                  available
// Purpose         Operates on instance data	    Utility functions, class-level operations