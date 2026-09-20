"use strict";
class Pessoa {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    apresentar() {
        console.log(`Olá, eu sou ${this.nome}!!`);
    }
}
class Professor extends Pessoa {
    disciplina;
    constructor(nome, disciplina) {
        super(nome);
        this.disciplina = disciplina;
    }
    apresentar() {
        console.log(`Olá, eu sou o professor ${this.nome} e ensino ${this.disciplina}!!`);
    }
}
class Aluno extends Pessoa {
    curso;
    constructor(nome, curso) {
        super(nome);
        this.curso = curso;
    }
    apresentar() {
        console.log(`Oi, eu sou o aluno ${this.nome} do curso de ${this.curso}!!`);
    }
}
const pessoas = [
    new Professor("Carlos", "Matemática"),
    new Aluno("Eduardo", "Engenharia"),
    new Pessoa("João")
];
for (const p of pessoas) {
    p.apresentar();
}
//# sourceMappingURL=script.js.map