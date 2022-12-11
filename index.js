const nomeUser = prompt('Digite seu nome'); // guardar o nome do usuario em uma variavel
var botaoFechar = document.querySelector('#fechar');
var botao = document.querySelector('#send');
const container = document.querySelector('.modal-container'); 
const modal = document.querySelector('.modal');


const openModal = () => container.classList.add('modal-show');
const fechar = () => container.classList.remove('modal-show');
botao.addEventListener('click', openModal);
botaoFechar.addEventListener('click', fechar);
botao.addEventListener('click', function(e) {
  e.preventDefault();
  var cont;
  var respostasCertas = 0;
  var listResp = [];
  var respostas = ['op4', 'op3', 'op1', 'op1', 'op3', 'op4', 'op2', 'op4', 'op3']
  for (cont=1;cont <10;cont++) {
    var select = document.querySelector(`input[name=p${cont}]:checked`).value;
    let value1 = select
    listResp.push(value1);
  }
  console.log(listResp)
  for(var cont=0; cont <10; cont++){
    if(listResp[cont] === respostas[cont]) {
      respostasCertas = respostasCertas + 1;
    }
  }
  modal.innerHTML = ('Parabéns, ' +nomeUser + '! Você acertou um total de ' +respostasCertas + ' questões!')
  console.log(respostasCertas)
})


