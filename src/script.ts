import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    const somar = (a: number, b: number): number =>{
        return a + b;
    }

    const subtrair = (a: number, b: number): number => {
        return a - b;
    }

    const multiplicar = (a: number, b: number): number => {
        return a * b;
    }

    const dividir = (a: number, b: number): number => {
        if(a < 0){
            throw new Error("O valor deve ser maior que 0!");
        }if(b === 0){
            throw new Error("Não é possível dividir por 0!");
        }
        return a / b;

    }

function calculadora(){
    rl.question("Digite o valor de a (ou 'sair para encerrar): ", (aStr: string) => {
        if(aStr.toLowerCase() === "sair"){
            console.log("Encerrando calculadora...");
            rl.close();
            return;
        }

        rl.question("Digite o valor de b: ", (bStr: string) => {
            rl.question("Escolha a operação (+, -, *, /): ", (op:string) => {
                const a = Number(aStr);
                const b = Number(bStr);

                if(isNaN(a) || isNaN(b)){
                    console.error("Erro: você deve digitar números válidos!");
                    return calculadora();
                }

                try{
                    let resultado: number;
                    switch(op){
                        case "+": resultado = somar(a, b); break;
                        case "-": resultado = subtrair(a, b); break;
                        case "*": resultado = multiplicar(a, b); break;
                        case "/": resultado = dividir(a, b); break;
                        default: throw new Error("Operação inválida!");
                    }
                    console.log(`Resultado: ${resultado}`);
                }catch(error){
                    console.error("Erro: ", (error as Error).message);
                }

                calculadora();
            });
        });
    });
}

calculadora();