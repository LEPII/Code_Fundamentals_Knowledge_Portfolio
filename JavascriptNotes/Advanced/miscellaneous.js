//// Miscellaneous

//// Table Of Content

//// Computed Property Names
//// Getters And Setters

//// Optional Chaining
//// Short Circuiting
//// Type Casting (Type Conversion vs Coercion)
//// Regular Expressions
//// Debugging - browser developer tools
//// Performance Optimization

//

//// Computed Property Names ////

// In JavaScript, computed property names allow you to dynamically create object property names using expressions within square brackets [].
// This provides flexibility in how you structure and work with objects.

const propertyName = "dynamicKey";
const obj = {
  [propertyName]: "value",
};

// In this example:

// propertyName is a variable holding a string.
// [propertyName] within the object literal signifies that the property name is computed from the value of the propertyName variable.

// Key Benefits:

// - Dynamic Object Creation: You can create objects with property names that are determined at runtime.
// - Flexibility: Easily adapt object structures based on variables, functions, or other dynamic values.
// - Improved Code Readability: In some cases, computed property names can make your code more concise and easier to understand.

//// Getters And Setters ////

// In JavaScript, getters and setters are special methods that provide a controlled way to access and modify the values of an object's properties.

// Getter: A method that retrieves the value of a property. It's invoked when you try to read the value of a property.

// Setter: A method that sets the value of a property. It's invoked when you try to assign a value to a property.

// Before ES6 (ECMAScript 2015), there was no direct syntax for getters and setters. Developers had to simulate them using the following methods:
// - Using Closure
// - Using Object.defineProperty()

// ES6 introduced a much cleaner and more concise syntax for defining getters and setters:

// Key Advantages of Getters and Setters

class Puppy {
  constructor(pup) {
    this._pup = pup;
  }
  get pup() {
    return this._pup;
  }

  set pupNickName(newNickName) {
    this._pup = newNickName.toUpperCase();
  }
}

const puppy = new Puppy("Lily")

puppy.pup // ==> Lily
puppy.pupNickName = "Patico<3" // => PATICO<3

// Encapsulation: Hide the internal implementation details of how a property is stored or calculated.
// Data Validation: Enforce constraints on the values that can be assigned to a property.
// Computed Properties: Calculate property values based on other properties or internal state.
// Improved Maintainability: Make code more modular and easier to understand and modify.
