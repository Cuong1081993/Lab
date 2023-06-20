"use strict";

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`Tốc độ mới  sau khi tăng 10km/h là : ${this.speed}`);
};

Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`Tốc độ mới sau khi trừ 5km/h là : ${this.speed}`);
}

const car1 = new Car("BMW", 120)
console.log(`Tốc độ ban đầu là : ${car1.speed}`);
console.log(car1);

car1.accelerate();
car1.brake();