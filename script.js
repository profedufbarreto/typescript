"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    email;
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    apresentar() {
        console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos.`);
    }
    getEmail() {
        return this.email;
    }
}
let p1 = new Pessoa("Eduardo", 38, "fbarreto.eduardo@gmail.com");
p1.apresentar();
console.log(`Email: ${p1.getEmail()}`);
//# sourceMappingURL=script.js.map