# Table of Content  
<!-- 
## Using MongoDB Node.js Client Libraries
## Connecting To An Atlas Cluster In Node.JS Application
## Troubleshooting A MongoDB Connection in Node.JS Application\
https://www.mongodb.com/docs/drivers/node/current/
-->

## Using MongoDB Node.js Client Libraries

- When you build a Node.js application that connects to MongoD, there's a piece of Middleware known as a Driver.
- A Driver works in tandem with the built-in Node.js BSON package to interact with your MongoDB server.
- MongoDB provides an asynchronous driver for Node.js as well as Drivers for several other programming languages.
- The driver simplifies connecting to and interacting with your database from an application.
- The official MongoDB driver establishes secure connections to a MongoDB cluster and executes database operations on behalf of client applications.
- Additionally, driver allow you to specify the connection options. These might include:
  - security settings;
  - write durability;
  - read isolation;
- Mongo's Driver adheres to languages best practices;
- They allow you to use all the functionality of your Mongo Deployment and making upgrading easier;

## Connecting To An Atlas Cluster In Node.JS Application

<https://www.npmjs.com/package/mongodb>

- an application should use a single MongoClient instance for all DB requests;
- Creating MongoClients is resource intensive;
- Creating a new MongoClient for each request will affect the application's performance.

## Troubleshooting A MongoDB Connection in Node.JS Application\

- Error #1 - Connection Closed with no error warning
- A possible reason for this is tha our IP address does not have access to the Atlas Cluster.
- By default, your atlas cluster has no access to the outside world. You need to enable access in the Atlas UI.
- Go to the Atlas "Network Access" tab and add your IP address

- Error #2 - Authentication Error
- User/Password string might need to replaced or its misspelled;
