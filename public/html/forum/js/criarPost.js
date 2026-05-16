async function obterIdPost(idTopico){

    console.log('Entrei na função obterIdPost');

    let resposta = await fetch(`/posts/obterIdPost/${idTopico}`);


        if(resposta.status == 200){

            let postagem = await resposta.json();

            let ultimoIdPostagem = postagem[0].idPostagem;
            console.log('ultimoIdPostagem', ultimoIdPostagem);
            return ultimoIdPostagem + 1;

        } else if(resposta.status == 204){

            return 1;

        }


}

async function fazerPost(){
    
    let textoPost = document.getElementById('texto_post').value;
    let idUsuario = sessionStorage.ID_USUARIO;
    let idTopico = new URLSearchParams(window.location.search).get('id');

    console.log('Entrando na função obterIdPost');
    
    let idPostagem = await obterIdPost(idTopico);

    console.log('Saí da função obterIdPost');
    console.log('Id Postagem:', idPostagem);

    if(textoPost == ''){
        console.log('tudo vazio');
        return;
    }

    fetch('/posts/cadastrar', {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            textoPostServer: textoPost,
            idUsuarioServer: idUsuario,
            idTopicoServer: idTopico,
            idPostagemServer: idPostagem,
        }),
    })
    .then(function(resposta){

        if(resposta.ok){

            setTimeout(abrirFecharCriarTopico('none'), 2000);

        }else{
            console.log('falha');
        }

    })

}