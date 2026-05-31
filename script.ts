interface Animal{
    name: string;
    type: string;
    makeSound(): void;
}

class Dog implements Animal{
    name: string;
    type: string = "Dog";

    constructor(name: string){
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} says: Woof Woof!`);
    }
}

class Cat implements Animal{
    name: string;
    type: string = "Cat";

    constructor(name: string){
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} says: Meow!`);
    }
}

let dog = new Dog("Rex");
dog.makeSound();

let cat = new Cat("Mimi");
cat.makeSound();