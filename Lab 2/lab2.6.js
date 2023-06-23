let markMass = 78,
    markHeight = 1.69;
let johnMass = 92,
    johnHeight = 1.95;
let markHigherBMI;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;

if(markHigherBMI){
    console.log(
        `Mark's BMI(${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})`
    );
}else{
    console.log(
        `John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})`
    );
}