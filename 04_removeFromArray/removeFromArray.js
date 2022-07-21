const removeFromArray = function (array, ...values) {
  return array.filter((element) => !values.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
