// Primitive Types (String, Number, Boolean, undefined and Null)
// Reference Types (Object, Arrays and Function)
// Use Null when you want to explicity clear the value of a variable. 

/// Operators
// typeof 


////Array
// Best used for lists.

let selectedWeight = [5, 10, 25, 35, 45, 55]
console.log(selectedWeight[0]);


////Function

// Parameter vs Argument

// Arguments are the options being passed into the function 
// Parameter is the placeholder in the function declaration for the argument. 

console.log("1")
setTimeout( ()=> {
    console.log("2")
})
console.log("3")
//// 

// In JavaScript, there are two categories of values when it comes to truthiness and falsiness:
// JavaScript uses type coercion when evaluating truthiness and falsiness. This means it might convert values from one type to another before the comparison. For example, the number 0 is considered falsy, even though it has a numerical value.
// Truthy and falsiness are not the same as truth and falsehood. Truthy and falsy are concepts related to how values behave in Boolean contexts, while truth and falsehood represent the actual logical state of something.
// You can use the Boolean() function to explicitly convert a value to a boolean. However, it's generally recommended to rely on implicit type coercion for readability in most cases.
// Here are some additional points to remember:

// Truthy Values
// These values evaluate to true when encountered in a Boolean context, such as in an if statement or a logical expression. Here's a list of all truthy values in JavaScript.
// - Literal values:
// Non-zero numbers (positive or negative)
// Non-empty strings (including strings with whitespace characters)
// true
// Objects:
// Any non-null object (including arrays, functions, etc.)

// Falsy Values
// These values evaluate to false when encountered in a Boolean context. Here's a list of all falsy values in JavaScript:
// - Literal values:
// 0 (including negative zero -0)
// "" (empty string)
// null
// undefined
// NaN (Not a Number)
// Boolean:
// false
// Important Note: