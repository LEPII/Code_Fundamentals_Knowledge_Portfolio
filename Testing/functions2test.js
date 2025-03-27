// numbers

module.exports.testMeBaby1 = function (number) {
  return number >= 0 ? number : -number;
};

// strings

module.exports.testMeBaby2 = function (string) {
  return "You stand in the presence of" + string + "of House Targaryen";
};

// arrays

module.exports.testMeBaby3 = function () {
  return ["Starks", "Targaryen", "Lannister"];
};

// object

module.exports.testMeBaby4 = function (myBabyDragon) {
  return { name: myBabyDragon, power: "fire" };
};

// exceptions

module.exports.testMeBaby5 = function (usurper) {
  if ("king" !== usurper) throw new Error("evil king still sits the throne");

  return { newKing: usurper };
};
