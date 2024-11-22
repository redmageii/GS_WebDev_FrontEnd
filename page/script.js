const resultText=document.querySelector('.result-text');

function calculateSimul() {
    const height=document.querySelector('#height').value
    const weight=document.querySelector('#weight').value
    const dist=document.querySelector('#dist').value
    const stepWidth=(height*0.415)/100
    const steps=(dist/stepWidth)
    const weightForce=(weight*9.8)
    const work=(weightForce*0.005*steps)
if ((height && weight && dist) && (height>0 && weight>0 && dist>0)){
    resultText.style.transition='all 0.5s';
    resultText.style.color='white';
    resultText.textContent=`A energia gerada durante uma caminhada de ${dist} metros na superfície WattWalk é de ${work.toFixed(2)}J`   
}
else {
    alert('Preencha os campos com valores válidos para realizar a simulação.')
}

}

function sendMessage() {
    const nameForm=document.querySelector('#contact-name').value
    const phoneForm=document.querySelector('#contact-phone').value
    const emailForm=document.querySelector('#contact-email').value
    const subjectForm=document.querySelector('#contact-subject').value
    const messageForm=document.querySelector('#contact-message').value

    if (nameForm &&emailForm && subjectForm && messageForm) {
    alert(`Mensagem enviada com sucesso. Retornaremos o mais breve possível.
        Nome: ${nameForm} 
        Telefone/Celular: ${phoneForm} 
        E-mail: ${emailForm} 
        Assunto: ${subjectForm} 
        Mensagem: ${messageForm}`)
    }
    else {
        alert('Preencha os campos corretamente.')
    }

}