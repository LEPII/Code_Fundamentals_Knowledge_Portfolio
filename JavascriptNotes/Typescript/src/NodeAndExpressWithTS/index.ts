//// Node and Express with Node

//// Table Of Content

//// -  Executing TypeScript Code with Node
//// -  Setting up an Express Project
//// -  Creating a Basic Route
//// -  Creating a Router
//// -  Parsing Request Bodies
//// -  Building an API

let x: number = 5;

console.log(x);

//// Executing TypeScript Code with Node ////

// There are a few primary ways to run TypeScript in your Node.js project.

// - Option 1: Compiling to JavaScript and then Running with Node.js

// - Option 2: Using ts-node

// - Option 3: Using a Development Server with Hot Reloading (nodemon with ts-node)

// - Option 4: Experimental Execution with Native Node.js (Limited): As of more recent Node.js versions, there's some experimental support for running TypeScript directly, but it's not yet a fully recommended or stable solution for production.

//// Setting up an Express Project ////

// npm install --save express @types/express @types/node
// npx tsc --init

import express from "express";
import todos from "./ToDo";
import CreateToDoDto from "./dtos/create-todo";
import ToDo from "./models/todos";

const app = express();

app.use(express.json());
app.use("/todos", todos);

const allMyTodos: ToDo[] = [];

app.get("/", (req, res) => {
  res.send("Yo");
});

app.post("/", (req, res) => {
  const { title } = req.body as CreateToDoDto;
  const todo = new ToDo(title);
  allMyTodos.push(todo);
  res.status(201).json(todo);
});

app.listen(9001, () => console.log("Server is over 9000!"));
