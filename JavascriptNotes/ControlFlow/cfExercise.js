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
    // if (i % 2 === 0) console.log(i, "Even Steven");
    // else console.log(i, "Odd Bob");
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

// 7. Type Properties - In this case we want to return the key/value pairs where the values are strings

const movie = {
  title: "a",
  releaseYear: 2018,
  rating: 4.5,
  director: "b",
};

const showProperties = (obj) => {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
  console.log(key, obj[key]);
};

// 8. Sum of Multiples of 3 and 5
// Create func called sum where we give it a limit(number) it it returns the sum all the multiples of 3 and 5 from 0 up to this limit.

const sum = (limit) => {
  let count = 0;

  for (let i = 0; i <= limit; i++) if (i % 3 === 0 || i % 5 === 0) count += i;

  return count;
};

console.log(sum(10));

// 9. Grade
// We want to calculate the Grade of a Student

// 0-59: F // 6-69: D // 70-79: C // 80-89: B // 90-100: A

const marks = [90, 80, 45];

const calculateGrade = (marks) => {
  const average = calculateAverage(marks);

  if (average < 60) return "F";
  if (average < 70) return "D";
  if (average < 80) return "C";
  if (average < 90) return "B";

  return "A";
};

const calculateAverage = (array) => {
  let sum = 0;

  for (let value of array) sum += value;

  return sum / array.length;
};
console.log(calculateGrade(marks));

// 10. Stars

const showStars = (rows) => {
  for (let row = 1; row <= rows; row++) {
    let pattern = "";
    for (let i = 0; i < row; i++) pattern += "*WHODATNATION*";
    console.log(pattern);
  }
};

showStars(5);

// Prime Numbers - log Prime Numbers Only

const showOptimusPrimeNumbers = (limit) => {
  // Starting at 1 is not a prime number
  for (let number = 2; number <= limit; number++) {
    // going from 2 to the current number (i)
    // with this nested loop we can see if I has a factor-Number other than 1 and itself.
    let isPrime = true;
    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
        // The break statement is used to immediately exit the inner loop when a factor is found. This is because if a number is divisible by a factor greater than its square root, it must also be divisible by a factor less than its square root. So, once a factor is found, there's no need to continue checking larger factors.
      }
    }
    if (isPrime) console.log(number);
  }
};

showOptimusPrimeNumbers(20);
