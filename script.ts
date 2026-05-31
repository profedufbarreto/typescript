class Pessoa{
    nome: string;
    idade: number;
    email: string;

    constructor(nome: string, idade: number, email: string){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar(): void{
        console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos.`);
    }

    getEmail(): string{
        return this.email;
    }
}

let p1 = new Pessoa("Eduardo", 38, "fbarreto.eduardo@gmail.com");
p1.apresentar();
console.log(`Email: ${p1.getEmail()}`);