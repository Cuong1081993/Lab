
const mark = {
    fullName: "Mark Miller",
    height: 1.69,
    mass: 78,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

const john = {
    fullName: "John Smith",
    height: 1.95,
    mass: 92,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

mark.calcBMI() > john.calcBMI() ? console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s ${john.bmi}`) :
console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s ${mark.bmi}`);;