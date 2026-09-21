"use strict";
const letras = ["a", "b", "a", "c", "b", "a"];
const contagem = letras.reduce((acc, letra) => {
    acc[letra] = (acc[letra] || 0) + 1;
    return acc;
}, {});
console.log(contagem);
//# sourceMappingURL=script.js.map