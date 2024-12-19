// 1. Sum of Args

const sumOfArgs = (arr) => {
  if (Array.isArray(arr) === false) {
    console.log("Arrays Only Bro");
    return;
  }
  let sum = 0;
  for (let nums of array) {
    sum += nums;
  }
  return sum;
};

// 2. Area of Circle
// Create a circle object using the object literal syntax.
// The object should have a radius property that we could read or write to
// You should have a area property that is read only

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

// 3. Error Handling

const numbers = [1, 2, 3, 4, 5];
try {
  function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) throw new Error("Invalid array");
    return array.reduce((accumulator, current) => {
      const occurrence = current === searchElement ? 1 : 0;
      return accumulator + occurrence;
    }, 0);
  }
} catch (err) {}
const count = countOccurrences(numbers, 1);
