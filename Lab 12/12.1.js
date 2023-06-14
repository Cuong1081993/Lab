"use strict";

function checkDogs(dogJulia, dogKate) {
  //
  const newDogJulia = dogJulia.slice(1, dogJulia.length - 1);
  const dogData = newDogJulia.concat(dogKate);
  dogData.forEach((ele, index) => {
    ele >= 3
      ? console.log(
          `Dog number ${index + 1} is an adult, and is ${ele} years old`
        )
      : console.log(`Dog number ${index + 1} is still a puppy`);
  });
}

const dogJulia = [3, 5, 2, 11, 5];
const dogKate = [3, 24, 5, 2, 4];
checkDogs(dogJulia,dogKate);
