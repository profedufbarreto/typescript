class Vehicle{ //parent class
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfo(): void{
        console.log(`${this.brand}, ${this.model} and ${this.year}`);
    }

    acceletare(): void{
        console.log("Vehicle accelerating...");
    }
}

//Child class 1

class Car extends Vehicle{
    doors: number;

    constructor(brand: string, model: string, year: number, doors: number){
        super(brand, model, year);
        this.doors = doors;
    }

    acceletare(): void {
        console.log(`${this.brand} car accelerating: VROOM!`);
    }

    showInfo(): void{
        super.showInfo();
        console.log(`Doors: ${this.doors}`);
    }
}

//Child class 1

class Motorcycle extends Vehicle{
    cylinderCapacity: number;

    constructor(brand: string, model: string, year: number, cylinderCapacity: number){
        super(brand, model, year);
        this.cylinderCapacity = cylinderCapacity;
    }

    acceletare(): void {
        console.log(`${this.brand} motorcycle accelerating: RRRRRR!!`);
    }

    showInfo(): void {
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
