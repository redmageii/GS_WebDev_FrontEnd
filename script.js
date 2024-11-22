function userLogin() {
    const username=document.querySelector('#username').value
    const password=document.querySelector('#password').value

    if (username==='admin' && password==='admin') {
        window.location.href='https://google.com'
    }
    else {
        alert('Senha ou usuário incorretos.')
    }
}