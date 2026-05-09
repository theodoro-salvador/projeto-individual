function abrirFecharCriarTopico(statusDisplay){

    if(login == 0){
        document.getElementById('validacao_login_topic').style.display = 'flex';
        document.getElementById('span_validacao_login_topic').style.display = 'block';

        setTimeout(function(){
            document.getElementById('validacao_login_topic').style.display = 'none';
            document.getElementById('span_validacao_login_topic').style.display = 'none';
        }, 5000)
        
        return console.log('nao logado');
    }

    document.getElementById('topico_form').style.display = statusDisplay;

}

function criarTopico(){

    let tituloTopico = document.getElementById('titulo_topico').value;
    let descricaoTopico = document.getElementById('descricao_topico').value;
    let autorTopico = sessionStorage.ID_USUARIO;

    if(tituloTopico == '' || descricaoTopico == '' || autorTopico == ''){
        console.log('tudo vazio');
        return;
    }

    fetch('/topicos/cadastrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            tituloTopicoServer: tituloTopico,
            descricaoTopicoServer: descricaoTopico,
            autorTopicoServer: autorTopico,
        }),
    })
    .then(function(resposta){

        console.log('Resposta: ', resposta)

        if(resposta.ok){

            setTimeout(abrirFecharCriarTopico('none'), 2000);

        }else{

            console.log('Falha em criar tópico');

        }

    })

}

function obterDadosTopicos(idTopico){
    fetch()
}

function exibirTopicos(){

}