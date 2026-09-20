import { bytesSync } from "node:stream/iter";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Calculadora{
    a: number;
    b: number;

    constructor(a: number, b: number){
        this.a = a;
        this.b = b;
    }

    somar(): number{
        return this.a + this.b;
    }

    subtrair(): number{
        return this.a - this.b;
    }

    multiplicar(): number{
        return this.a * this.b;
    }

    dividir(): number{
        if(this.b === 0) throw new Error("Não é possível dividir por 0!");
        return this.a / this.b;
    }
}

function iniciar(){
    rl.question("Digite o valor de a (ou 'sair' para encerrar): ", (aStr) => {
        if(aStr.toLowerCase() === "sair"){
            console.log("Encerrando calculadora...");
            rl.close();
            return;
        }

        rl.question("Digite o valor de b: ", (bStr) => {
            rl.question("Escolha a operação (+, -, *, /): ", (op) => {
                const a = Number(aStr);
                const b = Number(bStr);

                if(isNaN(a) || isNaN(b)){
                    console.error("Erro: você deve digitar números válidos!");
                    return iniciar();
                }

                const calc = new Calculadora(a, b);

                try{
                    let resultado: number;
                    switch(op){
                        case "+":
                            resultado = calc.somar();
                            break;
                        case "-":
                            resultado = calc.subtrair();
                            break;
                        case "*":
                            resultado = calc.multiplicar();
                            break;
                        case "/":
                            resultado = calc.dividir();
                            break;
                        default:
                            throw new Error("Operação inválida!");
                    }
                        console.log(`Resultado: ${resultado}`);
                    }catch(error){
                        console.error("Erro: ", (error as Error).message);
                    }   

                    iniciar();
            });
        });
    });
}

iniciar();