let form = 0;

function alterLoginRegis(){
    
    if(form == 0){

        form = 1;

        document.getElementById('login_form').style.display = 'none';
        document.getElementById('register_form').style.display = 'block';

    } else{

        form = 0;

        document.getElementById('register_form').style.display = 'none';
        document.getElementById('login_form').style.display = 'block';

    }

}