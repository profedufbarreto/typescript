"use strict";
class Instrumento {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
    tocar() {
        console.log(`${this.nome} está tocando...`);
    }
}
class Violao extends Instrumento {
    cordas;
    constructor(nome, cordas) {
        super(nome);
        this.cordas = cordas;
    }
    info() {
        console.log(`${this.nome} tem ${this.cordas} cordas.`);
    }
}
class Ukulele extends Violao {
    cor;
    constructor(nome, cordas, cor) {
        super(nome, cordas);
        this.cor = cor;
    }
    info() {
        super.info();
        console.log(`A cor do Ukulele é ${this.cor}`);
    }
}
const v = new Violao("Violão", 6);
const u = new Ukulele("Ukulele", 4, "Mogmo");
v.tocar();
v.info();
u.tocar();
u.info();
//# sourceMappingURL=script.js.map