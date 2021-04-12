// Задание 5
// Напиши класс Car с указанными свойствами и методами.
class Car {
    static getSpecs(car){
        console.log(`Speed:${car.speed} , Price:${car.price} , Max speed:${car.maxSpeed} , isOn:${car.isOn} , distance:${car.distance}`)
    }
    constructor(speed = 0 , price , maxSpeed , isOn = false , distance) {
        this.speed = speed;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
    get pricer(){
        return this.price;
    }
    set pricer(number){
        return this.price + number - number;
    }

  turnOn() {
      this.isOn = true
  }
  turnOff() {
      this.isOn = false;
      this.speed = 0;
  }
  accelerate(value) {
      if(this.speed + value > this.maxSpeed)
      console.log(`your speed ${this.speed} more than Max speed ${this.maxSpeed} `)
      else{
          this.speed += value
      }
  }
  decelerate(value) {
      if(this.speed - value <= 0){
          console.log (`Your speed is smaller then 1 km/h ,your car is not moving`)
        }else this.speed -= value

  }
  
  drive(hours) {
      if(this.isOn == true){
      this.distance += hours * this.speed
      return this.distance;
    }
      else console.log(`your car is not started`)
  }
}

const BmwM5 = new Car(90, 112000 , 298, false , 300 );
BmwM5.turnOn();
BmwM5.accelerate(50);
BmwM5.drive(2);
Car.getSpecs(BmwM5);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
BmwM5.decelerate(20);
BmwM5.drive(1);
BmwM5.turnOff();
Car.getSpecs(BmwM5);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
console.log(BmwM5.price); // 2000
BmwM5.price = 4000;
console.log(BmwM5.price); // 4000