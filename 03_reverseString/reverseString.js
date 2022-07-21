const reverseString = function (stringToReverse) {
  //   let reversedString = "";
  //   while (string.length) {
  //     reversedString += string[string.length - 1];
  //     string = string.substring(0, string.length - 1);
  //   }
  //   return reversedString;

  //   let reversedString = "";
  //   for (let i = stringToReverse.length - 1; i >= 0; i--) {
  //     reversedString += stringToReverse[i];
  //   }
  //   return reversedString;

  return stringToReverse.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
