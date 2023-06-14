"use strict";

function calcAverageHumanAge(age){
    const humanAges = age.map((age) =>(age<=2 ? 2*age : 16 +age*4));

    const humanAgesNew = humanAges.filter((age)=> age >=18);

    return (
        (humanAgesNew.reduce((prevAge, currAge)=> prevAge + currAge)/humanAgesNew.length).toFixed(2)
    );
}

const age = [5,3,6,4,6,74,65];
console.log(age);
console.log(calcAverageHumanAge(age));
