const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Recebendo o argumento "count" retorna a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toStrictEqual(expected);
  });
  it('Recebendo o argumento "names" retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toStrictEqual(expected);
  });
  it('Recebendo o argumento "averageAge" retorna a média de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toStrictEqual(expected);
  });
  it('Recebendo o argumento "location" retorna a localização dos elefantes dentro do Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toStrictEqual(expected);
  });
  it('Recebendo o argumento "popularity" retorna a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toStrictEqual(expected);
  });
  it('Recebendo o argumento "availability" retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toStrictEqual(expected);
  });
  it('Não passado argumentos a função retorna undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toStrictEqual(expected);
  });
  it('Passando por argumento um objeto vazio ({}) deve retornar a string "Parâmetro inválido, é necessário uma string"', () => {
    const actual = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toStrictEqual(expected);
  });
  it('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    const actual = handlerElephants('');
    const expected = null;
    expect(actual).toStrictEqual(expected);
  });
});
