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