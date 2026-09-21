abstract class FormaGeometrica {
    protected nome: string;

    constructor(nome: string){
        this.nome = nome;
    }

    abstract calcularArea(): number;

    info(): void{
        console.log(`Forma: ${this.nome}, Área: ${this.calcularArea()}`);
    }
}

class Quadrado extends FormaGeometrica{
    private lado: number;

    constructor(lado: number){
        super("Quadrado");
        this.lado = lado;
    }

    calcularArea(): number{
        return this.lado * this.lado;
    }
}

class Circulo extends FormaGeometrica{
    private raio: number;

    constructor(raio: number){
        super("Círculo");
        this.raio = raio;
    }

    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

const formas: FormaGeometrica[] = [
    new Quadrado(4),
    new Circulo(3)
];

for(const f of formas){
    f.info();
}