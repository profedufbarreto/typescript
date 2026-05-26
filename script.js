"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saudar(nome, callback) {
    let mensagem = "Olá, " + nome;
    callback(mensagem);
}
saudar("Eduardo", (msg) => {
    console.log(msg);
});
//# sourceMappingURL=script.js.map