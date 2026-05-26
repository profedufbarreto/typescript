async function buscarGitHub(): Promise<void>{
    try{
        let resposta = await fetch('https://api.github.com/users/eduardofbarreto');
        let dados = await resposta.json();
        console.log("Nome: " + dados.name);
        console.log("Seguidores: " + dados.followers);
    }catch(erro){
        console.log("Erro: " + erro);
    }
}

buscarGitHub();