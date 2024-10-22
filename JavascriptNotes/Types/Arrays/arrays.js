//// ARRAYS 

// - Docs for Arrays - developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// - The Array object represents an ordered collection of elements.

const us = [1, 2];

// us = []; // Outputs Variable due to being unable to reassign an array. // However, you can always modifying the contents of the array using dot notation as arrays are objects.  


//////// Defining An Array 

// 1. Array Literals
let array1 = [1, 2, "hello", true]; // Array with mixed data types

// 2. Using the Array constructor:
// The Array constructor in JavaScript is used to create new array objects. It provides flexibility in creating arrays, allowing you to specify the initial elements or the desired length.

let array3 = new Array(); // Empty array
let array5 = new Array(1, 2, 3); // Array with those elements

// Specifying Length:
// If you pass a single number to the constructor, it creates an array with that length:

let emptyArray = new Array(5); // Creates an array with 5 empty elements

// Note: When using a single number, the array elements will be initialized to undefined.


//// Common Properties:

// .length: The number of elements in the array.


//// Common Methods:

/// ADDING ELEMENTS 
// .push(...elements): Adds elements to the END of the array.
// .unshift(...elements): Adds elements to the BEGINNING of the array.
// .splice(start, deleteCount, ...items): Removes elements from the array and inserts new elements.

/// FINDING ELEMENTS (Primitive Types)

// .indexOf(element, start);
let fruits = ["apple", "banana", "orange", "apple"];
// Find the index of the first occurrence of "banana"
let index1 = fruits.indexOf("banana");
console.log(index1); // Output: 1
// Find the index of the second occurrence of "apple"
let index2 = fruits.indexOf("apple", 2);
console.log(index2); // Output: 3

// lastIndexOf(element, start)
// 


/// FINDING ELEMENTS (Reference Types)


// .pop(): Removes the last element from the array and returns it.
// .shift(): Removes the first element from the array and returns it.
// .slice(start, end): Extracts a portion of the array.
// .join(separator): Joins the elements of the array into a string.
// .forEach(callback(element, index, array)): Calls a function for each element in the array.
// .map(callback(element, index, array)): Creates a new array with the results of calling a function for each element in the array.
// .filter(callback(element, index, array)): Creates a new array with elements that pass a test implemented by the provided function.
// .reduce(callback(accumulator, currentValue, currentIndex, array), initialValue): Applies a function to an accumulator and each element in the array to reduce it to a single value.