
const neighbors= ['Laos','China', 'Campuchia'];

// add Utopia to neighbors

neighbors.push('Utiopia');
console.log("push: ",neighbors);

//delete Utiopia

neighbors.pop('Utiopia')
console.log('Pop: ', neighbors);

//check index of array
neighbors.indexOf('Germany')=== -1 ? console.log('Probaly not a central European country'):console.log("Fine !");

// change name of index 

const index = neighbors.indexOf('China')
neighbors[index] = "Hello";
console.log(neighbors);