/**
 * // Description => Ex. Calculate my taxes
 * @param {number} income - my income
 * @returns {number}
 */

//// Integration with Javascript

//// Table Of Content

//// - Including JS Code in TS Projects
//// - Type Checking JS Code
//// - Describing Types Using JSDoc
//// - Creating Declaration Files
//// - Using Definitely Typed Declaration Files

const calculateTaxes = (income) => {
  return income;
};

//// - Including JS Code in TS Projects

// If you have a JS file that you can't necessarily import to another TS file, it's best to turn on the

// /* JavaScript Support */
// "allowJs": true,

// option in our tsconfig file.

//// Type Checking JS Code ////

// Turning on the

// "checkJs": true,

// option in our tsconfig file will give you basic type checking in JS. It's not as good as TS's type checking but it's better than nothing.

// If you want the TS compiler to stay silent during a check, you can tell it use @ts-nocheck on top of the file.

//// Describing Types Using JSDoc ////

// JSDoc is a markup language used to document JavaScript and TypeScript code.
// You write special comments within your code that follow a defined structure, using tags (words starting with an @ symbol) to describe different aspects of your code, such as parameters, return values, types, and more.

// VIEW TOP OF FILE FOR EXAMPLE

// Common JSDoc Tags Used in TypeScript:

// @param {Type} paramName - Description: Documents a function parameter, including its type (which TypeScript can often infer or check) and a description.
// @returns {Type} Description: Documents the return value of a function, including its type and a description.
// @type {Type}: Specifies the type of a variable, property, or object literal. TypeScript can often infer this, but you might use it for clarity or in JavaScript files.
// @typedef {Type} TypeName: Defines a custom type.
// @property {Type} propertyName - Description: Documents a property of an object.
// @class ClassName: Documents a class.
// @constructor: Documents a constructor function (though with TypeScript classes, the constructor is usually self-explanatory).
// @interface InterfaceName: Documents an interface.
// @enum EnumName: Documents an enumeration.
// @memberof Namespace: Specifies that a member belongs to a particular namespace (though TypeScript's namespace keyword is the preferred way to define namespaces).
// @public, @private, @protected: Indicate the visibility of class members (TypeScript's public, private, and protected keywords are the standard way to handle this).
// @deprecated Description: Marks a piece of code as deprecated and provides a reason or alternative.
// @author Author Name: Specifies the author of the code.
// @version Version Number: Indicates the version of the code.

//// Creating Declaration Files ////

// Creating a declaration file in TypeScript essentially means writing a file that describes the shape of existing JavaScript code to the TypeScript compiler. These files end with the .d.ts extension and don't contain any actual implementation logic. Instead, they solely focus on defining the types, interfaces, classes, functions, and variables that are present in the corresponding JavaScript file or module.

// Basically think of a declaration file as a blueprint or a type contract for a JavaScript codebase.

// - There are a few ways declaration files can come into existence:

// 1. Automatically Generated by the TypeScript Compiler: When you write TypeScript code and set the declaration compiler option to true in your tsconfig.json file, the TypeScript compiler will automatically generate .d.ts files alongside your .js output files.

// 2. Manually Written: For existing JavaScript libraries that don't ship with their own declaration files, you might need to write them manually.

// 3. Provided by the Library Author or the DefinitelyTyped Community: Many popular JavaScript libraries are accompanied by declaration files.

//// Definitely Types Library ////

// https://github.com/DefinitelyTyped/DefinitelyTyped.

// This repository is a cornerstone of the TypeScript ecosystem, serving as a massive collection of high-quality TypeScript declaration files (.d.ts) for countless JavaScript libraries and frameworks.

// In essence, Definitely Typed (DT) is a community-driven project that aims to provide type safety and improved developer experience when using JavaScript libraries in TypeScript projects. Since many JavaScript libraries are not written in TypeScript and don't include their own type declarations, Definitely Typed fills this crucial gap.

// npm install --save-dev @types/<library-name>

// Newer JavaScript libraries come with type definition files. So there’s no need to install type definition files separately.
