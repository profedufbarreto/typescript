"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somar(a, b) {
    return a + b;
}
function subtrair(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (a < 0) {
        throw new Error(`O valor deve ser maior que 0!`);
    }
    else {
        return a / b;
    }
}
const resultado1 = somar(4, 3);
const resultado2 = somar(10, 20);
const resultado3 = subtrair(50, 31);
const resultado4 = multiplicar(5, 8);
const resultado5 = dividir(10, 2);
console.log(`Resultado 1: ${resultado1}`);
console.log(`Resultado 2: ${resultado2}`);
console.log(`Resultado 3: ${resultado3}`);
console.log(`Resultado 4: ${resultado4}`);
console.log(`Resultado 5: ${resultado5}`);
//# sourceMappingURL=script.js.map