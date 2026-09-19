interface Usuario{
    id: number;
    nome: string;
    email?:string;
}

function saudar(usuario: Usuario): string{
    return `Olá, ${usuario.nome}! Seu ID é ${usuario.id}.`;
}

const usuario1: Usuario = {id: 1, nome: "Eduardo"};
const usuario2: Usuario = {id: 2, nome: "Maria", email:"maria@gmail.com"};

console.log(saudar(usuario1));
console.log(saudar(usuario2));