"use strict";
const soma = (a, b) => a + b;
const media = (numeros) => {
    const total = numeros.reduce((acc, n) => acc + n, 0);
    return total / numeros.length;
};
const maiorNumero = (numeros) => Math.max(...numeros);
const menorNumero = (numeros) => Math.min(...numeros);
const dobrarNumeros = (numeros) => numeros.map(n => n * 2);
//Teste das funções
const valores = [10, 20, 30, 40, 50];
console.log("Soma: ", soma(5, 7));
console.log("Média: ", media(valores));
console.log("Maior nùmero: ", maiorNumero(valores));
console.log("Menos número: ", menorNumero(valores));
console.log("Dobrar números: ", dobrarNumeros(valores));
//# sourceMappingURL=script.js.map