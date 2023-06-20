'use strict';
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
const EV = function(make, speed, charge){
    Car.call(this,make,speed);

    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
};

EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge --;
    console.log(`Tesla going at 140 km/h, with a charge of 22%`);
};

const ev = new EV("Tesla", 120,23)
ev.chargeBattery(30);
console.log("Pin sau khi doi: ",ev.charge);

ev.accelerate();
ev.brake();
