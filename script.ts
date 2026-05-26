function buscarDados(callback: (dados: string) => void): void{
    setTimeout(() => {
        callback("Dados carregados!");
    }, 2000);
}

buscarDados((dados) => {
    console.log(dados);
})