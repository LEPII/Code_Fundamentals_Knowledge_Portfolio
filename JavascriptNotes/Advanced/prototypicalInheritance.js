//// PROTOTYPICAL INHERITANCE

//// Table Of Content

//// - Creating Your Own Prototypical Inheritance
//// - Calling the Super Constructor 


//// Creating Your Own Prototypical Inheritance ////

function Pet() {}

Pet.prototype.running = function () {
  console.log("running");
};

function Dog(name) {
  this.name = name;
}

// new Dog.prototype.constructor() === new Dog();
// As a best practice whenever you reset the prototype of an object, you should also reset the constructor by: 
Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog // explicitly setting the constructor function to the `object.prototype.constructor` property. 


Dog.prototype.bark = function () {
  console.log("bark");
};

const p = new Pet();
const d = new Dog("Max");

//// Calling the Super Constructor ////  
