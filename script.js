"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saudar(usuario) {
    return `Olá, ${usuario.nome}! Seu ID é ${usuario.id}.`;
}
const usuario1 = { id: 1, nome: "Eduardo" };
const usuario2 = { id: 2, nome: "Maria", email: "maria@gmail.com" };
console.log(saudar(usuario1));
console.log(saudar(usuario2));
//# sourceMappingURL=script.js.map