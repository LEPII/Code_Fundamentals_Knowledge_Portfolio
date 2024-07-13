/// Asynchronous JavaScript

const { rejects } = require("assert");
const res = require("express/lib/response");
const { resolve } = require("path");

// Asynchronous does not mean concurrent OR multi-threaded.
// Similar to a restaurant having one waiter to multiple customers
// In node, if you're dealing with an operation that involves disk or
// network access, you're dealing with asynchronous code.

// 3 Patterns to Asynchronous code
// - Callbacks
// - Promises
// - Async/await

/// Synchronous
//console.log("Before");
// const user = getUser(1)
// const repos = getRepos(user.username)
// const commits = getCommits(repo[0])
// console.log("After");
///

// Callback
// getUser(1, (user) => {
//   getRepos(user.username, (repos) => {
//     getCommits(repo, displayCommits);
//   });
// });

// Promises

// A promise is an object that holds the eventual result of an asynchronous operation. Once an operation completes, it can either result in a value or an error.

// A promise promises you that it would give you the result of an asynchronous operation.

// This object can be in one of the three states.
// 1. Initially, when we create a promise object, it will be in the PENDING state. At this point it will kick off some async operation, when the result it ready the promise can either be
// 2. FULFILLED/RESOLVED which means the operation completed successfully and returns a VALUE. Other wise if something went wrong during the execution of a async function operation, our promise will be in the
// 3. REJECTED state. In this case we will have an error.

console.log("Before");

getUser(1)
  .then((user) => getRepos(user.username))
  .then((repos) => getCommits(repos[0]))
  .catch((err) => console.log("Error", err.message));

console.log("After");

function getCommits(commits) {
  console.log(commits);
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, username: "Lui2" });
    }, 2000);
  });
}

const getRepos = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
};

/// Creating Settled Promises

// Sometimes you want to create a promise that is already resolved/rejected which can be helpful when writing unit tests.

const p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result));

// when rejecting promises, always use the error object as that will show you the call stack.
// const pr = Promise.reject(new Error("reason for rejection..."));
// p.catch((error) => console.log(error));

/// Running Promises in Parallel

// Sometimes you want to run a few async operations in parallel, and when they all complete, you want to do something after.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Operation 1");
    resolve(1);
    reject(new Error("bc something went wrong..."));
  }, 2000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async Operation 2");
    resolve(2);
  }, 2000);
});

// The Promise.all() static method takes an iterable of promises as input and returns a single Promise.
Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("error", err.message));

// In the previous example (with the .then chain), each async operation started after the previous async operation completed. That was different.

// In the promise.all implementation. both async operation are started almost at the same time. )
// When you get the result in the .all method, the result will be available in an array.

// If any of our promises is rejected, that final promise that final promise that is returned from promise.all is considered rejected

// The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

Promise.race([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log("error", err.message));

/// Async and Await
// using async/await, you need to wrap your code inside a try/catch block. 


async function displayRepos() {
  try {
    const user = await getUser(1);
    const repos = await getRepos(user.username);
  } catch (err) {
    console.log("Error", err.message)
  }
}
