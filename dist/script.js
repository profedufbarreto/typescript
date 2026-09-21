"use strict";
class FormaGeometrica {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    info() {
        console.log(`Forma: ${this.nome}, Área: ${this.calcularArea()}`);
    }
}
class Quadrado extends FormaGeometrica {
    lado;
    constructor(lado) {
        super("Quadrado");
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
class Circulo extends FormaGeometrica {
    raio;
    constructor(raio) {
        super("Círculo");
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
const formas = [
    new Quadrado(4),
    new Circulo(3)
];
for (const f of formas) {
    f.info();
}
//# sourceMappingURL=script.js.map