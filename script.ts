function saudar(nome: string, callback: (msg: string) => void): void{
    let mensagem = "Olá, " + nome;
    callback(mensagem);
}

saudar("Eduardo", (msg) => {
    console.log(msg);
});