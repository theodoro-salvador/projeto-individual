let login = 1;

window.onload = conferirLogin();

function conferirLogin(){

    if(sessionStorage.ID_USUARIO == undefined){
        console.log(sessionStorage.ID_USUARIO);
        login = 0;
    } else{
        console.log(sessionStorage.ID_USUARIO);
        login = 1;
    }

    return console.log(login);
    
}

function alterLoginUsu(){

    conferirLogin();

    if(login == 0){

        form = 1;

        document.getElementById('login_form').style.display = 'block';

        document.getElementById('user_box').style.display = 'none';


    } else{
        
        document.getElementById('login_form').style.display = 'none';
        document.getElementById('user_box').style.display = 'flex';

        exibirSessao();


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

    sessionStorage.clear();

    setInterval(alterLoginUsu(), 2000);

}