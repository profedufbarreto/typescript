class ContaBancaria{
    private saldo: number;
    public titular: string;

    constructor(titular: string, saldoInicial: number){
        this.titular = titular;
        this.saldo = saldoInicial;
    }

    public depositar(valor: number): void{
        this.saldo += valor;
        console.log(`Depósito de R$: ${valor} realizado!`);
    }

    public getSaldo(): number{
        return this.saldo;
    }

    private calcularJuros(): number{
        return this.saldo * 0.05;
    }
}

let conta = new ContaBancaria("Eduardo", 1000);
conta.depositar(500);
console.log(`Saldo: R$ ${conta.getSaldo()}`);