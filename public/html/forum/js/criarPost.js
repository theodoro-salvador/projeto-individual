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

window.onload = receberIds();

function receberIds(){

    let idTopico = new URLSearchParams(window.location.search).get('id');

    fetch(`/posts/receberIds/${idTopico}`)
    .then(resposta => {

        if(resposta.status == 200){
            resposta.json().then(resposta =>{

                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);

                exibirPosts(resposta);
                
            })
        }

    })

}

async function exibirPosts(resposta){

    let listaIds = resposta;

    console.log(listaIds);

    for(let i = 0; i < listaIds.length; i++){

        let postagem = listaIds[i];

        console.log('ID Postagem:', postagem.idPostagem);
        console.log('ID Tópico:',postagem.idTopico);

        let resposta = await fetch(`/posts/exibir/${JSON.stringify(postagem)}`);

        if(resposta.ok){

            let dadosPostagem = await resposta.json();

            console.log(dadosPostagem);
            
            let autorPostagem  = dadosPostagem[0].autorPostagem;
            let conteudoPostagem = dadosPostagem[0].texto;
            let anoPostagem = dadosPostagem[0].anoPostagem;
            let mesPostagem = dadosPostagem[0].mesPostagem;
            let diaPostagem = dadosPostagem[0].diaPostagem;
            let horaPostagem = dadosPostagem[0].horaPostagem;
            let minutoPostagem = dadosPostagem[0].minutoPostagem;
            let segundoPostagem = dadosPostagem[0].segundoPostagem;
            
            document.getElementById('posts_section').innerHTML += 
            `
                <div class="post">
                        <div class="post-header">
                            <div class="post-autor">
                                <span>${autorPostagem}</span>
                            </div>

                            <div class="post-data">
                                <span>Publicado em: ${diaPostagem}/${mesPostagem}/${anoPostagem} às ${horaPostagem}:${minutoPostagem}:${segundoPostagem}</span>
                            </div>
                        </div>

                        <div class="post-content">
                            <span>
                                ${conteudoPostagem}
                            </span>
                        </div>
                    </div>
            `;

        }

    }

}