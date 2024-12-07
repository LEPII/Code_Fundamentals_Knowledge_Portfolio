// 1. Array from Range

const numbers = arrayFromRange(-10, 10);

console.log(numbers);

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// 2. Create Custom `Included` Method

const includes = (array, searchElement) => {
  for (let arr of array) {
    if (searchElement === arr) return true;
    return false;
  }
};

// 3. Create Custom Except Exercise

const except = (array, excludeItemsArray) => {
  const finalArray = [];
  for (let arr of array) {
    if (!excluded.includes(element)) {
      output.push(element);
      return output;
    }
  }
};

// 4. Moving an Element

// A function where given the following parameters,
// the element in the given `index` will be moved to the direction of the provided `offset`
// so if an `array` was given array = [1, 2, 3, 4 ]
// const output = move(array, 0, 2)
// output:  [2, 3, 1, 4]

const move = (array, index, offset) => {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error("invalid offset");
    return;
  }

  const finalArray2 = [...array];
  const returnedIndexElement = finalArray2.splice(index, 1)[0]; // WE COULD CHAIN BRACKET NOTATION ON ARRAY METHODS??? WUT!? LOL CANT BELIEVE I JUST DISCOVERED THIS
  finalArray2.splice(position, 0, returnedIndexElement);
  return finalArray2;
};

// 5. Counting Occurrences

const numbs = [1, 2, 3, 4];

const count = countOccurrences(numbers, 1);

console.log(count);

const countOccurrences = (array, searchElement) => {
  let counter = 0;
  for (let number of numbers) {
    if (searchElement === number) ++counter;
    return 0;
  }
};

// 6. Get Max == Review!!!

const allNumbs = [1, 2, 3, 4];

const max = getMax(allNumbs);

const getMax = (array) => {
  if (array.length === 0) return undefined;

  // let max = array[0];

  // for (let i = 1; 1 < array.length; i++) if (array[i] > max) max = array[i];
  // return max;

  // OR

  return array.reduce((a, b) => (a > b ? a : b));
};

// 7. Movies

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending Order
// Pick their title

movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);
