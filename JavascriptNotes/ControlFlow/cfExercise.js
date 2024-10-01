// 1. Write A Function that takes two numbers and returns the maximum of the two.

const max = (x, y) => {
  return a > b ? a : b;
};

// 2. Create a function that returns true if width is greater than height, otherwise it returns false.
const isLandscape = (width, height) => {
  return width > height; // no need to explicity write true/false in the code.
};

// 3. Give it an input and it returns a string. If the # is divisible by 3, we return fizz, if the # we pass divisible by 5, we return buzz. If it's divisible by 3 and 5, we get FizzBuzz. If it's not divisible by either, we get the same number. If it's not a number, return NaN.
const fizzBuzz = (input) => {
  if (input === NaN) return NaN; // || if (typeof input !== "number") return NaN
  else if (input % 3 === 0 && input % 5 === 0) return "Fizzbuzz";
  else if (input % 3 === 0) return "Fizz";
  else if (input % 5 === 0) return "Buzz";
  return input;
};

// 4.
// If the car is faster than the speed limit, we get "Ok" on the console. If it's exactly at the speed limit, we still get the same message.
// For every 5mph+ above the speed limit(75+) -> 1+ point "Point: 1"
// More than 12 points returns "License Suspended"

// Tip -> You must use Math.floor()

// Speed Limit (70)

checkSpeed();

const checkSpeed = (speed) => {
  const speedLimit = 74;
  const mphPerPoint = 5;
  if (speed <= speedLimit) return "okay";
  else {
    const points = Math.floor(speed - speedLimit / mphPerPoint);
    if (points >= 12)
      console.log("You're under arrest")
    else console.log("Points", points)
  } 
};
