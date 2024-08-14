// Embedding
// - Sub Documents cannot be saved on their own. They can only be saved in the context of their parent. Ex. course.save() on updateCourse function

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground2")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    authors: [authorSchema],
  })
);

async function createCourse(name, authors) {
  const course = new Course({
    name,
    authors,
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  // Query First Approach 
  const course = await Course.findById(courseId);
  course.authors.name = "Lui P";
  course.save();
  console.log(course)
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);
  course.authors.push(author);
  course.save(); 
}

async function removeAuthor(courseId, authorId) {
    const course = await Course.findById(courseId);
    const author = course.authors.id(authorId);
    author.remove();
    course.save(); 

}

// addAuthor("66a932c98ab53b8cf7c19571", new Author({name: "Restrepo"}));

createCourse("Node Course", [
  new Author({ name: "Chris" }),
  new Author({ name: "Lui" }),
]);

// updateAuthor("66a80a105ac660cc53f57618");
