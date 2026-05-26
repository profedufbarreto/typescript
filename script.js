"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}
let p1 = new Pessoa("Eduardo", 38);
p1.apresentar();
//# sourceMappingURL=script.js.map