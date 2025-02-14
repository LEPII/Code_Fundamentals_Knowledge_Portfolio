//// Handling and Logging Errors.

//// Table Of Content
//// - Status Messages to the Client vs Logging Exceptions
//// - Best Practices
//// - Types Of Errors
//// - Promises Error Handling
//// - Status Messages to the Client vs Logging Exceptions

//// Status Messages to the Client vs Logging Exceptions ////

// - Sending Status Messages to the Clients
// Focus - Communicating error information to the user or client application.
// Target - End-users, client-side applications.
// Primary Goal - Provide informative feedback to the user, allowing them to understand and potentially recover from the error.
// Examples - "404 Not Found," "500 Internal Server Error," "Invalid input."

// - Logging Exceptions:

// Focus - Recording errors for debugging, analysis, and monitoring.
// Target - Developers, system administrators, monitoring tools.
// Primary Goal
//  - Assist developers in debugging the application by examining error messages and stack traces.
//  - Monitor the application's health and identify potential issues.
//  - Analyze error trends to pinpoint frequent problems and improve application stability.
// Example -  "Error processing request: [Error message]," "Unhandled exception in user authentication."

//// Best Practices ////

// - Centralized Logging
// Create a dedicated logger module (e.g., logger.js) to handle all logging operations.
// Use a logging library like winston or pino for structured logging (JSON format).
// Configure different log levels (e.g., debug, info, warn, error, fatal).

// - Contextual Information
// Include relevant context with each log entry:
// Timestamp
// Log level
// Request ID (if applicable)
// User ID (if applicable)
// Controller name
// Action name
// Error message
// Stack trace
// Request and response objects (if necessary)

// - User Experience
// Provide meaningful error messages to users (without revealing sensitive information).
// Consider using a centralized error handling middleware to handle common error scenarios.

// - Security
// Avoid logging sensitive information (e.g., passwords, API keys) in plain text.
// Sanitize user input to prevent injection attacks.

// - Maintainability
// Keep your error handling code clean, consistent, and easy to understand.
// Regularly review and update your error handling strategies as your application evolves.

//// Types Of Errors //// -> Network, reference errors, etc.  

// --> Syntax Errors - These occur during the parsing of your code. The JavaScript engine cannot understand the code's structure. (e.g., missing semicolons, mismatched parentheses)
// --> Runtime Errors - These happen while the code is executing. (e.g., trying to access a property of an undefined object, dividing by zero)
// --> Logic Errors - These are bugs in your code that cause unexpected behavior, but don't necessarily crash the program. (e.g., incorrect calculations, wrong conditions in if-else statements)

//// Promises Error Handling ////

// try...catch Blocks
// - Enclose potentially error-prone code within a `try` block.
// - If an error occurs within the `try` block, the code execution jumps to the corresponding `catch` block.
// - In the `catch` block, you can handle the error (e.g., log it, display an error message to the user, attempt to recover from the error).

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve("Data fetched successfully!");
      } else {
        reject(new Error("Failed to fetch data."));
      }
    }, 9000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("corresponding error message", error);
  });

// async/await
// Makes working with promises more synchronous-like.
// Use `try...catch` blocks within `async` functions.

async function fetchDataAsync() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataAsync();
