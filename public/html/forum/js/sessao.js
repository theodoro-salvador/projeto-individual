
function alterLoginUsu(){
    
    let login = 1;

    if(sessionStorage.ID_USUARIO == undefined){
        console.log(sessionStorage.ID_USUARIO);
        login = 0;
        console.log('primeiro if, login = 0');
    } else{
        console.log(sessionStorage.ID_USUARIO);
        login = 1;
        console.log('primeiro if, login = 1');
    }

    if(login == 0){

        form = 1;

        document.getElementById('login_form').style.display = 'block';

        document.getElementById('user_box').style.display = 'none';

        console.log('segundo if, login = 0');

    } else{
        
        document.getElementById('login_form').style.display = 'none';
        document.getElementById('user_box').style.display = 'flex';

        exibirSessao();

        console.log('segundo if, login = 1');

    }
}

window.onload = alterLoginUsu();

function exibirSessao(){
    let username = sessionStorage.NOME_USUARIO;
    let email = sessionStorage.EMAIL_USUARIO;

    if(username != null && email != null){
        document.getElementById('username_display').innerHTML = username;
    }

}

function sair(){
    console.log(sessionStorage.ID_USUARIO, 'executando função sair');

    sessionStorage.clear();

    console.log(sessionStorage.ID_USUARIO, 'executando função sair 2');

    setInterval(alterLoginUsu(), 2000);
}