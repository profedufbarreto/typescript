import * as readline from 'readline';

interface Pessoa{
    nome: string;
    idade: number;
    email: string;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function criarPessoa(): void{
    rl.question("Nome: ", (nome: string) => {
        rl.question("Idade: ", (idadeStr: string) => {
            rl.question("Email: ", (email: string) => {

                const pessoa: Pessoa = {
                    nome: nome,
                    idade: parseInt(idadeStr),
                    email: email
                };

                console.log("\n === Pessoa Criada ===");
                console.log("Nome: " + pessoa.nome);
                console.log("Idade: " + pessoa.idade);
                console.log("Email: " + pessoa.email);

                rl.close();
            });
        });
    });
}

criarPessoa();