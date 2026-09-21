class Veiculo{
    protected modelo: string;

    constructor(modelo: string){
        this.modelo = modelo;
    }

    mover(): void{
        console.log(`${this.modelo} está se movendo...`);
    }
}

class Carro extends Veiculo{
    mover(): void{
        console.log(`${this.modelo} está dirigindo na estrada.`);
    }
}

class Aviao extends Veiculo{
    mover(): void{
        console.log(`${this.modelo} está voando nos céus.`);
    }
}

const veiculos: Veiculo[] = [
    new Carro("Sedan"),
    new Aviao("Boeing 737")
];

for(const v of veiculos){
    v.mover();
}