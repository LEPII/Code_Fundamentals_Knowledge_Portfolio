//// Built In Objects

/// ARRAY
// - The Array object represents an ordered collection of elements.

// Common Properties:
// length: The number of elements in the array.

// Common Methods:
// push(...elements): Adds elements to the end of the array.
// pop(): Removes the last element from the array and returns it.
// shift(): Removes the first element from the array and returns it.
// unshift(...elements): Adds elements to the beginning of the array.
// slice(start, end): Extracts a portion of the array.
// splice(start, deleteCount, ...items): Removes elements from the array and inserts new elements.
// join(separator): Joins the elements of the array into a string.
// forEach(callback(element, index, array)): Calls a function for each element in the array.
// map(callback(element, index, array)): Creates a new array with the results of calling a function for each element in the array.
// filter(callback(element, index, array)): Creates a new array with elements that pass a test implemented by the provided function.
// reduce(callback(accumulator, currentValue, currentIndex, array), initialValue): Applies a function to an accumulator and each element in the array to reduce it to a single value.

//
//

/// BOOLEAN
// - The Boolean object represents a boolean value (true or false).

// Common Properties
// Boolean.prototype.valueOf(): Returns the primitive boolean value associated with the Boolean object.

//
//

// Error Object
// The Error object represents an error that occurred during program execution.

// Common Properties:
// Error.prototype.message: A human-readable description of the error.
// Error.prototype.name: The name of the error.
// Error.prototype.stack: A string representing the stack trace of the error.

// Common Methods:
// Error.prototype.toString(): Returns a string representation of the error.

//
//

/// MATH
// The Math object provides mathematical constants and functions.

// Common Properties
// Math.E: Euler's number (approximately 2.71828).
// Math.PI: Pi (approximately 3.14159).
// Math.SQRT2: The square root of 2 (approximately 1.41421).
// Math.SQRT1_2: The square root of 1/2 (approximately 0.70711).
// Math.LN2: The natural logarithm of 2 (approximately 0.69315).
// Math.LN10: The natural logarithm of 10 (approximately 2.30259).
// Math.LOG2E: The base-2 logarithm of E (approximately 1.44269).
// Math.LOG10E: The base-10 logarithm of E (approximately 0.43429).

// Common Methods
// Math.abs(x): Returns the absolute value of x.
// Math.acos(x): Returns the arccosine of x in radians.
// Math.asin(x): Returns the arcsine of x in radians.
// Math.atan(x): Returns the arctangent of x in radians.
// Math.atan2(y,
// x): Returns the arctangent of y/x in radians.
// Math.ceil(x): Returns the smallest integer greater than or equal to x.
// Math.cos(x): Returns the cosine of x in radians.
// Math.exp(x): Returns e raised to the power of x.
// Math.floor(x): Returns the largest integer less than or equal to x.
// Math.log(x): Returns the natural logarithm of x.
// Math.max(...values): Returns the maximum value among the arguments.
// Math.min(...values): Returns the minimum value among the arguments.
// Math.pow(x, y): Returns x raised to the power of y.
// Math.random(): Returns a random floating-point number between 0 and 1 (exclusive).
// Math.round(x): Returns the nearest integer to x.
// Math.sin(x): Returns the sine of x in radians.
// Math.sqrt(x): Returns the square root of x.
// Math.tan(x): Returns the tangent of x in radians.

//
//

/// NUMBER
// - The Number object represents a numeric value.

// Common Properties:
// Number.MAX_VALUE: The maximum positive number representable in JavaScript.
// Number.MIN_VALUE: The minimum positive number representable in JavaScript.
// Number.NaN: Represents "Not a Number".
// Number.POSITIVE_INFINITY: Represents positive infinity.
// Number.NEGATIVE_INFINITY: Represents negative infinity.

// Common Methods:
// Number.isInteger(value): Checks if a value is an integer.
// Number.parseFloat(string): Parses a string to a floating-point number.
// Number.parseInt(string, radix): Parses a string to an integer.

//
//

// REGEXP
// The RegExp object represents regular expressions, which are patterns used to match text.

// Common Properties:
// RegExp.prototype.flags: A string containing the flags used in the regular expression.

// Common Methods:
// RegExp.prototype.test(string): Tests whether a string matches a regular expression.
// RegExp.prototype.exec(string): Executes a search for a match in a string.

//
//
//
