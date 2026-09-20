"use strict";
class Animal {
    nome;
    idade = 3;
    constructor(nome) {
        this.nome = nome;
        this.idade = this.idade;
    }
    falar() {
        console.log(`${this.nome} está fazendo um som...`);
    }
    apresentar() {
        console.log(`${this.nome} tem ${this.idade} anos!`);
    }
}
const cachorro = new Animal("Rex");
cachorro.falar();
cachorro.apresentar();
//# sourceMappingURL=script.js.map