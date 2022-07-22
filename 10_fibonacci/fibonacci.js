const fibonacci = function (number) {
  if (number <= 0) return "OOPS";
  if (number === 1) return 1;
  const fibonacci = [1, 1];
  let i = 2;
  while (i <= number - 1) {
    const nextNumber = fibonacci[i - 2] + fibonacci[i - 1];
    fibonacci[i] = nextNumber;
    i++;
  }
  return fibonacci[number - 1];
};

// const fibonacci = (number) => {
//   number = Number(number);
//   if (number <= 0) return "OOPS";
//   if (number === 1 || number === 2) return 1;
//   let nMinus2Number = 1;
//   let nMinus1Number = 1;
//   let i = 3;
//   let nextValue;
//   while (i <= number) {
//     nextValue = nMinus2Number + nMinus1Number;
//     nMinus2Number = nMinus1Number;
//     nMinus1Number = nextValue;
//     i++;
//   }
//   return nextValue;
// };

// Do not edit below this line
module.exports = fibonacci;
