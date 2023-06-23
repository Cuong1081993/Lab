

const bill= 207;
const tip= bill >= 50 && bill <= 300? bill * 0.15 : bill * 0.2;

console.log(` the Bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
