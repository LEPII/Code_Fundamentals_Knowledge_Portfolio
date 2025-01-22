//// Tools

//// Table Of Content
//// - Modules
//// - Common JS Modules
//// - ES6 Modules
//// - ES6 Tooling

//// Modules ////

// In JavaScript, modules are a way to organize and structure code into reusable units. They promote better code organization, maintainability, and prevent namespace collisions.

//// Common JS Modules ////

// - Primarily designed for server-side environments, specifically Node.js.
// - Synchronous Loading - When require() is called, the module is loaded immediately. This can potentially block the execution of other parts of the script.
// - Well-suited for Server-Side - CJS is deeply integrated into Node.js and is the standard module system for server-side JavaScript development.
// - Less Suitable for Browsers: While possible, CJS is not as well-suited for browser environments due to its synchronous nature.

// - Imports
// require(): This function is used to import external modules
// const module1 = require('./module1'); - This line imports a module named "module1" located in the same directory.
// const os = require('os'); - This imports the built-in Node.js "os" module.

// - Exports
// module.exports: This object is used to export values from a module
// module.exports = { function1, function2 }; - Exports an object containing two functions.
// module.exports = myFunction; -  Exports a single function.

//// ES6 Modules ////

// - Standardized by the ECMAScript specification, making them the official standard for JavaScript modules.
// - ESM supports asynchronous loading by default, meaning modules are loaded in the background while the rest of the script continues to execute. This improves user experience, especially in web browsers. Asynchronous loading and tree-shaking capabilities also leads  faster loading times and better overall application performance.

// - Modern web browsers have native support for ESM, eliminating the need for additional libraries or transpilation in many cases.
// - ESM is the recommended approach for modern JavaScript development due  its standardization, performance benefits, and broad browser support.

// - Imports
// import: This keyword is used to import values from other module
// import { function1, function2 } from './module1'; - Imports specific named exports.
// import * as module1 from './module1'; - Imports all exports and assigns them to a namespace object.
// import defaultImport from './module1'; - Imports the default export.

// - Exports
// export: This keyword is used to export values from a module.
// export const function1 = () => { ... }; - Exports a named function.
// export default function myFunction() { ... }; - Exports a default function.
// export { function1, function2 }; -Exports multiple named functions.

// - default keyword.

// The primary intention of a default export is to represent the main or primary entity of a module.
// It's meant to be the most common or expected value to be imported from that module.
// Use Named Exports for Multiple Values - If you need to export multiple values from a module, use named exports `export const` This clearly indicates that each exported value has a specific name and can be imported accordingly.
// Having multiple default exports is considered bad practice can lead to confusion and make it unclear which export is the intended primary one.

/// type: module
// In JavaScript, adding "type": "module" to your ES6 file (or your package.json file in Node.js) has a significant impact:
// - Browsers: When "type": "module" is present in a script tag, the browser knows to treat the file as an ES module. This allows you to use import and export statements directly without the need for transpilation or bundling tools.
// - Node.js: In Node.js, adding "type": "module" to the package.json file (or using the --experimental-modules flag) enables native ES module support. This allows you to use import and export statements within your Node.js applications.


//// - ES6 Tooling //// 

/// Transpilers
// Transpilers (short for "translators" or "compilers") are tools that convert code written in one language (or a newer version of a language) into code in another language (or an older version).
// - Modern JavaScript to Older Versions: Many modern JavaScript features (like those introduced in ES6 and beyond) might not be supported by older browsers or environments.
// - Transpilers like Babel take modern JavaScript code (including ES6 modules, arrow functions, classes, etc.) and convert it into an older, more compatible version (like ES5) that can run on a wider range of browsers.

// Key Features of Transpilers:
// - Polyfilling: Transpilers can also include "polyfills" – pieces of code that provide implementations of newer JavaScript features for older browsers that don't natively support them.
// - Source Maps: Transpilers often generate source maps, which help debugging tools map the transpiled code back to the original source code, making it easier to find and fix errors.

/// Bundler 
// - What they are: Bundlers combine multiple JavaScript files (and potentially other assets like CSS) into a single, optimized file. By combining files, you reduce the number of HTTP requests needed to load your application, which can significantly improve page load times.
// - Code Optimization: Bundlers can perform various optimizations, such as:
// - Tree Shaking: Removing unused code from your application.
// - Minification: Shrinking the size of the code by removing unnecessary characters (e.g., whitespace, comments).
// - Code Splitting: Breaking down your application into smaller chunks that can be loaded on demand, improving initial load times and overall performance.

