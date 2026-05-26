"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function buscarDados() {
    let resposta = await fetch('https://api.exemplo.com/dados');
    let dados = await resposta.json();
    console.log(dados);
}
buscarDados();
//# sourceMappingURL=script.js.map