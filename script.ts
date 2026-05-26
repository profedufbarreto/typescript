class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void{
        console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos.`);
    }
}

let p1 = new Pessoa("Eduardo", 38);

p1.apresentar();