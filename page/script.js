// Criação de variáveis para a alteração do estilo de elementos de botão
const footerButton=document.querySelector('.final-btn');
const contactButton=document.querySelector('#contact-btn')
const homeButton=document.querySelector('.home-btn');
const aboutButton=document.querySelector('.intro-btn a');
const navButton=document.querySelector('.simule-btn a');
const simulButton=document.querySelector('#simul-btn');
//Array para integração em um for loop para efeito de transição em botões
const buttonArray=[aboutButton, navButton, simulButton, homeButton, contactButton, footerButton];

//Função para transição de estilo de botão para mouseover e mouseout, iterando sobre todos os elementos do array.
buttonArray.forEach(function(elem) {
    elem.addEventListener('mouseover', function() {

    elem.style.backgroundColor = '#00FFA0';
    elem.style.color='#040720'
    elem.style.transition='all 0.5s'
    }
)
elem.addEventListener('mouseout', function() {
    elem.style.background = 'none';
    elem.style.color = 'white'
    elem.style.transition ='all 0.5s'
})
})

//Função para calcular o trabalho realizado pelo dispositivo ao sofrer compressão, dada uma distância de atuação de 0,005 metros. O dispositivo, realizará a conversão da energia mecânica em energia elétrica através do princípio da Segunda Lei de Newton e piezoeletricidade.
const resultText=document.querySelector('.result-text');

function calculateSimul() {
    const height=document.querySelector('#height').value
    const weight=document.querySelector('#weight').value
    const dist=document.querySelector('#dist').value
    // de acordo com documentação técnica, a função utiliza da conversão da distância de cada passo baseada na altura e massa do indivíduo
    const stepWidth=(height*0.415)/100
    //dividindo a distância total percorrida pela distância de cada passo, obtém-se a quantidade média de passos em um percurso
    const steps=(dist/stepWidth)
    //calculando o trabalho realizado por cada passo na superfície WattWalk e multiplicando pela quantidade de passos, tem-se a energia do trabalho, em joules.
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
//Função para realização do retorno dos dados preenchidos na seção de contato, com condicionais pertinentes.
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
//Função para preencher automaticamente o campo de mensagem, demonstrando interesse.
}
function interestMessage() {
    const messageForm=document.querySelector('#contact-message');
    messageForm.textContent='Olá, eu gostaria de saber mais sobre o WattWalk.';
    }