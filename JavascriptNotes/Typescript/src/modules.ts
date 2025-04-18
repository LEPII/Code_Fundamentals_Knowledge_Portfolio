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

//// Module Formats //// 
 
// Depending on the module format we set on our ts config file, the generated JS code is going to be different. 

//// Default Exports //// 

// Sometimes we just want to export a single thing from a module. In those cases, its better to use a default export. 
