class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `The car is a ${this.make} a model ${this.model}`;
  }
}

class Car extends Vehicle {
  drive() {
    return "The car is a driven";
  }
}

class ElecticCar extends Car {
  drive() {
    return "The electric car is being driven ";
  }
}

let myCar = new Car("Tesla", "Toyota");
myCar = new Car("Honda", "Civic");
console.log(myCar.getInfo());
console.log(myCar.getInfo());
