import { filterBy, orderdata, mapData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js'; /* Caso especifico: data não precisa de uma declaração, especificamente pq no dataset está como Defaut (pega aquilo tudo do Dataset. Poderia ser qquer nome */

const filtragem = document.querySelector('#continente'); /* Traz botao do html. Nesse espaço chamado continente,será adicionado evento de filtragem.*/
const ordenacao = document.querySelector('#nivelSeguranca');
const reiniciar = document.getElementById('limpar');
const listaCartao = document.querySelector('#root'); //Pega do htmL o root e reserva espaço para depois add resultado das funções
let resultadoFiltragem = [ ]; // [ ] inicia vazio  ??????????????????????????????????????????
let mappedData = mapData(data); // ????????????????????????????????????????? Declara data (com dados sintetizados pelo método map)


/*BOTÃO REINICIAR*/
reiniciar.addEventListener('click', () => {
  mappedData = mapData(data);
  listaCartao.innerHTML = "";
  listaCartao.appendChild(renderItems(mappedData));
})
//Pq tem que incluir a linha 11???????????????????????????? 
//A linha 15 limpa a área,  appendChild inclui os cards 

/*RENDERIZAÇÃO*/
document.addEventListener("DOMContentLoaded", () => {
  listaCartao.appendChild(renderItems(mappedData))
})
//DOMContLoad - quando houver carregamento de conteudo html, ativa função e insere no listaCartao 


/*FILTRAGEM */
filtragem.addEventListener('change', (event) => {
  let result = filterBy(mappedData, 'choosenContinent', event.target.value) //filtra dados de mappedData, a usando a chave choosenContinent, quando no html for acionado (target) o value 
  listaCartao.innerHTML = '';
  listaCartao.appendChild(renderItems(result));
  resultadoFiltragem = result 
});

/*ORDENAÇÃO*/
ordenacao.addEventListener('change', (event) => {
  if (resultadoFiltragem.length === 0) {
    resultadoFiltragem = mappedData
  } 
  const result = orderdata(resultadoFiltragem, 'safetyLevel', event.target.value)
  listaCartao.innerHTML = '';
  listaCartao.appendChild(renderItems(result));
});
//Usa-se resultadoFiltragem ao invés de data para associar ordenação e filtragem, para que ordene a partir dos dados filtrados e não a partir de todos os dados. Apenas aparece toda a lista se o resultado da filtragem for 0
//L16 - Change representa que o "sistema" ficará sensível a mudanças, quando ocorrer o event  
//L17 - Event: qdo ocorrer o evento de escolha de opção no select focado(target) no value do html, vai-se no paramentro choosenContent do data e faz aparecer a lista.appendChild...
//L18 -  Ao espaço criado no ListaCartão do htmL, adicione apenas os cartões (renderItens) solicitados na const Result 
//renderItems retorna uma representação do html do result. InnerHTml traz modificação pro html a partir da root.   