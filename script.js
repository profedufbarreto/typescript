"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dog {
    name;
    type = "Dog";
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} says: Woof Woof!`);
    }
}
class Cat {
    name;
    type = "Cat";
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} says: Meow!`);
    }
}
let dog = new Dog("Rex");
dog.makeSound();
let cat = new Cat("Mimi");
cat.makeSound();
//# sourceMappingURL=script.js.map