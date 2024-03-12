import { filterBy, orderdata, mapData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';
let mappedData = mapData(fakeData);
console.log(mappedData);


/*TESTE DE ORDENÇÃO*/

describe('orderdata', () => {
  const testeOrdenacao = orderdata(fakeData, 'safetyLevel','asc');
  console.log(testeOrdenacao)
  expect(testeOrdenacao[0].facts.safetyLevel).toBe(4);
  expect(testeOrdenacao[1].facts.safetyLevel).toBe(4);
  expect(testeOrdenacao[2].facts.safetyLevel).toBe(4);
  expect(testeOrdenacao[3].facts.safetyLevel).toBe(5);
  expect(testeOrdenacao[4].facts.safetyLevel).toBe(5);
});

describe('orderdata', () => {
  const testeOrdenacao = orderdata(fakeData, 'safetyLevel','des');
  console.log(testeOrdenacao)
  expect(testeOrdenacao[0].facts.safetyLevel).toBe(5);
  expect(testeOrdenacao[1].facts.safetyLevel).toBe(5);
  expect(testeOrdenacao[2].facts.safetyLevel).toBe(4);
  expect(testeOrdenacao[3].facts.safetyLevel).toBe(4);
  expect(testeOrdenacao[4].facts.safetyLevel).toBe(4);
});

/*TESTE DE FILTRAGEM*/
describe('Teste do filterBy', () => {

  it('Deve retornar 2 elementos correspondentes ao continente Ásia', () => {

    const testeFiltro = filterBy(mappedData, 'choosenContinent', 'Ásia')
    expect(testeFiltro.length).toEqual(2);
  });
});
/*
No arquivo de teste data.js, copie apenas 4 elemetos do array data, garatirno pelo emnos 2 paises do mesmo continente p teste passar no "toBe"
1- Importa da dataFuntion método que quer testar (Filterby)
2- Em "it" escreve frase a aparecer em caso de erro e em seguida a função
3 - Const testeFiltro, deve usar parametros semelhantes ao do dataset
3- expect - o que espero que a função retorne. No caso 2 cards
*/

/*describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});

*/
