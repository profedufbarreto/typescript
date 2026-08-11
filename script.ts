import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarDados(): void{
    rl.question("Digite seu nome: ", (nome: string) => {
        rl.question("Digite sua idade: ", (idadeStr: string) => {
            const idade: number = parseInt(idadeStr);

            console.log("\n=== Dados Digitados ===");
            console.log("Nome: " + nome);
            console.log("Idade: " + idade);
            console.log("Tipo do nome: " + typeof nome);
            console.log("Tipo da idade: " + typeof idade);

            rl.close();
        });
    });
}

perguntarDados();