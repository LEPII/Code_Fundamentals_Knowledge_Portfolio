// 1. Address Object

// 1. Create an address object with the properties being street, city and zipCode.
// 2. Create a function with the showAddress(address - addressObject) that displays all of the object's properties with their values.
// 3. Initialize the object using an object literal, factory and constructor function.
// 4. Create two functions "areEqual(checks to see if all the properties are equal return true, otherwise return false)" and "areSame(tells us if Obj1 and Object2 are pointed to the same object AKA referencing the same object.)"

const addressLiteral = {
  street: "Sesame Street",
  city: "Gotham",
  zipCode: "nonYa",
};

function createFactoryAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const myFactoryObj = createFactoryAddress(
  "silly street",
  "Hidden Leaf Village",
  "nonYaPart2"
);

//

function ConstructorCrib(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
const myConstructorCribObj = new ConstructorCrib(
  "saucy street",
  "Hidden Rain Village",
  "nonYaPart3"
);

//
// Pros and Cons:
// Object.entries(
// Pros:
// Concise and readable.
// Can be used directly with array destructuring.
// Generally faster than for...in.

// Cons:
// Requires additional memory to create the array of arrays.
// Might not be ideal for very large objects.

const showAddress = (address) => {
  const whereImAt = Object.entries(address);
  console.log(whereImAt);
};

showAddress(addressLiteral);
showAddress(myFactoryObj);
showAddress(myConstructorCribObj);

// for...in

// Pros:
// More flexible (can be used with more complex iteration logic).
// Doesn't require additional memory to create an array.
// Can be more performant for very large objects.
// Cons:
// Can be less readable, especially when destructuring is required.
// May iterate over properties in a different order.

function showMyAddress2(address) {
  for (let key in address) console.log(key, address[key]);
}

showMyAddress2(addressLiteral);
showMyAddress2(myFactoryObj);
showMyAddress2(myConstructorCribObj);

// Best Practices:
// Choose Object.entries() for simple iteration over key-value pairs, especially when you need to destructure the values or use array methods like map, filter, or reduce.
// Choose for...in for more complex iteration logic or when performance is critical for very large objects.
// Be aware of the potential differences in iteration order between the two methods.

function areEqualObjects(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

function areSameObjects(address1, address2) {
  return address1 === address2;
}
