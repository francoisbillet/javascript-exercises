const repeatString = function (string, number) {
  if (number < 0) return "ERROR";
  else {
    let finalString = "";
    while (number > 0) {
      finalString += string;
      number--;
    }
    return finalString;
  }
};

// Do not edit below this line
module.exports = repeatString;
