const mongoose = require("mongoose");
const { unique } = require("next/dist/build/utils");

// When you deploy to environment, you will a different connection string to your connection environment.
// In a real application, your string should come from a configuration file.
mongoose
  .connect("mongodb://localhost/tracker")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Collection in Mongo is similar to Tables in Relational Database.
// Documents are similar to rows.

// In this creation of an instance of the mongoose.Schema class, you pass an object which specifies the
// key/value pairs that you should have in the program document.

// Types when creating schemas
// - String
// - Number
// - Date
// - Boolean
// - Array
// - Buffer - for binary data
// - ObjectId - assigning unique identifiers

const programSchema = new mongoose.Schema({
  name: String,
  exercise: String,
  days: [String],
  dateCreated: { type: Date, default: Date.now },
  completed: Boolean,
});

// to create a class based off of the schema:
const Program = mongoose.model("Program", programSchema);

async function createProgram() {
  const program = new Program({
    name: "Block 1",
    exercise: "All of them",
    days: ["Mon", "Tue", "Wed", "Thur", "Fri"],
    completed: true,
  });

  const result = await program.save();
  console.log(result);
}

// Here you can sort documents, set a limit on documents returned and select specific properties
// in a document.
async function getProgram() {
  //Comparison Operators
  //  eq (equal)
  //  ne (not equal)
  //  gt (greater than)
  //  gte (greater than or equal to)
  //  lt (less than)
  //  lte (less than or equal to)
  //  in ()
  //  nin (not in)

  //Logical Query Operator
  //  or
  //  and

  const pageNumber = 2;
  const pageSize = 10;

  const programs = await Program.find({ completed: "true" }) //This part specifies the query condition. It's looking for documents where the completed field has a value of "true".
    .find({ exercise: /^All/ })
    .find({ exercise: /them$/i })
    .find({ exercise: /.*All.*/ })
    .skip((pageNumber - 1))
    .limit(pageSize) // This limits the number of results returned to a maximum of 10 documents.
    .sort({ days: 1 }) // This sorts the results by the days field in ascending order (1 for ascending, -1 for descending).
    .select({ name: 1, exercise: 1, days: 1 }) // This specifies which fields to include in the result documents. The value 1 indicates inclusion, while 0 would exclude a field. In this case, only the name, exercise, and days fields will be returned for each document.
    .or([{ exercise: "All of them" }, { completed: true }])
    .and([{ exercise: "All of them" }, { completed: true }])
    .countDocuments();

  console.log(programs);
}

getProgram();
