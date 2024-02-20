export const renderItems = (data) => {
  const cartoes = document.createElement('ul'); //cria elemento ul no html
  cartoes.classList.add('cartoes'); //cartoesvermelho vem de onde? sugerir const ulCartoes

  //forEach = atrvés da função "item", determina o que vai ocorrer com cada intem da arry "data"
  //innerHTML = adiciona à UL "cartoes" o que vem depois do += ou seja, a li
  //??? abaixo deveria ser cartoa ou cartoes 
  data.forEach((item) => {
    cartoes.innerHTML += `
  <li class="cartao" itemscope itemtype="${item.id}">    
    <section>
      <figure><img itemprop="imageUrl" src="${item.imageUrl}" title="${item.name}"></figure>
      <h5 class="nomeDoPais"><span itemprop="name">${item.name}</span></h5>
      <h6 class="curtaDescricao"><span itemprop="shortDescription">${item.shortDescription}</span ></h6 >
      <p class="descricao"><span itemprop="description">${item.description}</span></p>
      <p class="seguranca">Nivel de segurança: <span class="valor" itemprop="safetyLevel">${item.facts.safetyLevel}</span></p>
      <p class="idioma">Idioma: <span class="valor" itemprop="languages">${item.facts.mainLanguages}</span></p>
      <p class="custo">Custo médio por dia: <span class="valor" itemprop="averageCost">${item.facts.averageCost}</span></p>
      <p class="continente">Continente: <span class="valor" itemprop="continent">${item.facts.choosenContinent}</span></p>
    </section >
  </li>
  `;
  });
  console.log('Dentro do renderItens')
  console.log(cartoes);
  return cartoes; //não é redundante 
};