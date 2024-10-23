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
// .push(...elements)
//Adds elements to the END of the array.
let fruits0 = ["apple", "banana"];
fruits0.push("orange", "grape");
console.log(fruits0); // Output: ["apple", "banana", "orange", "grape"]

// .unshift(...elements)
// Adds elements to the BEGINNING of the array.
let fruits01 = ["apple", "banana"];
fruits01.unshift("orange", "grape");
console.log(fruits01); // Output: ["orange", "grape", "apple", "banana"]

// .splice(start, deleteCount, ...items)
// Removes elements from the array and inserts new elements.
let fruits02 = ["apple", "banana", "orange", "grape"];
// Remove two elements starting from index 1
fruits02.splice(1, 2);
console.log(fruits02); // Output: ["apple", "grape"]
// Remove one element at index 0 and insert "kiwi" and "mango"
fruits02.splice(0, 1, "kiwi", "mango");
console.log(fruits02); // Output: ["kiwi", "mango", "grape"]ango", "grape"]

/// FINDING ELEMENTS (Primitive Types)
// .indexOf(element, start);
// Searches for the last occurrence of a specified element in an array.
// Returns the index of the last occurrence if found, otherwise returns -1.
// The start parameter (optional) specifies the index from which to start the search, searching backwards.
let fruits = ["apple", "banana", "orange", "apple"];
// Find the index of the first occurrence of "banana"
let index1 = fruits.indexOf("banana");
console.log(index1); // Output: 1
// Find the index of the second occurrence of "apple"
let index2 = fruits.indexOf("apple", 2);
console.log(index2); // Output: 3
// To check whether or not an element is in the array:
console.log(fruits.indexOf(apple) !== -1); // Output: true

// lastIndexOf(element, start)
// Searches for the last occurrence of a specified element in an array.
// Returns the index of the last occurrence if found, otherwise returns -1.
// The start parameter (optional) specifies the index from which to start the search, searching backwards.
let fruits2 = ["apple", "banana", "orange", "apple"];
// Find the index of the last occurrence of "apple"
let index3 = fruits.lastIndexOf("apple");
console.log(index3); // Output: 3
// Find the index of the last occurrence of "apple" starting from index 2
let index4 = fruits.lastIndexOf("apple", 2);
console.log(index4); // Output: 0

// includes(element, start);
// Determines whether an array includes a certain value.
// Returns true if the element exists, otherwise false.
// The start parameter (optional) specifies the index from which to start the search.
let fruits03 = ["apple", "banana", "orange"];
// Check if the array includes "banana"
let result1 = fruits03.includes("banana");
console.log(result1); // Output: true
// Check if the array includes "grape"
let result2 = fruits03.includes("grape");
console.log(result2); // Output: false
// Check if the array includes "apple" starting from index 1
let result3 = fruits03.includes("apple", 1);
console.log(result3); // Output: false

/// FINDING ELEMENTS (Reference Types)
// find(callback(element, index, array));
// Returns the first element in an array that satisfies the provided testing function.
// The callback function takes three arguments:
// - element: The current element being processed.
// - index: The index of the current element.
// - array: The array that find() is being called on.
// If no element is found, undefined is returned.
let fruits04 = ["apple", "banana", "orange"];
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
];
// Find the user named "Bob"
let foundUser = users.find((user) => user.name === "Bob");
console.log(foundUser); // Output: { name: "Bob", age: 30 }
// Find the user who is older than 28
let olderUser = users.find((user) => user.age > 28);
console.log(olderUser); // Output: { name: "Bob", age: 30 }

// findIndex(callback(element, index, array));
// Returns the index of the first element in an array that satisfies the provided testing function.
// The callback function takes three arguments:
// - element: The current element being processed.
// - index: The index of the current element.
// - array: The array that findIndex() is being called on.
// - If no element is found, -1 is returned.
let fruits05 = ["apple", "banana", "orange"];

// Find the index of the first fruit that starts with "b"
let foundIndex = fruits05.findIndex((fruit) => fruit.startsWith("b"));
console.log(foundIndex); // Output: 1

// Find the index of the first fruit with a length greater than 5
let longIndex = fruits05.findIndex((fruit) => fruit.length > 5);
console.log(longIndex); // Output: 1

/// DELETING ELEMENTS
// .pop()
// Removes the last element from an array and returns that element.
let fruits06 = ["apple", "banana", "orange"];
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: "orange"
console.log(fruits06); // Output: ["apple", "banana"]

// .shift()
// Removes the first element from the array and returns it.
let fruits07 = ["apple", "banana", "orange"];
let removedFruit02 = fruits.shift();
console.log(removedFruit); // Output: "apple"
console.log(fruits); // Output: ["banana", "orange"]

// .splice(start, deleteCount, ...items)
// Removes elements from an array and optionally inserts new elements in their place.
// The start parameter specifies the index at which to start removing elements.
// The deleteCount parameter specifies the number of elements to remove.
// The items parameter (optional) specifies elements to insert at the specified position.
let fruits08 = ["apple", "banana", "orange", "grape"];

let removedFruits03 = fruits08.splice(1, 2);
console.log(removedFruits03); // Output: ["banana", "orange"]
console.log(fruits08); // Output: ["apple", "grape"]

// Remove one element at index 0 and insert "kiwi" and "mango"
fruits08.splice(0, 1, "kiwi", "mango");
console.log(fruits08); // Output: ["kiwi", "mango", "grape"]

/// EMPTYING AN ARRAY

// .slice(start, end): Extracts a portion of the array.
// .join(separator): Joins the elements of the array into a string.
// .forEach(callback(element, index, array)): Calls a function for each element in the array.
// .map(callback(element, index, array)): Creates a new array with the results of calling a function for each element in the array.
// .filter(callback(element, index, array)): Creates a new array with elements that pass a test implemented by the provided function.
// .reduce(callback(accumulator, currentValue, currentIndex, array), initialValue): Applies a function to an accumulator and each element in the array to reduce it to a single value.
