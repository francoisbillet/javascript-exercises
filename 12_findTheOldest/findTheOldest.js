// const findTheOldest = function (people) {
//   people.sort((person1, person2) => {
//     const person1Age =
//       (person1.yearOfDeath ?? new Date().getFullYear()) - person1.yearOfBirth;
//     const person2Age =
//       (person2.yearOfDeath ?? new Date().getFullYear()) - person2.yearOfBirth;
//     return person1Age > person2Age ? -1 : 1;
//   });

//   return people[0];
// };

// const findTheOldest = (people) => {
//   return people.reduce((personWithMaxAge, person) => {
//     if (Object.keys(personWithMaxAge).length === 0) {
//       return person;
//     }
//     const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
//     const personWithMaxAgeAge = getAge(
//       personWithMaxAge.yearOfBirth,
//       personWithMaxAge.yearOfDeath
//     );

//     if (personAge > personWithMaxAgeAge) {
//       personWithMaxAge = person;
//     }
//     return personWithMaxAge;
//   }, {});
// };

const getAge = (yearOfBirth, yearOfDeath) => {
  return (yearOfDeath ?? new Date().getFullYear()) - yearOfBirth;
};

// Even better:
const findTheOldest = (people) => {
  return people.reduce((personWithMaxAge, person) => {
    const personAge = getAge(person.yearOfBirth, person.yearOfDeath);
    const personWithMaxAgeAge = getAge(
      personWithMaxAge.yearOfBirth,
      personWithMaxAge.yearOfDeath
    );

    if (personAge > personWithMaxAgeAge) {
      personWithMaxAge = person;
    }
    return personWithMaxAge;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
