
const loginButton=document.querySelector('#login-btn')


loginButton.addEventListener('mouseover', function() {
    loginButton.style.backgroundColor = '#00FFA0';
    loginButton.style.color='#040720'
    loginButton.style.transition='all 0.5s'
}
)

loginButton.addEventListener('mouseout', function() {
    loginButton.style.background = 'none';
    loginButton.style.color = 'white'
    loginButton.style.transition ='all 0.5s'
})


function userLogin() {
    const username=document.querySelector('#username').value;
    const password=document.querySelector('#password').value;
    const errorText=document.querySelector('#error-msg');

    if (username==='admin' && password==='admin') {
        errorText.textContent='';
        window.location.href='./page/index.html';
    }
    else {
        if (username && password) {
        //retorna o erro caso a combinação de usuário e senha esteja incorreta. optamos por omitir o alert para algo mais sofisticado e prático
        errorText.textContent='Usuário ou senha incorretos.';
        }
        else {
        //Retorna o erro caso o usuário ou a senha estejam vazios
        errorText.textContent='Preencha os campos acima.';
        }
        }
    }
    