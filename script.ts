function somar(a: number, b: number): number{
    return a + b;
}

console.log(somar(5, 2));

function saudacao(nome: string): string{
    return "Olá, " + nome + "!";
}

console.log(saudacao("Eduardo"));

function dobrarNumeros(numeros: number[]): number[]{
    return numeros.map(n => n * 2);
}

console.log(dobrarNumeros([1,2,3]));