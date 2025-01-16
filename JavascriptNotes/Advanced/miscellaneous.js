//// Miscellaneous

//// Table Of Content

//// Computed Property Names
//// Optional Chaining
//// Short Circuiting
//// Type Casting (Type Conversion vs Coercion)
//// Regular Expressions
//// Debugging - browser developer tools
//// Performance Optimization

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
