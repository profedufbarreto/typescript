"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    saldo;
    titular;
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$: ${valor} realizado!`);
    }
    getSaldo() {
        return this.saldo;
    }
    calcularJuros() {
        return this.saldo * 0.05;
    }
}
let conta = new ContaBancaria("Eduardo", 1000);
conta.depositar(500);
console.log(`Saldo: R$ ${conta.getSaldo()}`);
//# sourceMappingURL=script.js.map