class Pessoa{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string{
        return `${this.nome} (${this.idade} anos)`;
    }
}

let pessoas: Pessoa[] = [];

function adicionarPessoa(): void{
    let inputNome = document.getElementById('inputNome') as HTMLInputElement;
    let inputIdade = document.getElementById('inputIdade') as HTMLInputElement;

    let nome = inputNome.value;
    let idade = parseInt(inputIdade.value);

    if(nome === "" || isNaN(idade)){
        alert("Preencha todos os campos!");
        return;
    }

    let p = new Pessoa(nome, idade);
    pessoas.push(p);

    inputNome.value = "";
    inputIdade.value = "";

    exibirPessoas();
}

function exibirPessoas(): void{
    let lista = document.getElementById('lista')!;
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

function removerPessoa(index: number): void{
    pessoas.splice(index, 1);
    exibirPessoas();
}