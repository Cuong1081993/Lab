"use strict";

function calcAverageHumanAge2(ages) {
  return (
    ages
      .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter((age) => age >= 18)
      .reduce((age, ageNext) => age + ageNext, 0) /
    ages
      .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter((age) => age >= 18).length
  ).toFixed(2);
}
const ages = [3,1,5,7,3,5,3,6]
console.log(calcAverageHumanAge2(ages));