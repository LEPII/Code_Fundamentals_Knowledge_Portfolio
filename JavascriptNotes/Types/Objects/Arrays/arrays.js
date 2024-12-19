//// ARRAYS

// - Docs for Arrays - developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// - The Array object represents an ordered collection of elements.

//// TABLE OF CONTENT

//// Defining An Array

//// Common Properties:
//// -.length:

//// Common Methods:
/// - ADDING ELEMENTS
/// - FINDING ELEMENTS (Primitive Types)
/// - FINDING ELEMENTS (Reference Types)
/// - REMOVING ELEMENTS
/// - EMPTYING AN ARRAY
/// - COMBINING, SLICING & COPYING ARRAYS
/// - ITERATING ARRAYS
/// - JOINING ARRAYS
/// - SORTING ARRAYS
/// - TESTING THE ELEMENTS OF AN ARRAYS
/// - FILTERING AN ARRAY
/// - MAPPING AN ARRAY
/// - REDUCING AN ARRAY

const us = [1, 2];

// us = []; // Outputs Variable due to being unable to reassign an array. // However, you can always modifying the contents of the array using dot notation as arrays are objects.

//// Defining An Array

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

//// Common Properties

// .length: The number of elements in the array.

//// Common Methods

// Iterative methods

// Many array methods take a callback function as an argument. The callback function is called sequentially and at most once for each element in the array, and the return value of the callback function is used to determine the return value of the method. They all share the same signature:

// method(callbackFn, thisArg);

// Where callbackFn takes three arguments:
// - element - The current element being processed in the array.
// - index - The index of the current element being processed in the array.
// - array - The array that the method was called upon.

// What callbackFn is expected to return depends on the array method that was called.

/// ADDING ELEMENTS
// .push(...elements) - Adds elements to the END of the array.
let fruits0 = ["apple", "banana"];
fruits0.push("orange", "grape");
console.log(fruits0); // Output: ["apple", "banana", "orange", "grape"]

// .unshift(...elements) - Adds elements to the BEGINNING of the array.
let fruits01 = ["apple", "banana"];
fruits01.unshift("orange", "grape");
console.log(fruits01); // Output: ["orange", "grape", "apple", "banana"]

// .splice(start, deleteCount, ...items) - Removes elements from the array and inserts new elements.
let fruits02 = ["apple", "banana", "orange", "grape"];

fruits02.splice(1, 2); // Remove two elements starting from index 1
console.log(fruits02); // Output: ["apple", "grape"]

fruits02.splice(0, 1, "kiwi", "mango"); // Remove one element at index 0 and insert "kiwi" and "mango"
console.log(fruits02); // Output: ["kiwi", "mango", "grape"]ango", "grape"]

/// FINDING ELEMENTS (Primitive Types)
// .indexOf(element, start);
// - Searches for the last occurrence of a specified element in an array.
// - Returns the index of the last occurrence if found, otherwise returns -1.
// - The start parameter (optional) specifies the index from which to start the search, searching backwards.
let fruits = ["apple", "banana", "orange", "apple"];
let index1 = fruits.indexOf("banana"); // Find the index of the first occurrence of "banana"

console.log(index1); // Output: 1 // Find the index of the second occurrence of "apple"
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

/// REMOVING ELEMENTS
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
fruits08.splice(0, 3, "kiwi", "mango");
console.log(fruits08); // Output: ["kiwi", "mango", "grape"]

/// EMPTYING AN ARRAY

// Solution 1 - Reassignment to an Empty Array Literal
let theArray = [0, 1, 2, 3];
theArray = [];
// Pros: Simple and straightforward. Efficient for complete emptying.
// Cons: Doesn't modify the original array reference.

// Solution 2 - Setting the Length Property to Zero
theArray.length = 0;
// Pros: Modifies the original array. Can be useful for certain operations, like resetting the array.
// Cons: Less intuitive than reassignment. Might not be the most efficient method in all cases.

// Solution 3 - Setting the Length Property to Zero
theArray.splice(0, theArray.length);
// Pros: Modifies the original array. Flexible for removing elements from specific indices.
//Cons: Can be less efficient than other methods, especially for large arrays.

// Additional Considerations:
// Array References: If you have multiple references to the same array, modifying one will affect all references.
// Memory Allocation: While emptying an array doesn't immediately free up memory, subsequent garbage collection will reclaim the unused space.

// Solution 4 - Using the .pop() method - not recommended approach
while (myArray.length > 0) {
  myArray.pop();
}

// Pros: It's a straightforward approach that can be easy to understand.
// Cons: Inefficient: The pop() method removes and returns the last element of the array. In a while loop, this operation is repeated until the array is empty, which can be less efficient than other methods. Array Modification: It directly modifies the original array, which might not be desirable in certain scenarios.

/// COMBINING, SLICING & COPYING ARRAYS

const first = [1, 2, 3];
const second = [4, 5, 6];

// COMBINING Arrays

let third = first.concat(second);
// OR
let fourth = [...first, ...second];
// can be customizable to where you want to add elements ex. let fourth = [...first, "a", ...second, "b", ...third];
// Both Outputs: [1, 2, 3, 4, 5, 6]

// SLICING Arrays
third.slice(2, 4);
// Output: [4, 5]

// COPYING An Array
copy1 = four.slice(); // no arguments on splice method will return a copy
// OR
copy2 = [...four];

// The slice() method in JavaScript is a powerful tool for extracting a portion of an array into a new array. It's non-destructive, meaning it doesn't modify the original array.

// How it Works:
// - Creates a new array: A new array is created to hold the extracted elements.
// - Copies elements: Elements from the original array, starting at the start index (inclusive) and up to, but not including, the end index, are copied to the new array.
// - Negative Indices: You can use negative indices to count from the end of the array. For example, -1 refers to the last element, -2 to the second-to-last, and so on.
// - Omitting Parameters: If you omit the end parameter, slice() will extract elements from the start index to the end of the array.
// - Empty Array: If start is greater than or equal to the array's length, or if end is less than or equal to start, an empty array is returned.

// Objects in Arrays: How Slice and Concat Work:
// - When working with arrays of objects in JavaScript, slice() and concat() operate on the object references, not the objects themselves. This means they create shallow copies of the array, and each object in the new array will reference the same object in the original array. When you copy an object or array, you're essentially creating a new reference to the same underlying data structure. This is known as a shallow copy.

// Spread Operator on Arrays
// - The spread operator expands the array into individual elements, not creating a new array.
// - It's a shallow copy, so changes to objects within the array will be reflected in both the original and copied arrays.
// - For deep copying, you'll need to use techniques like JSON.parse(JSON.stringify()) or libraries like Lodash.

// Shallow Copy vs. Deep Copy

// Shallow Copy
// - A shallow copy means that the new array contains references to the same objects as the original array. Any changes made to an object in one array will also be reflected in the other.
// - Creates a new reference to the original object or array.
// - Changes to the original object or array will be reflected in the copy and vice versa.
// Use cases:
// - When you want to create a new reference to an object or array without modifying the original.
// - When you're sure that you won't be modifying the objects or arrays in either the original or the copy.

// Deep Copy
// - Creates a new object or array with copies of all the nested objects and arrays.
// - Changes to the original object or array will not affect the copy and vice versa.
// Use cases:
// - When you want to create an independent copy of an object or array.
// - When you want to modify the copy without affecting the original.
// - When you're dealing with nested objects and arrays and want to ensure that changes to one don't affect the other.

/// ITERATING ARRAYS

const ages = [2, 10, 24, 49, 54];

for (let age of ages) console.log(age);
// Output: 2 10 24 49 54

// .forEach(callback(element, index, array)): Calls a function for each element in the array.
ages.forEach((age, index) => console.log(index, age));
// Output: 0 2 1 10 2 24 3 49 4 54 // Outputs index next to elements

/// JOINING ARRAYS
// .split(separator, limit): The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.
// .join(separator): Joins the elements of the array into a string.

/// Creating URL Slugs with split() and join()
// A URL slug is a keyword-rich identifier used in permalinks. It's typically derived from a longer piece of text, such as a title or article headline. To create a URL slug, we often need to:
// - Convert text to lowercase:
// - Remove special characters:
// - Replace spaces with hyphens:

function createSlug(title) {
  // Convert the title to lowercase
  const lowerCaseTitle = title.toLowerCase();

  // Remove special characters and extra spaces
  const cleanedTitle = lowerCaseTitle
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ");

  // Split the cleaned title into an array of words
  const words = cleanedTitle.split(" ");

  // Join the words with hyphens
  const slug = words.join("-");

  return slug;
}

// Example usage:
const title = "This is a Sample Title with Special Characters!";
const slug = createSlug(title);
console.log(slug); // Output: this-is-a-sample-title-with-special-characters

// Additional Considerations:

// Word Length: Consider limiting the length of each word in the slug to avoid overly long URLs.
// Duplicate Words: You might want to remove duplicate words or use a more sophisticated word frequency analysis.
// Language-Specific Considerations: If you're dealing with non-Latin characters, you might need additional normalization steps, such as converting characters to their ASCII equivalents.
// Custom Slug Generation Libraries: For more advanced slug generation, consider using libraries like slugify or slug. These libraries often provide more robust and flexible solutions, including handling various character encodings and language-specific rules.

/// SORTING ARRAYS

// Sorting Arrays: .sort(compareFn)

// Basic Sorting:
// - The sort() method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings in ascending alphabetical order.

// Custom Sorting:
// - To customize the sorting order, you can pass a comparison function as an argument to the sort() method. The comparison function should take two arguments (a and b) and return:

// - A negative number if a should come before b
// - A positive number if b should come before a
// - Zero if a and b are considered equal

// Sort numbers in descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
// - Subtracting a from b: This comparison logic ensures that the smaller value comes first.
// - Subtracting b from a: This comparison logic would reverse the order, making the larger value come first.

// Sort strings by length
let words = ["apple", "banana", "cherry", "date"];
words.sort((a, b) => {
  a.length - b.length;
});
console.log(words); // Output: ["date", "apple", "banana", "cherry"]

// Sorting Arrays of Objects:
// - To sort arrays of objects, you can specify a property to sort by within the comparison function:

let myCrew = [
  { name: "Batman", age: 26 },
  { name: "Cat Woman", age: 25 },
  { name: "BatDogX2", age: "0", comment: "Forever Young" },
];

// Sort by age in ascending order
// - If one of the ages in the array of objects is a string, the sort() method will perform a lexicographical comparison, which means it will sort the strings alphabetically instead of numerically.
myCrew.sort((a, b) => a.age - b.age);

// In this case, the object with the age "0" might not be sorted correctly, as it will be compared as a string. To ensure correct numerical sorting, you can convert the ages to numbers before comparison:
myCrew.sort((a, b) => Number(a.age) - Number(b.age));

// Sort by name in alphabetical order
myCrew.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
});

/// TESTING THE ELEMENTS OF AN ARRAYS

// .every(callbackFn, thisArg)
// - The every() method of Array instances tests whether ALL ELEMENTS in the array pass the test implemented by the provided function. It returns a Boolean value.
// Return value
// - true unless callbackFn returns a falsy value for an array element, in which case false is immediately returned.

const myCrewAges = [25, 26, 0];

const allPos = myCrewAges.every((value) => {
  return value >= 0;
});
console.log(allPos);
// Output: true

// .some(callbackFn, thisArg)
// - The some() method of Array instances tests whether AT LEAST ONE element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
// Return value
// - false unless callbackFn returns a truthy value for an array element, in which case true is immediately returned.

/// FILTERING AN ARRAY

// .filter(callbackFn, thisArg)
// - The filter() method of Array instances CREATES A SHALLOW COPY of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
// Return value
// - A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.

// Filtering by Property Value:
const adults = myCrew.filter((person) => person.age >= 18);

// Filtering by Type:
const onlyNumbers = myCrew.filter((person) => typeof person.age === "number");

/// MAPPING AN ARRAY

// .map(callbackFn, thisArg)
// - The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
// Return value
// - A new array with each element being the result of the callback function.

const items = onlyNumbers.map((n) => `<li>${person.name} - ${person.age}</li>`);

const html = "<ul>" + items.join("") + "</ul>";

// You can also map values to objects

const mappedObject = myCrewAges.map((n) => ({ theRealValue: n }));

// You can also chain these methods

const numbersExample = [-3, 5, 40, 3002];

const chainedArrayMethods = numbersExample
  .filter((n) => n > 0)
  .map((n) => ({ theOGValues: n }))
  .filter((obj) => obj.theOGValues > 30)
  .map((obj) => obj.theOGValues);

/// REDUCING AN ARRAY

// .reduce(callbackFn, initialValue)

// - The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.  - The value could be anything.
// - The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
// Return value
// - The value that results from running the "reducer" callback function to completion over the entire array.

const numbersEx = [3, 5, 6, 49];

// Problem: We want to add all of these elements together;

// Solution 1:

let sum = 0;
for (let n of numbersExs) sum += n;

// Solution 2:

// the callbackFn takes 2 Parameters:
// accumulator or the initialValue - The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].
// currentValue - The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

const theReduceMethodSum = numbersEx.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
