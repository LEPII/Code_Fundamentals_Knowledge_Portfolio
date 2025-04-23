//// Modules

//// Table Of Content

//// - General
//// - Exporting and Importing
//// - Module Formats
//// - Default Exports
//// - Wildcard Imports
//// - Re-exporting

//// Exporting and Importing ////

// hovering over the interface and pressing `CMD + .`, you can optionally move the interface into a new file.
interface Store {
  product: string;
}

//

//// Module Formats ////

// Depending on the module format we set on our ts config file, the generated JS code is going to be different.

//

//// Default Exports ////

// - Sometimes we just want to export a single thing from a module. In those cases, its better to use a default export.

// Ex
// export default class Store {}
// export class Formatter {}

// // in another file =>
// import Store, { Formatter } from "./stores"

//

//// Wildcard Imports ////

// A wildcard import allows you to import all exported members from a module as a single namespace object. Instead of individually importing specific functions, classes, or variables, you grab everything at once under a chosen name

// import * as ModuleName from "./path/to/module";

// ModuleName. will show preview to all exports

//// Re-exporting ////

// Re-exporting allows you to take members (variables, functions, classes, interfaces, types) that are imported into one module and then make them available for import from that module.

// moduleA.ts
// export const message = "Hello from Module A";

// moduleB.ts
// export function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// moduleC.ts
// import { message } from "./moduleA";
// import { greet } from "./moduleB";

// export message and greet

// moduleD.ts
// import { message, greet } from "./moduleC";
