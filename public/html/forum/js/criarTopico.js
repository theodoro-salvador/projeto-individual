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

function receberIds(){
console.log('oi');

    fetch('/topicos/receberIds')
    .then(response => {

        if(response.status == 200){
            response.json().then(resposta =>{

                console.log(`Dados recebidos:  ${JSON.stringify(resposta)}`)
                
                exibirTopicos(resposta);

            })

        }

    });

}

function exibirTopicos(resposta){

    let listaIds = resposta;

    console.log(listaIds)
    // receberIds();



    for(let i = 0; i < listaIds.length; i++){

        let idTopico = listaIds[i].idTopico;

        console.log('ID: ', idTopico);

        fetch(`/topicos/exibir/${idTopico}`)
        .then(function(response){

            if(response.ok){

                response.json().then(function(registroTopico){

                    let tituloTopico = registroTopico[0].titulo;
                    let descricaoTopico = registroTopico[0].descricao;
                    let anoTopico = registroTopico[0].ano;
                    let mesTopico = registroTopico[0].mes;
                    let diaTopico = registroTopico[0].dia;
                    let autorTopico = registroTopico[0].autor;

                    document.getElementById('main_content').innerHTML += `

                        <div class="topic">
                            <div class="topic-info-1">
                                <div class="topic-title">
                                    <a href="./topico.html?id=${idTopico}">
                                        <span>${tituloTopico}</span>
                                    </a>
                                    <hr>
                                </div>
                                
                                <div class="topic-subtitle">
                                    <span>${descricaoTopico}</span>
                                </div>
                            </div>

                            <div class="topic-info-2">

                                <div>
                                    <span>${autorTopico}</span>
                                </div>
                                
                                <div>
                                    <span>${diaTopico}/${mesTopico}/${anoTopico}</span>
                                </div>
                                
                                <div>
                                    <span>X</span>
                                </div>

                                <div>
                                    <span>Por: usuário</span>
                                    <span>XX/XX/XXXX</span>
                                </div>
                            </div>
                        </div>

                    `;

                })

            }

        })

    }



}