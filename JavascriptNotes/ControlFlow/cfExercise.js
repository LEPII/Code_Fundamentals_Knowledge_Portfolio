// 1. Max of Two Numbers

// Write A Function that takes two numbers and returns the maximum of the two.

const max = (x, y) => {
  return a > b ? a : b;
};

// 2. Landscape or Portrait

//Create a function that returns true if width is greater than height, otherwise it returns false.
const isLandscape = (width, height) => {
  return width > height; // no need to explicity write true/false in the code.
};

// 3. FizzBuzz

// Give it an input and it returns a string. If the # is divisible by 3, we return fizz, if the # we pass divisible by 5, we return buzz. If it's divisible by 3 and 5, we get FizzBuzz. If it's not divisible by either, we get the same number. If it's not a number, return NaN.
const fizzBuzz = (input) => {
  if (input === NaN) return NaN; // || if (typeof input !== "number") return NaN
  else if (input % 3 === 0 && input % 5 === 0) return "Fizzbuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  return input;
};

// 4. Demerit Points
// If the car is faster than the speed limit, we get "Ok" on the console. If it's exactly at the speed limit, we still get the same message.
// For every 5mph+ above the speed limit(75+) -> 1+ point "Point: 1"
// More than 12 points returns "License Suspended"

// Tip -> You must use Math.floor()

// Speed Limit (70)

const checkSpeed = (speed) => {
  const speedLimit = 70;
  const mphPerPoint = 5;
  if (speed < speedLimit + mphPerPoint) {
    console.log("okay");
    return;
  }
  const points = Math.floor(speed - speedLimit / mphPerPoint);
  if (points >= 12) console.log("You're under arrest");
  else console.log("Points", points);
};

checkSpeed(150);

// 5. Even And Odd

const showNumbers = (limit) => {
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) console.log(i, "Even Steven");
    else console.log(i, "Odd Bob");
    const message = i % 2 === 0 ? "Even Steven" : "Odd Bob";
    console.log(i, message);
  }
};

showNumbers(10);

// 6. Count Truthy

const countTruthy = (array) => {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
};

// 7. Type Properties - In this case we want to return strings

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

const showProperties = (obj) => {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
      console.log(key, obj[key])
};

// 8. Sum of Multiples of 3 and 5
