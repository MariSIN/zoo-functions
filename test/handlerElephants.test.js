const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('recebendo o argumento "count" retorna a quantidade de elefantes', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toStrictEqual(expected);
  });
  it('recebendo o argumento "names" retorna um array com a relação dos nomes de todos os elefantes', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toStrictEqual(expected);
  });
  it('recebendo o argumento "averageAge" retorna a média de idade dos elefantes', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toStrictEqual(expected);
  });
  it('recebendo o argumento "location" retorna a localização dos elefantes dentro do Zoológico', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toStrictEqual(expected);
  });
  it('recebendo o argumento "popularity" retorna a popularidade dos elefantes', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toStrictEqual(expected);
  });
  it('recebendo o argumento "availability" retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toStrictEqual(expected);
  });
  it('não passado argumentos a função retorna undefined', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toStrictEqual(expected);
  });
});
