const palindromes = function (string) {
  // Remove uppercase letters and punctuation
  // Transform spaces into a single space
  // Store resulting string in variable
  // Turn string into array and reverse array
  // Convert reversed array to a string variable
  // compare both variables

  const modifiedString = string.toLowerCase().replace(/[^a-z]/g, "");

  const reversedModifiedString = modifiedString.split("").reverse().join("");

  return modifiedString === reversedModifiedString;
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes("ZZZZ car, a man, a maracaz."));
