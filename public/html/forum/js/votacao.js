function selecaoVoto(){

    // console.log('oi')

    let idSelecionado = document.querySelector('input[name="votacao_album"]:checked').value;
    let listaImagens = document.getElementsByClassName('votacao-input-img');

    // console.log(listaImagens);
    // console.log(idSelecionado);

    for(let i = 0; i < listaImagens.length; i++){

        // console.log('entrei no for');
        // console.log(listaImagens[i]);
        listaImagens[i].style.borderColor = '#db2c31';

    }



    document.getElementById(`img_${idSelecionado}`).style.borderColor = '#98b0dc'
    // document.getElementById(`img_${idSelecionado}`).style.borderColor = '#26348c'

}

function enviarVoto(){

    // console.log(voto)
    
    
    if(sessionStorage.ID_USUARIO == undefined){
        
        document.getElementById('msg_validacao_voto').style.display = 'block';
        document.getElementById('msg_validacao_voto').innerHTML = 'É necessário logar para votar!';
        
    } else{

        let idDisco = document.querySelector('input[name="votacao_album"]:checked').value;

        if(!idDisco){
            
            document.getElementById('msg_validacao_voto').style.display = 'block';
            document.getElementById('msg_validacao_voto').innerHTML = 'Escolha um álbum para votar!';
            
            return;
            
        } else{
            
            document.getElementById('msg_validacao_voto').style.display = 'none';
            
            fetch('/votos/enviarVoto', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({
                    idDiscoServer: idDisco,
                    idUsuarioServer: sessionStorage.ID_USUARIO,
                }),
            })
            .then(function(resposta){
                
                console.log('Resposta: ', resposta);
                
                if(resposta.ok){
                    
                document.getElementById('msg_validacao_voto').style.display = 'block';
                document.getElementById('msg_validacao_voto').innerHTML = 'Voto enviado!';

                } else{
                
                document.getElementById('msg_validacao_voto').style.display = 'block';
                document.getElementById('msg_validacao_voto').innerHTML = 'Falha ao enviar voto!';
                
                }
            
            })
            
            let listaImagens = document.getElementsByClassName('votacao-input-img');
            
            for(let i = 0; i < listaImagens.length; i++){

                listaImagens[i].style.borderColor = '#db2c31';

            }

        }
    } 

}