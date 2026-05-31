interface Pessoa{
    nome: string;
    idade: number;
    email: string;
}

let pessoa1: Pessoa = {
    nome: "Eduardo",
    idade: 38,
    email: "fbarreto.eduardo@gmail.com"
};

let pessoa2: Pessoa = {
    nome: "Bianca",
    idade: 24,
    email: "bianca@gmail.com"
};

console.log("Pessoa 1: ", JSON.stringify(pessoa1));
console.log("Pessoa 2: ", JSON.stringify(pessoa2));