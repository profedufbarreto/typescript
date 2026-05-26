"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `${this.nome} (${this.idade} anos)`;
    }
}
let pessoas = [];
function adicionarPessoa() {
    let inputNome = document.getElementById('inputNome');
    let inputIdade = document.getElementById('inputIdade');
    let nome = inputNome.value;
    let idade = parseInt(inputIdade.value);
    if (nome === "" || isNaN(idade)) {
        alert("Preencha todos os campos!");
        return;
    }
    let p = new Pessoa(nome, idade);
    pessoas.push(p);
    inputNome.value = "";
    inputIdade.value = "";
    exibirPessoas();
}
function exibirPessoas() {
    let lista = document.getElementById('lista');
    lista.innerHTML = "";
    pessoas.forEach((p, index) => {
        let div = document.createElement('div');
        div.className = 'pessoa';
        div.innerHTML = `
            <strong>${p.apresentar()}</strong>
            <button onclick="removerPessoa(${index}")>Remover</button>
            `;
        lista.appendChild(div);
    });
}
function removerPessoa(index) {
    pessoas.splice(index, 1);
    exibirPessoas();
}
//# sourceMappingURL=script.js.map