// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};


/*FILTRAGEM */
export const filterBy = (data, filterBy, value) => {
  const resultadoFiltragem = data.filter((elemento) => {
    return elemento.facts[filterBy] === value;
  })
  return resultadoFiltragem;
};
/*???? Linha 14 criei declaração de elemento */
/*???? Ver se entendi linha 15 */

/* ORDENAÇÃO
const orderdata = (data, sort, ordenacao) => { 
const ordenar () => {
  if (ordenacao === "asc") {
      return data.sort((a, b) => { return a.name.localeCompare(b.name) })
  } 
  else {
      return data.sort((a, b) => { return b.name.localeCompare(a.name) })
  }
}};
 */


