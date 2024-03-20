// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};


/*FILTRAGEM */
export const filterBy = (data, filterBy, value) => {
  if (value !== 'Todos') {
    const resultadoFiltragem = data.filter((elemento) => {
      return elemento.facts[filterBy] === value;
    })
    return resultadoFiltragem;
  }
  else {
    return data
  }
};



/* ORDENAÇÃO*/
export const orderdata = (data, sort, ordem) => {
  if (ordem === "asc") {
    return data.sort((a, b) => { return a.facts.safetyLevel - b.facts.safetyLevel })
  }
  else {
    return data.sort((a, b) => { return b.facts.safetyLevel - a.facts.safetyLevel })
  }
};

//data - conjumto de dados a ser ordenado
//sort - chave usada para ordenação
// ordem - diz a direção: recebe valor do target (na main) que corresponde ao campo escolhido no html como ascendente ou descendente 
//localeCompare é comparacao de texto 



/* SINTETIZA INFO DE DATA */
export const mapData = (data) => {
  return data.map((pais) => {
    return {
      id: pais.id,
      name: pais.name,
      imageUrl: pais.imageUrl,
      shortDescription: pais.shortDescription,
      facts: {
        choosenContinent: pais.facts.choosenContinent,
        safetyLevel: pais.facts.safetyLevel,
      }
    }
  })
}
//Método map pega data e sintetiza