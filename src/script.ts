class Pessoa{
    protected nome: string;
     
    constructor(nome: string){
        this.nome = nome;
    }

    apresentar(): void{
        console.log(`Olá, eu sou ${this.nome}!!`);
    }
}

class Professor extends Pessoa{
    private disciplina: string;

     constructor(nome: string, disciplina: string){
        super(nome);
        this.disciplina = disciplina;
     }

     apresentar(): void{
        console.log(`Olá, eu sou o professor ${this.nome} e ensino ${this.disciplina}!!`);
     }
}

class Aluno extends Pessoa{
    private curso: string;

    constructor(nome: string, curso: string){
        super(nome);
        this.curso = curso;
    }

    apresentar(): void {
        console.log(`Oi, eu sou o aluno ${this.nome} do curso de ${this.curso}!!`);
    }
}

const pessoas: Pessoa[] = [
    new Professor("Carlos", "Matemática"),
    new Aluno("Eduardo", "Engenharia"),
    new Pessoa("João")
];

for(const p of pessoas){
    p.apresentar();
}