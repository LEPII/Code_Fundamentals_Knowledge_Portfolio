const path = require("node:path");
const os = require("node:os");
const fs = require("node:fs");
const EventEmitter = require("node:events")
const http = require("node:http");


// - Always prefer to use asynchronous methods. 

// Path

let pathObj = path.parse(__filename)

console.log(pathObj);

// OS

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log("Total Memory:" + totalMemory);
// OR use Template String from ES6
console.log(`Total Memory: ${totalMemory}, Free Memory: ${freeMemory}`)

// Fs

// fs.readdir("app.js", function (err, files) {
//     if (err) console.log( err);
//     else console.log("result", files); 
// });

// Event Module

const emitter = new EventEmitter(); 

// Register a listener 
emitter.on("messageLogged", (arg) => { // e, eventArg
    console.log("listener called", arg)
})


// .emit() raises an event. Emit means to make a noise || produce something || signalling 
emitter.emit("messageLogged", {id: 1, url: "http"});

// In Node.js, the EventEmitter class provides a mechanism for creating objects that can emit events and allows other objects to listen for and respond to those events. Here's a breakdown of the commonly used on and addListener methods:

// 1. on(eventName, listener):

// This is the primary method for registering a listener function for a specific event.
// Arguments:
// eventName: A string representing the name of the event you want to listen for.
// listener: A function that will be called whenever the specified event is emitted. This function can optionally receive any data (arguments) that was passed along with the event.

// Order is important. If you defined the listener after calling the emit method, nothing would have happened. When we call the emit method, this emitter iterated over all the registered listener and calls them synchronously. 

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "http" });
  }
}
module.exports = Logger;


///HTTP Module 

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }

  if (req.url === "/api/learning") {
    res.write(JSON.stringify([1, 2, 3]))
    res.end();
  }
});

server.on("connection", (socket) => {
  console.log('new connection...')
})

server.listen(3000);
console.log('Listening on port 3000...');