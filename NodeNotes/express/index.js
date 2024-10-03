const express = require("express");
const program = require("./routes/program");
const Joi = require("joi");
const logger = require("./middleware/logger");
const helmet = require("helmet");
const morgan = require("morgan");
const config = require("config");
const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");


const app = express();

app.set("view engine", "pug");
app.set("views", "./views");
// Middleware Functions
app.use(express.json());
app.use(logger);
app.use(express.urlencoded({ extended: true })); // this function parses incoming requests with url encoded payloads || key=value&key=value
app.use(express.static("public")); // this function to serve static files.
app.use(helmet());
app.use("/api/program", program);

console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // this env variable returns the environment for this application. If it's not set, we will get undefined.

console.log(`app: ${app.get("env")}`); // if the env is not set, this will return development by default.

// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
// console.log("Mail Password: " + config.get("mail.password"));
// The config object looks at various sources (config file, json file, env variable), and it can also be a command line argument,

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled...");
}

// Db work...
dbDebugger("Connected to the database...");

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`$listening on port: ${port}...`));
