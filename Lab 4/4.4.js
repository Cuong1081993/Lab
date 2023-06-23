
function   percentageWorld1(population) {
    return (population/7900)*100;
}

const describePopulation = (country, population)=>{
    return `${country} has 
    ${population} million people, which is about 
    ${percentageWorld1(population).toFixed(1)}% of the world`
}

console.log(describePopulation("Viet nam", 898));