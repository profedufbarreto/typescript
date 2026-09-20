class Instrumento{
    protected nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    tocar(): void{
        console.log(`${this.nome} está tocando...`);
    }
}

class Violao extends Instrumento{
    private cordas: number;

    constructor(nome: string, cordas: number){
        super(nome);
        this.cordas = cordas;
    }

    info(): void{
        console.log(`${this.nome} tem ${this.cordas} cordas.`);
    }
}

class Ukulele extends Violao{

    private cor: string;

    constructor(nome: string, cordas: number, cor: string){
        super(nome, cordas);
        this.cor = cor;
    }

    info(): void {
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