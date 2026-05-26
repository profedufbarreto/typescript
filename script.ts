async function buscarDados(): Promise<void>{
    let resposta = await fetch('https://api.exemplo.com/dados');
    let dados = await resposta.json();
    console.log(dados);
}

buscarDados();