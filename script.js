"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    model;
    year;
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    regirter() {
        console.log(`This brand is ${this.brand}, it's model is ${this.model} and it's year ${this.year}`);
    }
}
class Motorcycle {
    brand;
    model;
    year;
    hp;
    constructor(brand, model, year, hp) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.hp = hp;
    }
    register() {
        console.log(`This brand is ${this.brand}, it's model is ${this.model}, this year is ${this.year} and has ${this.hp} hp.`);
    }
}
let c1 = new Car("Toyota", "Hilux", 2010);
c1.regirter();
let m1 = new Motorcycle("Suzuki", "G600", 2015, 89);
m1.register();
//# sourceMappingURL=script.js.map