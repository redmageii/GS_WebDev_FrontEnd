
function userLogin() {
    const username=document.querySelector('#username').value;
    const password=document.querySelector('#password').value;
    const errorText=document.querySelector('#error-msg');

    if (username==='admin' && password==='admin') {
        errorText.textContent='';
        window.location.href='/page';
    }
    else {
        if (username && password) {
        errorText.textContent='Usuário ou senha incorretos.';
        }
        else {
        errorText.textContent='Preencha os campos acima.';
        }
        }
    }
    