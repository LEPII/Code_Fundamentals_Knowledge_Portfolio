const p = new Promise((resolve, reject) => {
  // Kick off some async work
  // access database, call a web service, start a timer / any async operation
  // When the async work completes, we should either have a VALUE or an error.
  // If you have a value, you want to return this to the consumer of this promise.
  setTimeout(() => {
    // resolve(1);
    reject(new Error("message"));
  }, 2000);

  // reject(new Error("message")) - As best practice, it's better to pass an error object instead of a simple string.
});

p.then((result) => console.log("result", result)).catch((err) =>
  console.log("Error", err.message)
);
