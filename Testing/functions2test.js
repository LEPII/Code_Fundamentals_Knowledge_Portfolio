// numbers

module.exports.testMeBaby1 = function (number) {
  return number >= 0 ? number : -number;
};

// strings

module.exports.testMeBaby2 = function (string) {
  return (
    "You stand in the presence of" +
    string +
    "of House Targaryen"
  );
};
