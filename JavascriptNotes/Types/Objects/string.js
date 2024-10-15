//// STRINGS

// string primitive
const message = "hiii youu looking @ my code and making me blush ;)"

// string object 
const objectString = new String("<3 <3")


// Unlike some other programming languages where strings are treated as primitive data types, JavaScript treats them as objects. This means they have properties and methods associated with them. 

// // - The `String` objects provides mathematical constants and functions.

// Common Properties
// String.fromCharCode(...codePoints): Creates a new string from the specified code points.

// Common Methods
// charAt(index): Returns the character at the specified index.
// charCodeAt(index): Returns the Unicode code point of the character at the specified index.
// concat(...strings): Concatenates the specified strings to the end of the string.
// indexOf(searchValue, fromIndex): Returns the index of the first occurrence of the specified search value in the string.
// lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of the specified search value in the string.
// length: Returns the length of the string.
// replace(searchValue, newValue): Replaces the first occurrence of the specified search value with the specified new value.
// slice(start, end): Extracts a substring from the string.
// split(separator, limit): Splits the string into an array of substrings.
// substring(start, end): Extracts a substring from the string.
// toLowerCase(): Converts the string to lowercase.
// toUpperCase(): Converts the string to uppercase.
// trim(): Removes leading and trailing whitespace from the string.
// trimStart(): Removes leading whitespace from the string.
// trimEnd(): Removes trailing whitespace from the string.

//
//

/// Escape Notation

// In JavaScript, escape notation is used to represent characters that are difficult or impossible to type directly within a string. These characters include special characters like newline, tab, quotation mark, and backslash itself.

// Escape Sequences

// Here's a list of commonly used escape sequences in JavaScript:

// \n: Newline
// \t: Tab
// \r: Carriage return
// \v: Vertical tab
// \f: Form feed
// \b: Backspace
// \a: Alert (bell)
// \: Backslash
// ': Single quote
// ": Double quote


let myString = "With Fire And Blood";

// Accessing properties:
console.log(myString.length); // Output: 19

//
//

// Template Literals in JavaScript are a powerful feature that allow you to embed expressions within strings using backticks (`). They provide a more readable and flexible way to construct strings, especially when dealing with dynamic content.

let myName = "Lui";
let age = 10;

// Using template literal
let greeting = `Hello, ${myName}! You are ${age} years old.`;
console.log(greeting); // Output: Hello, let myName = "Lui";! You are 10 years old.



// Key benefits of using template literals:

// Expression Interpolation:
// You can directly embed JavaScript expressions within the string using ${expression} syntax.
// This eliminates the need for string concatenation, making your code more concise and easier to read.

// Multi-line Strings:
// Template literals allow you to write multi-line strings without using escape characters or concatenation.
// This improves code readability and maintainability.

// Tagged Templates:
// You can create custom functions (tagged templates) to process the template literal string and its embedded expressions.
// This provides a flexible way to customize string formatting and behavior.