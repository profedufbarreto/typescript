import * as readline from 'readline-sync';

const nome: string = readline.question("Qual seu nome: ");

const idade: number = readline.questionInt("Qual a sua idade: ");

if(idade >= 18){
    console.log(`Olá, ${nome}. Você é maior de idade!`);
}else{
    console.log(`Olá, ${nome}. Você é menor de idade!`);
}