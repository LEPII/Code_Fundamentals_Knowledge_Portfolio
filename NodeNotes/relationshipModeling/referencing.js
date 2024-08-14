// Referencing

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Only the data that is defined in your model will be persistent in your database.
const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    author: {
      type: mongoose.Schema.Types.ObjectId, // when referencing the author property, mongoose will query the "Author"'s collection from the DB.  
      ref: "Author",
    },
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find() // Will find all the courses
    .select("name author") // select only the name and author property - (since the author was referenced and not embedded, it will only return the id)
    .populate("author", "name website -_id"); // you first reference the document then any properties you want to include/exclude. (-nameOfProperties to excludes)
  //.populate("collection", "name") example to show that you can reference multiple collections.  
  console.log(courses);
}

// createAuthor('Lui', 'My bio', 'My Website');

// createCourse("My Course", "66a80043ebcaf44c8faa9882");

listCourses();
