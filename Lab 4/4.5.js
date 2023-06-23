
function   percentageWorld1(population) {
    return (population/7900)*100;
}

const populations = [98, 14, 1441, 10];

console.log(populations.length == 4);

const percentages = [
    percentageWorld1(populations[0]),
    percentageWorld1(populations[1]),
    percentageWorld1(populations[2]),
    percentageWorld1(populations[3]),
]
console.log(percentages);