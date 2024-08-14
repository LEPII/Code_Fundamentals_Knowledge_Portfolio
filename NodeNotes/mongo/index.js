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

/// VALIDATION

// Should you both mongoose and JOI to validate as they compliment each other.
// JOI will be there first attack in our RESTFUL APIS as a first attack. Still need mongoose to make sure the data comes in the right shape.

// When you want to conditionally make a property required or not, you can return a function that returns a boolean.
// EX. `days` is only required if `completed` is true is false

const programSchema = new mongoose.Schema({
  name: { type: String, required: true }, // only in mongoose, mongo doesn't care about this name property unlike SQL/MYSQL where validation is more integrated at the DB level.
  name: {
    type: String,
    required: true, // Ensure name is not empty
    minlength: 3, // Minimum length of 3 characters
    maxlength: 50, // Maximum length of 50 characters
    lowercase: true,
    uppercase: false,
    trim: true
  },
  exercise: {
    type: String,
    enum: ["All of them", "Upper Body", "Lower Body", "Cardio"], // Allowed options
  },
  weeks: {
    type: [String],
    required: true, // Ensure days array is not empty
    minlength: 1, // Minimum of 1 day
    maxlength: 5, // Maximum of 5 days
    of: String, // Each element must be a string (day name)
  },
  months: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function (v, callback) {
        setTimeout(() => {
          const result = v.length > 0;
          callback(result);
        }, 2000);
      },
      message: "Program should be at least one month",
    },
  },
  completed: {
    type: Boolean,
    required: true, // Ensure completed is set (true or false)
  },
  startDate: {
    type: Date,
    default: Date.now, // Default to current date
  },
  duration: {
    type: Number,
    min: 1, // Minimum duration of 1 day
    max: 30, // Maximum duration of 30 days
  },
  dateCreated: { type: Date, default: Date.now },
  completed: Boolean,
  days: {
    type: [String],
    required: function () {
      return this.completed; // if completed true, then days is required.
    }, // use .this to reference this object
  }, // using an arrow function will not work because arrow functions don't have their own this.
});

// to create a class based off of the schema:
const Program = mongoose.model("Program", programSchema);

async function createProgram() {
  const program = new Program({
    name: "-",
    exercise: "Some of them",
    // days: ["Mon", "Fri"],
    completed: true,
  });

  try {
    //     // to manually set validation
    // program.validate()
    //     // OR
    const result = await program.save();
    console.log(result);
  } catch (ex) {
    console.log(ex.message); // Output: Program validation failed: name: Path `name` is required.
    // If you have an invalid object, Mongoose doesn't allow us to save that course to the database.
    // Validation kicks in when you try to validate.
  }
}

createProgram();
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

async function getProgram() {
  const pageNumber = 2;
  const pageSize = 10;

  // Here you can sort documents, set a limit on documents returned and select specific properties
  // in a document, etc.

  const programs = await Program.find({ completed: "true" }) //This part specifies the query condition. It's looking for documents where the completed field has a value of "true".
    .find({ exercise: /^All/ })
    .find({ exercise: /them$/i })
    .find({ exercise: /.*All.*/ })
    .skip(pageNumber - 1)
    .limit(pageSize) // This limits the number of results returned to a maximum of 10 documents.
    .sort({ days: 1 }) // This sorts the results by the days field in ascending order (1 for ascending, -1 for descending).
    .select({ name: 1, exercise: 1, days: 1 }) // This specifies which fields to include in the result documents. The value 1 indicates inclusion, while 0 would exclude a field. In this case, only the name, exercise, and days fields will be returned for each document.
    .or([{ exercise: "All of them" }, { completed: true }])
    .and([{ exercise: "All of them" }, { completed: true }])
    .countDocuments();

  console.log(programs);
}
getProgram();

async function updateProgram(id) {
  // approach1: Query first
  // findById()
  // Modify its properties
  // save()
  const program = await Program.findById(id);
  if (!program) return;
  // program.completed = false;
  // program.name = "Another Block";
  // or
  program.set({
    completed: false,
    name: "Another Block",
  });
  const result = await program.save();
  // console.log(result);

  // approach2: Update first
  // update directly
  // optionally: get the updated document
  // const program3 = await Program.findOneAndUpdate(
  //   { _id: _id },
  //   {
  //     $set: {
  //       name: "Block 20",
  //       exercise: "Bench",
  //     },
  //   },
  //   { new: true }
  // ); // What this retrieves is the result of the update operation, not the program object .
  // console.log(program3);
  // we can update multiple documents in one go using .update method instead
}

updateProgram({ _id: "66957888c5f9a962ed005a9a" });

// When to Use Which Approach
// The choice between these approaches depends on several factors:

// Data Consistency
// - High concurrency: If multiple users might be updating the same document simultaneously, the "query first" approach can help prevent race conditions. By fetching the document first, you're working with a consistent copy of the data.
// - Optimistic concurrency: If you need to implement optimistic concurrency control (e.g., using version numbers), the "query first" approach allows you to check the document's version before updating.

// Data Retrieval
// - Need for updated data: If you need the updated document immediately after the update, the "query first" approach is more direct.
// - Performance: If you only need to update the document and don't require the updated data, the "update first" approach can be slightly more efficient.

// Additional Considerations
// - Data Validation: You might want to perform data validation before updating the document. This can be done in either approach.
// - Error Handling: Proper error handling is essential in both approaches.

// Additional Update Approaches
// While these two approaches are common, there are other options to consider:

// - Bulk Updates: For updating multiple documents with similar criteria, use updateMany.
// - Atomic Updates: Use update operators like $inc, $set, $push, etc., for atomic updates within a single operation.
// - Custom Update Logic: For complex update scenarios, you might need to implement custom logic, potentially using transactions or custom scripts.
