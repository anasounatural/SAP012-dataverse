export const renderItems = (listaDestinos) => {
  const ulCartoes = document.createElement('ul'); //cria elemento ul no html
  ulCartoes.classList.add('cartoes'); // adiciona ao Ul uma class = cartoes

  listaDestinos.forEach((item) => {
    ulCartoes.innerHTML += `
  <li class="cardUnitario" itemscope itemtype="${item.id}">    
    <section>
      <figure><img class="imagemCard" itemprop="imageUrl" src="${item.imageUrl}" title="${item.name}"></figure>

      <h3 class="nomeDoPais"><span itemprop="name">${item.name}</span></h3>

      <h6 class="curtaDescricao"><span itemprop="shortDescription">${item.shortDescription}</span></h6>

      <details>
        <summary class="saibaMaisBotao">Saiba Mais</summary>
        <p> ${item.shortDescription} </p>
      </details>
        
    </section>
  </li>
  `;
  });

  return ulCartoes;
};

//forEach = atrvés da função "item", determina o que vai ocorrer com cada item da array "data"
//innerHTML = adiciona à uLcartoes do html o que vem depois do += ou seja, a li
//itemScope e itemType = usados juntos para indicar que o elemento html tem 1 item
// Interpolacao de string `${item.name}` é espaço reservado dentro da string, para inserir outra string do item de valor n name .

//forEach = atrvés da função "item", determina o que vai ocorrer com cada item da array "data"
//innerHTML = adiciona à uLcartoes do html o que vem depois do += ou seja, a li
//itemScope e itemType = usados juntos para indicar que o elemento html tem 1 item
// Interpolacao de string `${item.name}` é espaço reservado dentro da string, para inserir outra string do item de valor n name .