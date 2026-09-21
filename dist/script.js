"use strict";
class Veiculo {
    modelo;
    constructor(modelo) {
        this.modelo = modelo;
    }
    mover() {
        console.log(`${this.modelo} está se movendo...`);
    }
}
class Carro extends Veiculo {
    mover() {
        console.log(`${this.modelo} está dirigindo na estrada.`);
    }
}
class Aviao extends Veiculo {
    mover() {
        console.log(`${this.modelo} está voando nos céus.`);
    }
}
const veiculos = [
    new Carro("Sedan"),
    new Aviao("Boeing 737")
];
for (const v of veiculos) {
    v.mover();
}
//# sourceMappingURL=script.js.map