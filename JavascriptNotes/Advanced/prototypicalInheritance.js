//// PROTOTYPICAL INHERITANCE

//// Table Of Content

//// - Creating Your Own Prototypical Inheritance
//// - Calling the Super Constructor
//// - Intermediate Function Inheritance

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

// As your application grows and need more Child Constructor functions to inherit from the Parent constructor function, you'll have repeating code changing the prototype for the Child Constructor function.
// To encapsulate this logic, we would centralize it into one function.

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Parent(name, price) {
  this.name = name;
}

function Child(name, price) {
  Service.call(this, name, price);
  this.category = "food";
}

console.log(new Food("salami", 5).name);
