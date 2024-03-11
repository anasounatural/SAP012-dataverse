import { filterBy, orderdata, mapData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js'; /* Caso especifico: data não precisa de uma declaração, especificamente pq no dataset está como Defaut, ou seja é um "pegue aquilo tudo do Dataset". Poderia ser qquer nome */

const filtragem = document.querySelector('#continente'); /* traz botao do html p depois ser adicionado evento de filtragem*/
const ordenacao = document.querySelector('#nivelSeguranca');
let mappedData = mapData(data);
const reiniciar = document.getElementById('limpar');
const listaCartao = document.querySelector('#root');
let resultadoFiltragem = [ ]; // [ ] inicia vazio

/*BOTÃO REINICIAR*/
reiniciar.addEventListener('click', () => {
  mappedData = mapData(data);
  listaCartao.innerHTML = "";
  listaCartao.appendChild(renderItems(mappedData));
})


/*RENDERIZAÇÃO*/
document.addEventListener("DOMContentLoaded", () => {
  listaCartao.appendChild(renderItems(mappedData))
})
/* const ListaCartao - Pega do htmL o root e reserva espaço para depois add a linah 11*/
/*DOMContLoad - quando houver carregamento de conteudo html faz o segue na função */
/*???pra mim seria adiconar cartoes ao html logo -->  document.innerHtml.appendChild(renderItems(mappedData) */


/*ORDENAÇÃO*/

ordenacao.addEventListener('change', (event) => {
  if (resultadoFiltragem.length === 0) {
    resultadoFiltragem = mappedData
  } 
  const result = orderdata(resultadoFiltragem, 'safetyLevel', event.target.value)
  listaCartao.innerHTML = '';
  listaCartao.appendChild(renderItems(result));

});



/*FILTRAGEM */
filtragem.addEventListener('change', (event) => {
  const result = filterBy(mappedData, 'choosenContinent', event.target.value)
  listaCartao.innerHTML = '';
  listaCartao.appendChild(renderItems(result));
  resultadoFiltragem = result 
  
});
/*
L16 - Change representa que o "sistema" ficará sensível a mudanças, quando ocorrer o event  
L17 - Event: qdo ocorrer o evento de escolha de opção no select focado(target) no value do html, vai-se no paramentro choosenContent do data e faz aparecer a lista.appendChild...
L18 -  Ao espaço criado no ListaCartão do htmL, adicione apenas os cartões (renderItens) solicitados na const Result 
renderItems retorna uma representação do html do result. InnerHTml traz modificação pro html a partir da root.  
*/
