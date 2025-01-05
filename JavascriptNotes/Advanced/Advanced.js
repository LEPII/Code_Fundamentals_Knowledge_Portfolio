///// ADVANCE JS NOTES

// "The best functions are those with no parameters" - Robert C Martin

//// Table Of Content
//// THE 4 PILLARS OF OOP

//// THE 4 PILLARS OF OOP ////

/// Abstraction => Reduce complexity + isolate impact of changes
/// Encapsulation => Reduce complexity + increase usability
/// Inheritance => Eliminates Redundant Code
/// Polymorphism => Refactor ugly switch/case statements

/// Abstraction
// Concept:
// Abstraction focuses on the essential features of an object while hiding the unnecessary details. It simplifies complex systems by providing a higher-level view.

// Benefits:
// Reduced Complexity: Simplifies interactions with objects by hiding unnecessary details.
// Improved Reusability: Allows you to create more generic and flexible components.
// Better Maintainability: Makes code easier to understand and modify.

// Interfaces: While JavaScript doesn't have formal interfaces like some other languages, you can achieve a similar concept using abstract classes (classes with abstract methods) or by defining a set of expected methods.

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class.");
    }
  }

  area() {
    throw new Error("Abstract method not implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const circle = new Circle(5);
console.log(circle.area());

//
//

/// Encapsulation
// Concept:
// Encapsulation is the bundling of data (properties) and the methods (functions) that operate on that data within a single unit, typically a class or an object. This restricts direct access to some of an object's components, making them "private."

// Benefits
// Data Hiding: Protects internal data from accidental or intentional modification.
// Maintainability: Makes code easier to understand and maintain by reducing complexity.
// Flexibility: Allows you to change the internal implementation without affecting the external interface.

// Private Variables: While JavaScript doesn't have strict private variables like some other languages, you can achieve a similar effect using closures:

function Person(firstName, lastName) {
  let fullName = `${firstName} ${lastName}`;

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return fullName;
  };
}

const person = new Person("John", "Doe");
console.log(person.fullName); // undefined (fullName is not directly accessible)
console.log(person.getFirstName()); // "John"

//
//

/// Inheritance

// Concept: Inheritance allows you to create new classes (subclasses or derived classes) from existing ones (parent classes or base classes). Subclasses inherit properties and methods from their parent class, enabling code reuse and a hierarchical structure.

// Benefits:
// Code Reusability: Avoids code duplication by inheriting common properties and methods.
// Modularity: Creates a well-organized and hierarchical structure.
// Extensibility: Allows you to easily add new features to existing classes.

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("Generic animal sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  makeSound() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.makeSound(); // "Woof!"

//
//

/// Polymorphism

// Concept:
// Polymorphism allows objects of different classes to be treated as objects of a common type. This enables you to write more flexible and generic code.

// Implementation:
// Method Overriding: Subclasses can override methods inherited from their parent class.
// Interface (Duck Typing): JavaScript uses "duck typing," where if an object "quacks like a duck," it is treated as a duck. This means that as long as an object has the necessary methods, it can be used interchangeably.

class Shape {
  area() {
    // Default implementation (may not be applicable to all shapes)
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle2 extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

function calculateArea(shape) {
  return shape.area();
}

const rectangle = new Rectangle(5, 3);
const circle2 = new Circle(2);

console.log(calculateArea(rectangle)); // 15
console.log(calculateArea(circle2)); // 12.566370614359172
