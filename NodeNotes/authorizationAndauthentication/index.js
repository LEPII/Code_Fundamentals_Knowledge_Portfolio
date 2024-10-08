//// Intro 

// - Current EndPoints
// /api/genres
// /api/movies
// /api/customers
// /api/rentals


// - Goals 
// Make sure only authenticated users can perform operations that can modify data. 
// If they're not logged in, they can only read data from the endpoints.
// If they want to create a new genre or update a movie, they have to be authenticated first. 
// Only admin (authorization/) users can delete data.
// Add two endpoints 1. Register Users: POST to /api/users 
// 2. Login Users: POST /api/logins 

// Exercise: Add register end point with the {name, email - unique = true, password} properties 

const mongoose = require("mongoose");
const users = require("./routes/user");
const express = require("express");
const app = express(); 

mongoose.connect("mongodb://localhost:27017/").then(()=> console.log("connected to MongoDB for the dub")).catch(err => console.error("Could not connect to MongoDB..."));

app.use("/api/users", users)

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`$listening on port: ${port}...`));