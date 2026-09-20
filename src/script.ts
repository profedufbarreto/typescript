class Animal{
    nome: string;
    idade: number = 3;

    constructor(nome: string){
        this.nome = nome;
        this.idade = this.idade;
    }

    falar(): void{
        console.log(`${this.nome} está fazendo um som...`);
    }

    apresentar(): void{
        console.log(`${this.nome} tem ${this.idade} anos!`);
    }
}

const cachorro = new Animal("Rex");
cachorro.falar();
cachorro.apresentar();