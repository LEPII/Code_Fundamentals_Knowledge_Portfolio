//// ARRAYS 

//// Initializing Array 

const us = [1, 2];
// us = []; // Outputs Variable due to being unable to reassign an array.

// However, you can always modifying the contents of the array using dot notation as arrays are objects.  




//// Built In Objects
// - The Array object represents an ordered collection of elements.

// Common Properties:
// length: The number of elements in the array.

// Common Methods:
// push(...elements): Adds elements to the END of the array.
// unshift(...elements): Adds elements to the BEGINNING of the array.
// pop(): Removes the last element from the array and returns it.
// shift(): Removes the first element from the array and returns it.

// slice(start, end): Extracts a portion of the array.
// splice(start, deleteCount, ...items): Removes elements from the array and inserts new elements.
// join(separator): Joins the elements of the array into a string.
// forEach(callback(element, index, array)): Calls a function for each element in the array.
// map(callback(element, index, array)): Creates a new array with the results of calling a function for each element in the array.
// filter(callback(element, index, array)): Creates a new array with elements that pass a test implemented by the provided function.
// reduce(callback(accumulator, currentValue, currentIndex, array), initialValue): Applies a function to an accumulator and each element in the array to reduce it to a single value.
