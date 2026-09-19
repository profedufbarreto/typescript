import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somar(a: number, b: number): number{
    return a + b;
}

function subtrair(a: number, b: number): number{
    return a - b;
}

function multiplicar(a: number, b: number): number{
    return a * b;
}

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
            const resultado1 = somar(a, b);
            const resultado2 = subtrair(a, b);
            const resultado3 = multiplicar(a, b);
            const resultado4 = dividir(a, b);
            console.log(`Resultado da soma: ${resultado1}`);
            console.log(`Resultado da subtração: ${resultado2}`);
            console.log(`Resultado da multiplicação: ${resultado3}`);
            console.log(`Resultado da divisão: ${resultado4}`);
        }catch(error){
            console.error("Erro: ", (error as Error).message);
        }
        rl.close();
    });
});