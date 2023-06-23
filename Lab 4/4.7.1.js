
const clalcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = clalcAverage(44, 23, 71);
console.log(scoreDolphins);
let scoreKaolas = clalcAverage(65, 54, 49);
console.log(scoreKaolas);
const checkWinner = function (avgDolphins, avgKaolas) {
    if (avgDolphins >= 2 * avgKaolas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKaolas})`);
    } else if (avgKaolas >= 2 * avgDolphins) {
        console.log(`Kaolas win (${avgKaolas} vs ${avgDolphins})`);
    } else {
        console.log(' No team wins');
    }
}

checkWinner(scoreDolphins, scoreKaolas);
checkWinner(576, 111);
