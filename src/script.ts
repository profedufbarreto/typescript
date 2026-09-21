const letras = ["a", "b", "a", "c", "b", "a"];

const contagem = letras.reduce((acc, letra) => {
    acc[letra] = (acc[letra] || 0) + 1;
    return acc;
}, {} as Record<string, number>);

console.log(contagem);