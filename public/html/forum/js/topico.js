let topicoForm = 0;

function abrirCriarTopico(){

    if(topicoForm == 0){
        topicoForm = 1;
    } else{
        topicoForm = 0;
    }

    if(topicoForm == 1){
        document.getElementById('topico_form').style.display = 'block';
    } else{
        document.getElementById('topico_form').style.display = 'none';
    }

}