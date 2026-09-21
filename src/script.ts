const soma = (a: number, b: number): number => a + b;

const media = (numeros: number[]): number =>{
    const total = numeros.reduce((acc, n) => acc + n, 0);
    return total / numeros.length;
}

const maiorNumero = (numeros: number[]): number => Math.max(...numeros);

const menorNumero = (numeros: number[]): number => Math.min(...numeros);

const dobrarNumeros = (numeros: number[]): number[] => numeros.map(n => n * 2);

//Teste das funções

const valores = [10, 20, 30, 40, 50];

console.log("Soma: ", soma(5, 7));
console.log("Média: ", media(valores));
console.log("Maior nùmero: ", maiorNumero(valores));
console.log("Menos número: ", menorNumero(valores));
console.log("Dobrar números: ", dobrarNumeros(valores));