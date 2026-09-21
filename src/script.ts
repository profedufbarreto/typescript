const palavras = ["Oi", "Eduardo", "tudo", "bem?"];

const frase = palavras.reduce((acc, p) => acc + " " + p);

console.log(frase);