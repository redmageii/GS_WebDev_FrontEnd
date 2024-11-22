const footerButton=document.querySelector('.final-btn');
const contactButton=document.querySelector('#contact-btn')
const homeButton=document.querySelector('.home-btn');
const aboutButton=document.querySelector('.intro-btn a');
const navButton=document.querySelector('.simule-btn a');
const simulButton=document.querySelector('#simul-btn');
const buttonArray=[aboutButton, navButton, simulButton, homeButton, contactButton, footerButton];

buttonArray.forEach(function(elem) {
    elem.addEventListener('mouseover', function() {

    elem.style.backgroundColor = '#00FFA0';
    elem.style.color='#040720'
    elem.style.transition='all 0.5s'
    elem.style.textDecoration='none'
    }
)
elem.addEventListener('mouseout', function() {
    elem.style.background = 'none';
    elem.style.color = 'white'
    elem.style.transition ='all 0.5s'
})
})

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
function interestMessage() {
    const messageForm=document.querySelector('#contact-message');
    messageForm.textContent='Olá, eu gostaria de saber mais sobre o WattWalk.';
    }