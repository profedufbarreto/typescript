"use strict";
class Veiculo {
    marca;
    constructor(marca) {
        this.marca = marca;
    }
    mover() {
        console.log(`${this.marca} está se movendo...`);
    }
}
class Carro extends Veiculo {
    portas;
    constructor(marca, portas) {
        super(marca);
        this.portas = portas;
    }
    info() {
        console.log(`Carro da marca ${this.marca} com ${this.portas} portas.`);
    }
}
const meuCarro = new Carro("Toyota", 4);
meuCarro.mover();
meuCarro.info();
//# sourceMappingURL=script.js.map