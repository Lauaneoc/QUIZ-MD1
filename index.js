var botao = document.querySelector('#send')
botao.addEventListener('click', function(e) {
  e.preventDefault();
  var cont;
  var listResp = [];
  for (cont=1;cont <=2;cont++) {
  var select = document.querySelector(`input[name=p${cont}]:checked`).value;
  let value1 = select
    listResp.push(value1);
  }
  console.log(listResp)
})