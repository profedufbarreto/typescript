"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    showInfo() {
        console.log(`${this.brand}, ${this.model} and ${this.year}`);
    }
    acceletare() {
        console.log("Vehicle accelerating...");
    }
}
//Child class 1
class Car extends Vehicle {
    doors;
    constructor(brand, model, year, doors) {
        super(brand, model, year);
        this.doors = doors;
    }
    acceletare() {
        console.log(`${this.brand} car accelerating: VROOM!`);
    }
    showInfo() {
        super.showInfo();
        console.log(`Doors: ${this.doors}`);
    }
}
//Child class 1
class Motorcycle extends Vehicle {
    cylinderCapacity;
    constructor(brand, model, year, cylinderCapacity) {
        super(brand, model, year);
        this.cylinderCapacity = cylinderCapacity;
    }
    acceletare() {
        console.log(`${this.brand} motorcycle accelerating: RRRRRR!!`);
    }
    showInfo() {
        super.showInfo();
        console.log(`Cylinder Capacity: ${this.cylinderCapacity}cc`);
    }
}
//Using the classes
let myCar = new Car("Toyota", "Corolla", 2021, 4);
myCar.showInfo();
myCar.acceletare();
console.log();
let myMotorcycle = new Motorcycle("Honda", "CB 500", 2021, 500);
myMotorcycle.showInfo();
myMotorcycle.acceletare();
//# sourceMappingURL=script.js.map