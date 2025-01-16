//// PROTOTYPICAL INHERITANCE

//// Table Of Content

//// - WHEN TO USE PROTOTYPICAL INHERITANCE
//// - Creating Your Own Prototypical Inheritance
//// - Calling the Super Constructor
//// - Intermediate Function Inheritance
//// - Method Overriding
//// - Polymorphism
//// - Mixins

//// WHEN TO USE PROTOTYPICAL INHERITANCE ////
// 1. Creating Reusable Object Structures:
// - When you need to create many objects with similar properties and methods. Prototypes provide a blueprint, allowing you to efficiently create multiple instances with shared behavior.
// - For building complex object hierarchies. You can create a chain of prototypes, where objects inherit properties and methods from their parent prototypes, enabling you to model intricate relationships between objects.

// 2. Flexible and Dynamic Inheritance:
// - When you need to modify or extend object behavior after creation. You can dynamically add or modify properties and methods on the prototype, and all instances that inherit from that prototype will automatically reflect those changes.
// - For situations where inheritance patterns might change over time. Prototypes offer more flexibility than class-based inheritance, as you can modify the inheritance chain at runtime.

// 3. Simulating Class-like Behavior:
// - When you want to achieve class-like behavior without using ES6 classes. While ES6 classes provide a more familiar syntax, they are essentially syntactic sugar on top of the prototype system. Understanding prototypal inheritance provides a deeper understanding of how objects work in JavaScript.

//// Creating Your Own Prototypical Inheritance ////

function Pet() {}

Pet.prototype.running = function () {
  console.log("running");
};

function Dog(name) {
  this.name = name;
}

// new Dog.prototype.constructor() === new Dog();

// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
// As a best practice whenever you reset the prototype of an object, you should also reset the constructor by:

Dog.prototype.bark = function () {
  console.log("bark");
};

Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog; // explicitly setting the constructor function to the `object.prototype.constructor` property.

const dog1 = new Dog("jeff");

dog1.running();

//// Calling the Super Constructor ////

// As a reminder, The call() method of Function instances calls this function with a given this value and arguments provided individually.

function Service(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Service.call(this, name, price);
  this.category = "food";
}

console.log(new Food("salami", 5).name);
// Expected output: "salami"

//// Intermediate Function Inheritance ////

// Intermediate Function Inheritance - A pattern for creating inheritance in JavaScript where a temporary, empty function (the "intermediate" function) acts as a bridge to link the child class's prototype to the parent class's prototype.

// As your application grows and need more Child Constructor functions to inherit from the Parent constructor function, you'll have repeating code changing the prototype for the Child Constructor function.
// To encapsulate this logic, we would centralize it into one function.

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
function ParentFunction(name, price) {
  this.name = name;
  this.price = price;
}

ParentFunction.prototype.duplicate = function () {
  console.log("duplicate");
};

function ChildFunction(name, price) {
  ParentFunction.call(this, name, price);
  this.category = "food";
}

extend(ChildFunction, ParentFunction);

const child2 = new ChildFunction("Luis", "priceless");
// console.log(child2.name) ==> output ==>  "Luis"

//// Method Overriding ////

// In object-oriented programming, method overriding occurs when a subclass provides a specific implementation for a method that is already defined in its parent class.
// - Same Method Signature: The overriding method in the subclass must have the exact same name, parameters, and return type as the method in the parent class.

// METHOD SIGNATURE
// - Definition: A method signature defines the public interface of a method. It essentially specifies:
// - - Method Name: The name of the method.
// - - Parameters: The number, order, and data types of the parameters the method accepts.
// - - Return Type: (Optional) The data type that the method is expected to return.

// - Different Implementation: The actual code within the method's body in the subclass will be different, providing customized behavior.

// - When to Use Method Overriding -

// Specialized Behavior: When a subclass needs to provide a more specific or tailored behavior for a method that is inherited from the parent class.
// Polymorphism: Method overriding is a key concept in achieving polymorphism, where objects of different classes can be treated as objects of a common type.
// Extending Functionality: You can add new features or modify the existing behavior of a method while maintaining a common interface.

ChildFunction.prototype.duplicate = function () {
  console.log("The second inherited duplicate");
};

// child2.duplicate() // Output: The second / actual inherited
// The JS engine walks up the prototypical chain and picks the first implementation.
// Even if the `duplicate` method is defined on both the parent and child objects, the implementation on the child object will be used.

// You can still call it on the parent method:
// If you don't need `this`=>  Parent.prototype.duplicate()
// If you need `this` => Parent.prototype.duplicate.call(this)

// Order of Method Overriding and Intermediate Function Inheritance
// The line Child.prototype = Object.create(Parent.prototype) effectively replaces the existing prototype of the Child function/object with a new object that inherits from the Parent's prototype.
// This discards any methods or properties previously defined directly on the Child.prototype.
// ORDER MATTERS -  When you override a method on the Child.prototype BEFORE setting it to Object.create(Parent.prototype),
// you're essentially defining a method directly on the Child's prototype which discards any methods or properties previously defined directly on the Child.prototype.

//// Polymorphism ////

function Child2Function() {}

extend(Child2Function, ParentFunction);

Child2Function.prototype.duplicate = function () {
  console.log("The third  inherited duplicate");
};

const children = [new ChildFunction(), new Child2Function()];

for (let child of children) child.duplicate;

//// Mixins ////

// The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// SYNTAX: Object.assign(target, source1, source2);

const eating = {
  eat: function () {
    this.hunger--;
    console.log("this food is really good");
  },
};

const squatting = {
  squat: function () {
    this.strength++;
    console.log("this squat is really good");
  },
};

function Person() {}

const luis = Object.assign({}, eating, squatting);

// Or with the constructor function
Object.assign(Person.prototype, eating, squatting);

const lulu = new Person();
console.log(lulu);
// outputs: Person.prototype=> eating and squatting methods accessible.

// If you need to create a new dog object with a NEW ability to bark:
const barking = {
  bark: function () {
    this.doggySwagger++;
    console.log("BARK!");
  },
};

function Dog() {}

Object.assign(Dog.prototype, eating, barking);

const doggy = new Dog();
console.log(doggy);
// outputs: Dog.prototype=> eating and barking methods accessible.

// - To Make Mixins More Readable

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

// same as the example above. 
mixin(Dog.prototype, eating, barking);
