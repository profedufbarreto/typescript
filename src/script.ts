class Veiculo{
    marca: string;

    constructor(marca: string){
        this.marca = marca;
    }

    mover(): void{
        console.log(`${this.marca} está se movendo...`);
    }
}

class Carro extends Veiculo{
    portas: number;

    constructor(marca:string, portas: number){
        super(marca);
        this.portas = portas;
    }

    info(): void{
        console.log(`Carro da marca ${this.marca} com ${this.portas} portas.`);
    }
}

const meuCarro = new Carro("Toyota", 4);

meuCarro.mover();
meuCarro.info();