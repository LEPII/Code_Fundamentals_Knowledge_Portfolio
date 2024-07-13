//// Control Flow

///  1. If...else

// Purpose: Conditional statements used for decision making.
// The if statement evaluates a condition. If the condition is true, the code block within the if statement is executed.
// The else statement (optional) provides alternative code to run if the condition in the if statement is false.

const age = 25;

if (age >= 21) {
  console.log("You are eligible to drink alcohol.");
} else {
  console.log("You are not old enough to drink alcohol.");
}

///  2- Switch...case

// Purpose: Multi-way branching based on a single expression's value.
// Explanation:
// The switch statement evaluates an expression.
// The case clauses define possible values for the expression.
// If the expression's value matches a case value, the code block associated with that case is executed.
// The break statement (optional) exits the switch after a matching case is found, preventing further checks.
// The default clause (optional) provides code to execute if no matching case is found.

const day = "Tuesday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday.");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's a weekend.");
    break;
  default:
    console.log("Invalid day");
}

/// Types of Loops


// With these loops you can repeat an action a number of times. 
// - For
// - While
// - Do...while

// With these loops you can iterate over the properties of an object or elements of an array.  
// - For...in
// - For...of

///  3- For

// Purpose: Looping a specific number of times based on a counter variable.

// Structure: for (initialization; condition; increment/decrement) {
//// code to execute in each iteration
// }

// Explanation:
// The initialization part initializes a loop counter variable.
// The condition part specifies a condition that must be true for the loop to continue. When the condition becomes false, the loop terminates.
// The increment/decrement part updates the loop counter variable after each iteration.
// The code block within the loop executes repeatedly as long as the condition is true.

for (let i = 5; i <= 1; i--) {
  if (i % 2 !== 0) console.log(i);
}

///  4- While

// Explanation:
// The while statement evaluates a condition.
// As long as the condition is true, the code block within the while loop keeps executing.
// It's crucial to have logic within the loop that eventually changes the condition to false to prevent an infinite loop.

let count = 0; // loop variable

while (count < 3) {
  // while statement, in parentheses, you add your condition.
  console.log("Count:", count); // add your statement
  count++; // Increment count to eventually make the condition false
}

///  5- Do...while

// Purpose: Similar to while, but guarantees at least one execution of the loop body.
// Explanation: The do...while loop ensures the code block inside the do part executes at least once, even if the initial condition is false.
// After the code block executes, the condition is evaluated. If it's true, the loop repeats.

let i = 0;
do {
  console.log("Count:", i);
  i++;
} while (i <= 5);

///  6 - Infinite Loops

// An infinite loop occurs when a block of code repeatedly executes without reaching a terminating condition. This can freeze your application or browser. Here are common causes:
// - Missing or incorrect termination condition
// - Condition always evaluates to true
// - Logic Errors
// - Unexpected side effects
// - Recursive Functions Without Base Case
// - Asynchronous Code Issues
// - Unexpected Exceptions

// let e = 0;
// while (i < 5) {
//   console.log(i);
// }


///  7- For...in
///  8- For...of
///  9- Break and Continue
