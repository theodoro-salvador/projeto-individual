
    let form = 1;

    function alterLoginRegis(){

        if(form == 1){

            form = 2;

            document.getElementById('login_form').style.display = 'none';
            document.getElementById('register_form').style.display = 'block';

        } else{

            form = 1;

            document.getElementById('register_form').style.display = 'none';
            document.getElementById('login_form').style.display = 'block';

        }

    }

    let validacaoEmail = 0;

    function validarEmail(){

        let arroba = 0;
        let ponto = 0;

        document.getElementById('span_arroba').style.display = 'none';
        document.getElementById('span_ponto').style.display = 'none';

        if(validarArroba()){
            arroba = 1;
        } else{
            arroba = 0;

            document.getElementById('span_arroba').style.display = 'block';
        }

        if(validarPonto()){
            ponto = 1;
        } else{
            ponto = 0;

            document.getElementById('span_ponto').style.display = 'block';
        }

        validacaoEmail = arroba + ponto;

        if(validacaoEmail == 2){
            document.getElementById('validacao_email').style.display = 'none';
        } else{
            document.getElementById('validacao_email').style.display = 'flex';
        }

        
        // VALIDAÇÃO DE E-MAIL /////////////////////////////////////////////////////////
        
        function validarArroba(){
            
            let email = input_registrar_email.value;
            
            if(email.includes('@')){
                return true;
            }
            
            return false;
            
        }

        function validarPonto(){

            let email = input_registrar_email.value;

            for(let i = 0; i < email.length; i++){

                if(email[i] == '.' && (i > email.indexOf('@') && email.indexOf('@') != -1)){
                    return true;
                }
                
            }
            
            return false;
            
        }
        
        ///////////////////////////////////////////////////////////////////////////////
        
    }

    let validacaoSenha = 0;

    function validarSenha(){
        
        let caracteresEspeciais = 0;
        let tamanho = 0;
        let caps = 0;
        let numeros = 0;


        document.getElementById('span_caracteres_especiais').style.display = 'none';
        document.getElementById('span_tamanho').style.display = 'none';
        document.getElementById('span_caps').style.display = 'none';
        document.getElementById('span_numeros').style.display = 'none';


        if(validarCaracteresEspeciais()){
            caracteresEspeciais = 1;
        } else{
            caracteresEspeciais = 0;

            document.getElementById('span_caracteres_especiais').style.display = 'block';
            
            setTimeout(function(){
                document.getElementById('span_caracteres_especiais').style.display = 'none';
            }, 5000);

        }

        if(validarTamanho()){
            tamanho = 1;

        } else{
            tamanho = 0;

            document.getElementById('span_tamanho').style.display = 'block';

            setTimeout(function(){
                document.getElementById('span_tamanho').style.display = 'none';
            }, 5000);
        }

        if(validarCaps()){
            caps = 1;

        } else{
            caps = 0;

            document.getElementById('span_caps').style.display = 'block';

            setTimeout(function(){
                document.getElementById('span_caps').style.display = 'none';
            }, 5000);
        }

        if(validarNumeros()){
            numeros = 1;

        } else{
            numeros = 0;

            document.getElementById('span_numeros').style.display = 'block';

            setTimeout(function(){
                document.getElementById('span_numeros').style.display = 'none';
            }, 5000);
        }

        validacaoSenha = caracteresEspeciais + tamanho + caps + numeros;

        if(validacaoSenha == 4){
            document.getElementById('validacao_senha').style.display = 'none';
        } else{
            document.getElementById('validacao_senha').style.display = 'flex';
        }
        
        
        // VALIDAÇÃO DE SENHA //////////////////////////////////////////////////////////////
        
        function validarCaracteresEspeciais(){
            
            let password = input_registrar_senha.value;
            let listaCaracteres = ['!','@','#','$','%','&','*','(',')','_','-','+','=',
            '{','}','[',']','/','|','.',',',';',':','<','>','?'];
            
            for(let i = 0; i < listaCaracteres.length; i++){
                if(password.includes(listaCaracteres[i])){
                    return true;
                }
            }
            
            return false;
            
        }
        
        function validarTamanho(){
            
            let password = input_registrar_senha.value;
            
            if(password.length >= 8){
                return true;
            }
            
            return false;
            
        }
        
        function validarCaps(){
            
            let password = input_registrar_senha.value;
            
            if(password != password.toLowerCase()
            && password != password.toUpperCase()){
        return true;
    }
    
            return false;

        }

        function validarNumeros(){

            let password = input_registrar_senha.value;
            let listaNumeros = [1,2,3,4,5,6,7,8,9,0];
            
            for(let i = 0; i < listaNumeros.length; i++){
                if(password.includes(listaNumeros[i])){
                    return true;
                }
            }

            return false;
            
        }
        
        ///////////////////////////////////////////////////////////////////
        
    }

    let validacaoConfirmarSenha = 0;

    function validarConfirmacaoSenha(){

        let confirmarSenha = input_confirmar_senha.value;
        let senha = input_registrar_senha.value;

        if(confirmarSenha == senha){

            validacaoConfirmarSenha = 1;

            document.getElementById('validacao_confirmar_senha').style.display = 'none';
            document.getElementById('span_confirmar_senha').style.display = 'none';

        } else{
            
            validacaoConfirmarSenha = 0;

            document.getElementById('validacao_confirmar_senha').style.display = 'flex';
            document.getElementById('span_confirmar_senha').style.display = 'block';

            setTimeout(function(){
                document.getElementById('validacao_confirmar_senha').style.display = 'none';
                document.getElementById('span_confirmar_senha').style.display = 'none';
            }, 5000);
        }
    }

    function registrar(){

        let usernameLet = input_registrar_username.value;
        let emailLet = input_registrar_email.value;
        let senhaLet = input_registrar_senha.value;
        let confirmarSenha = input_confirmar_senha.value;

        let validacao = validacaoConfirmarSenha + validacaoSenha + validacaoEmail;
        
        if(usernameLet == '' ||
            emailLet == '' ||
            senhaLet == '' ||
            confirmarSenha == ''
        ){
            document.getElementById('registrar_validar_vazios').style.display = 'flex';
            document.getElementById('span_vazios').style.display = 'block';

            setTimeout(function(){
                document.getElementById('registrar_validar_vazios').style.display = 'none';
                document.getElementById('span_vazios').style.display = 'none';
            }, 5000);

            return false;
        }

        fetch('/usuarios/cadastrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                usernameServer: usernameLet,
                emailServer: emailLet,
                senhaServer: senhaLet
            }),
        })
        .then(function(resposta){
            console.log('Resposta: ', resposta);

            if(resposta.ok){
                document.getElementById('span_registro_realizado').style.display = 'block';
                document.getElementById('span_registro_realizado') = 'Registro realizado com sucesso!';

                
                input_registrar_username.value = '';
                input_registrar_email.value = '';
                input_registrar_senha.value = '';
                input_confirmar_senha.value = '';
                
                setTimeout(function(){
                    document.getElementById('span_registro_realizado').style.display = 'none';
                }, 2000)
                setTimeout(alterLoginRegis(), 2000);
            } else{
                document.getElementById('span_registro_realizado').style.display = 'block';
                document.getElementById('span_registro_realizado') = 'Falha no registro';
            }
        })

    }

    function entrar(){

        let emailLet = input_login_email.value;
        let senhaLet = input_login_senha.value;

        if(emailLet == '' || senhaLet == ''){

            document.getElementById('entrar_validar_vazios').style.display = 'flex';
            document.getElementById('span_vazios').style.display = 'block';

            setTimeout(function(){
                document.getElementById('entrar_validar_vazios').style.display = 'none';
                document.getElementById('span_vazios').style.display = 'none';
            }, 5000);

            return false;
            
        }

        fetch('/usuarios/autenticar', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                emailServer: emailLet,
                senhaServer: senhaLet
            })

        }).then(function(resposta){
            if(resposta.ok){
                sdocument.getElementById('span_login_realizado').innerHTML = 'Login realizado com sucesso!';
                document.getElementById('span_login_realizado').style.display = 'block';
                
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));
                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.id;
                });

                login = 1;

                setTimeout(function() {
                    document.getElementById('span_login_realizado').style.display = 'none';
                }, 2000);
                setTimeout(alterLoginUsu, 2000);
            }else{

                document.getElementById('span_login_realizado').innerHTML = 'Falha ao entrar';
                document.getElementById('span_login_realizado').style.display = 'block';

            }

        })

        input_login_email.value = '';
        input_login_senha.value = '';

    }