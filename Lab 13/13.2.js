"use strict";

class CarC1 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUs(){
    return this.speed / 1.6;
  }
  set speedUs (speed){
    this.speed = speed * 1.6;
  }

  accelerate(){
    this.speed += 10;
    console.log(`Toc do moi sau khi tang 10km/h la : ${this.speed}`);
  }
  break(){
    this.speed -=5;
    console.log(`Toc do moi sau khi tru giam 5km/h la : ${this.speed}`)
  }

}
const carCl1 = new CarC1("BMW",120);

carCl1.accelerate();
carCl1.break();
carCl1.speed = 100;
console.log(carCl1);
