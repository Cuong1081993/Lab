

// 5.1
let myCountry = {
    country: "Viet nam",
    capital: "Ha noi",
    language: "Vietnamese",
    population: 55,
    neighbours: ["Laos", "Campuchia", "China"]
};

// 5.2

console.log(`${myCountry.country} has ${myCountry.population} milion finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);

// 5.3

myCountry.describe = function () {
    console.log(`${this.country} has ${this.population} milion finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
};
myCountry.describe();

myCountry.checkIsland = function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
}
myCountry.checkIsland();
console.log(myCountry.isIsland);

//5.4

for (let index = 1; index <= 20; index++) {
    console.log(`Vote number ${index} is currently voting`);
}

//5.5
const populations = [98, 200, 233, 2908];

function percentageOfWorld(population) {
    return (population / 7900) * 100;
}

const percentages2 = [];
for (let index = 0; index < populations.length; index++) {
    percentages2.push(percentageOfWorld(populations[index]));
}
console.log(percentages2);


//5.6

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
]
for (let index = 0; index < listOfNeighbours.length; index++) {
    console.log(`Neighbour of city ${index + 1} : `);
    for (let i = 0; i < listOfNeighbours[index].length; i++) {
        console.log(`Neighbour : ${listOfNeighbours[index][i]}`);
    }
}

//5.7

const percentages3 = [];

let i = 0;
size = populations.length;
while (i < size) {
    percentages3[i] = percentageOfWorld(populations[i]);
    i++;
}
console.log(percentages3);


