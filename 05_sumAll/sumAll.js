const sumAll = function (number1, number2) {
  if (
    number1 < 0 ||
    number2 < 0 ||
    typeof number1 != "number" ||
    typeof number2 != "number"
  ) {
    return "ERROR";
  } else {
    // const highNumber = number1 >= number2 ? number1 : number2;
    // const lowNumber = number1 < number2 ? number1 : number2;
    // let total = 0;
    // for (let i = lowNumber; i <= highNumber; i++) {
    //   total += i;
    // }
    // return total;

    const highNumber = number1 >= number2 ? number1 : number2;
    const lowNumber = number1 < number2 ? number1 : number2;
    if (highNumber === lowNumber) return lowNumber;
    else {
      return lowNumber + sumAll(lowNumber + 1, highNumber);
    }
  }
};

// Do not edit below this line
module.exports = sumAll;
