//// Operators

//// Types of Operators

/// Arithmetic operators
// +       Adds two numbers
// -       Subtracts two numbers
// *       Multiplies two numbers
// /       Divides two numbers (may return a float depending on the language)
// %       Modulo - Returns the remainder after division


/// Assignment operators
// =       Assigns a value to a variable
// +=      Adds and assigns (e.g., x += 3 is equivalent to x = x + 3)
// -=      Subtracts and assigns (similar concept as +=)
// *=      Multiplies and assigns (similar concept as +=)
// /=      Divides and assigns (similar concept as +=)
// %*=     Modulo and assigns (similar concept as +=)
// Similar compound assignment operators exist for other arithmetic operators

// Increment (++) and Decrement (--) operators

// ++      Adds one to its operand and returns a value 
// --      Subtracts one to its operand and returns a value 

// These operators can be used in two forms: prefix and postfix. 

// * **Prefix (e.g., ++x/--x) = Returns value AFTER incrementing/decrementing. 
// USE CASE: When you want to modify the variable and then use its updated value in the same expression.
// Example: `x = ++y; // Here, y is incremented first, then its new value is assigned to x`

// * **Postfix (e.g., x++/x--) - The  the original value is first returned BEFORE incrementing/decrementing. 
// USE CASE: When you want to use the original value of the variable and then modify it. 
// Example: `z = x++; // Here, the original value of x is assigned to z, then x is incremented`



/// Comparison operators - returned true or false
// Relational operators (compare the order or magnitude of values)
// <       Checks if one value is less than another
// >       Checks if one value is greater than another
// <=      Checks if one value is less than or equal to another
// >=      Checks if one value is greater than or equal to another

// Equality operators (check if values are equal)
// ==      Checks if two values are equal (converts Value on the right side to whatever is on the left side)
// !==      Checks if two values are not equal
// ===     Strict equality - Checks if two values are equal AND have the same type (e.g., 1 === 1.0 is false)



/// Logical operators
// &&      Logical AND - Returns true if both conditions are true
// ||      Logical OR - Returns true if at least one condition is true OR it returns the first true value.  
// !       Logical NOT - Inverts the truth value of a condition
// Ternary (conditional) operator - `condition ? expressionIfTrue : expressionIfFalse`  
// Evaluates a condition and returns one of two expressions based on the outcome. Often used as a concise alternative to if-else statements.


/// Truthy Values:

// These values evaluate to true when encountered in a Boolean context.This means that if you use them in an if statement or a logical expression, they will be treated as true. Here are all truthy values in JavaScript:

// Literal values:
// - Non-zero numbers (positive or negative)
// - Non-empty strings (including strings with whitespace characters)
// - true

// Objects:
// - Any non - null object(including arrays, functions, etc.)

// Falsy Values:
// These values evaluate to false when encountered in a Boolean context. Conversely, using them in an if statement or a logical expression will be treated as false. Here are all falsy values in JavaScript:

// Literal values:
// - 0 (including negative zero -0)
// - "" (empty string)
// - null
// - undefined
// - NaN (Not a Number)

// Boolean:
// - false



/// Bitwise operators
// &       Bitwise AND - Performs AND operation on each bit of two numbers
// |       Bitwise OR - Performs OR operation on each bit of two numbers
// ^       Bitwise XOR - Performs XOR operation on each bit of two numbers
// ~       Bitwise NOT - Inverts each bit of a number
// <<      Left shift - Shifts bits of a number to the left (filling with zeros on the right)
// >>      Right shift - Shifts bits of a number to the right (may fill with zeros or ones on the left depending on the language)
// >>>     Unsigned right shift - Similar to right shift but always fills with zeros on the left