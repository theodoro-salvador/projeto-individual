function enviarVoto(){

    let voto = document.querySelector('input[name="votacao_album"]:checked').value;
    // console.log(voto)

    if(!voto){

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
                fkVotoServer: voto,
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

    }

}