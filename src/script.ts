import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function dividir(a: number, b: number): number{
    if(a < 0){
        throw new Error("O valor deve ser maior que 0!");
    }
    if(b === 0){
        throw new Error("Não é possível dividir por 0!");
    }
    return a / b;
}

rl.question("Digite o valor de a: ", (aStr) => {
    rl.question("Digite o valor de b: ", (bStr) =>{
        const a = Number(aStr);
        const b = Number(bStr);

        try{
            const resultado = dividir(a, b);
            console.log(`Resultado: ${resultado}`);
        }catch(error){
            console.error("Erro: ", (error as Error).message);
        }
        rl.close();
    });
});