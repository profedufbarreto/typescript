interface Vehicle{
    brand: string;
    model: string;
    year: number;
}

class Car implements Vehicle{
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    regirter(): void{
        console.log(`This brand is ${this.brand}, it's model is ${this.model} and it's year ${this.year}`);
    }
}

class Motorcycle implements Vehicle{
    brand: string;
    model: string;
    year: number;
    hp: number;

    constructor(brand: string, model: string, year: number, hp: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.hp = hp;
    }

    register(): void{
        console.log(`This brand is ${this.brand}, it's model is ${this.model}, this year is ${this.year} and has ${this.hp} hp.`);
    }
}

let c1 = new Car("Toyota", "Hilux", 2010);
c1.regirter();

let m1 = new Motorcycle("Suzuki", "G600", 2015, 89);
m1.register();