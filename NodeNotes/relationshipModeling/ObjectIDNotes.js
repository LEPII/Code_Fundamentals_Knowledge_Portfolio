const mongoose = require("mongoose");

/// MongoDB uses MongoDB Driver to generate unique ID's

// You can generate your own unique ObjectID's
const id = new mongoose.Types.ObjectId();

// to get Object Id
console.log(id);
// _id: 5a724953ab83547957541e6a

// to get created at time stamp
console.log(id.getTimestamp());
// 2024-08-19T15:10:44.000Z

// To validate 
const isValid = mongoose.Types.ObjectId.isValid("1234")
console.log(isValid)
// false


// total - 12 bytes

// - // First 4 bytes: timestamp of when the document was created
// TIP: You can sort the date the document was created just using the id.

// - // Next 3 Bytes are: machine identifiers - two different machines will have two different identifiers.

// - // Next 2 Bytes are: process identifiers - if you generate two objectID's on the same machine but with a different processes,
// these two bytes will be different

// The last 3 Bytes are: counter - if same machine && same process && created at the same second, the counter bytes will be different.

// 1 byte = 8 bits
