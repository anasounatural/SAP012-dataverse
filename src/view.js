export const renderItems = (listaDestinos) => {
  const ulCartoes = document.createElement('ul'); //cria elemento ul no html
  ulCartoes.classList.add('cartoes'); // adiciona ao Ul uma class = cartoes

  //forEach = atrvés da função "item", determina o que vai ocorrer com cada item da array "data"
  //innerHTML = adiciona à uLcartoes o que vem depois do += ou seja, a li
  //Na linha 22 acrescentei div para comecar a fazer Modal e separar informações em pop up usando Modal.  
  //listaDestinos - não é o dataset é uma declaracao que fiz agora
  listaDestinos.forEach((item) => {
    ulCartoes.innerHTML += `
  <li class="cardUnitario" itemscope itemtype="${item.id}">    
    <section>
      <figure><img class="imagemCard" itemprop="imageUrl" src="${item.imageUrl}" title="${item.name}"></figure>

      <h3 class="nomeDoPais"><span itemprop="name">${item.name}</span></h3>

      <h6 class="curtaDescricao"><span itemprop="shortDescription">${item.shortDescription}</span></h6>
     
      <button class="saibaMaisBotao">Saiba Mais</button> 
        <div class="detalhada">
          <p class="descricao"><span itemprop="description">${item.description}</span></p>
          <p class="continente">Continente: <span class="valor" itemprop="continent">${item.facts.choosenContinent}</span></p>
          <p class="idioma">Idioma: <span class="valor" itemprop="languages">${item.facts.mainLanguages}</span></p>
          <p class="custo">Custo médio por dia: <span class="valor" itemprop="averageCost">${item.facts.averageCost}</span></p>
          <p class="seguranca">Nivel de segurança: <span class="valor" itemprop="safetyLevel">${item.facts.safetyLevel}</span></p>
        </div>
    </section>
  </li>
  `;
  });
  console.log('Dentro do renderItens')
  console.log(ulCartoes);
  return ulCartoes; //não é redundante 
};