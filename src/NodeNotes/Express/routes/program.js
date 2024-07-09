const express = require('express');
const router = express.Router();


const program = [
  { id: 1, name: "squat" },
  { id: 2, name: "deadlift" },
  { id: 3, name: "bench" },
];

router.get("/", (req, res) => {
  // res.send("hello world");
  res.render("index", { title: "my app", message: "is building" });
});

router.get("/", (req, res) => {
  res.send(program);
});

// read the program object that will be in the body of the request
// use these properties to create a new program object and then
// add that program object into our lifts array
router.post("/", (req, res) => {
  const { error } = validateProgram(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const newLift = {
    id: program.length + 1,
    name: req.body.name, // we need to enable parsing up json object in the body of the request bc
    // by default, this feature is not enabled in express.
  };

  program.push(newLift);
  res.send(newLift); // when the server post (or create a new resource), you should return that object in the body of the res.
});

router.get("/:id", (req, res) => {
  const lift = lifts.find((l) => l.id === parseInt(req.params.id)); // returns boolean value which determines if this is the lift that we're looking for or not
  // and we store it in a const. We parse it into an integer since the `params.id` comes back in a string
  if (!lift) return res.status(404).send("The course was not provided?");
  res.send(lift);
});

router.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params); // to read router parameter
  res.send(req.query); // to read query parameter
});

router.put("/:id", (req, res) => {
  // Look up lift
  // If not existing, return 404
  const lift = program.find((l) => l.id === parseInt(req.params.id));
  if (!lift) return res.status(404).send("The lift was not provided");

  // Validate
  // If invalid, return 400 - Bad request
  const { error } = validateProgram(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Update program
  program.name = req.body.name;
  // Return the updated program
  res.send(program);
});

router.delete("/:id", (req, res) => {
  // Look up course
  // If not existing, return 404
  const lift = program.find((l) => l.id === parseInt(req.params.id));
  if (!lift) return res.status(404).send("The lift was not provided");

  // Delete
  const index = program.indexOf(lift);
  program.splice(index, 1);

  // Return the same course
  res.send(lift);
});

function validateProgram(lift) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(lift, schema);
}

module.exports = router