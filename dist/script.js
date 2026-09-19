"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const somar = (a, b) => {
    return a + b;
};
const subtrair = (a, b) => {
    return a - b;
};
const multiplicar = (a, b) => {
    return a * b;
};
const dividir = (a, b) => {
    if (a < 0) {
        throw new Error("O valor deve ser maior que 0!");
    }
    if (b === 0) {
        throw new Error("Não é possível dividir por 0!");
    }
    return a / b;
};
function calculadora() {
    rl.question("Digite o valor de a (ou 'sair para encerrar): ", (aStr) => {
        if (aStr.toLowerCase() === "sair") {
            console.log("Encerrando calculadora...");
            rl.close();
            return;
        }
        rl.question("Digite o valor de b: ", (bStr) => {
            rl.question("Escolha a operação (+, -, *, /): ", (op) => {
                const a = Number(aStr);
                const b = Number(bStr);
                if (isNaN(a) || isNaN(b)) {
                    console.error("Erro: você deve digitar números válidos!");
                    return calculadora();
                }
                try {
                    let resultado;
                    switch (op) {
                        case "+":
                            resultado = somar(a, b);
                            break;
                        case "-":
                            resultado = subtrair(a, b);
                            break;
                        case "*":
                            resultado = multiplicar(a, b);
                            break;
                        case "/":
                            resultado = dividir(a, b);
                            break;
                        default: throw new Error("Operação inválida!");
                    }
                    console.log(`Resultado: ${resultado}`);
                }
                catch (error) {
                    console.error("Erro: ", error.message);
                }
                calculadora();
            });
        });
    });
}
calculadora();
//# sourceMappingURL=script.js.map