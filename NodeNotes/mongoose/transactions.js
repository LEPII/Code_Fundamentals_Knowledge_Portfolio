//// Transaction

//// Table Of Content
//// - Passing Sessions to Mongoose Methods

//// Passing Sessions to Mongoose Methods //// 
// - .session(session): A chainable method for Mongoose query objects (like findById()) and is specific to query operations.
// - { session }: An options object passed as an argument to the document.save() method, where session is a property.

// Why the difference?
// Mongoose methods accept arguments differently. Query methods are chainable, while document methods like save() use an options object for flexibility and consistent option passing.