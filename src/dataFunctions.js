// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};


/*FILTRAGEM */
export const filterBy = (data, filterBy, value) => {
if (value !== 'Continente') {  
  const resultadoFiltragem = data.filter((elemento) => {
    return elemento.facts[filterBy] === value;
  })

  return resultadoFiltragem;
}
else{
  return data
}
};
/*???? Linha 14 criei declaração de elemento */
/*???? Ver se entendi linha 15 */



/* ORDENAÇÃO*/
export const orderdata = (data, sort, ordem) => { 
  if (ordem === "asc") {
      return data.sort((a, b) => { return a.facts.safetyLevel - b.facts.safetyLevel })
  } 
  else {
      return data.sort((a, b) => { return b.facts.safetyLevel - a.facts.safetyLevel })
  }
};



/*
ordem - recebe valor do tardget (main) que corresponde ao campo escolhido no html como ascendente ou descendente 
- 
localeCompare é comparacao de texto 
*/
