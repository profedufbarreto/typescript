"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buscarDados(callback) {
    setTimeout(() => {
        callback("Dados carregados!");
    }, 2000);
}
buscarDados((dados) => {
    console.log(dados);
});
//# sourceMappingURL=script.js.map