const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const objeto = {
    Tuesday: { open: 8, close: 6 },
    Wednesday: { open: 8, close: 6 },
    Thursday: { open: 10, close: 8 },
    Friday: { open: 10, close: 8 },
    Saturday: { open: 8, close: 10 },
    Sunday: { open: 8, close: 8 },
    Monday: { open: 0, close: 0 },
  };
  it(`Não passado argumentos. Deverá retornar o objeto: ${objeto}`, () => {
    const actual = getOpeningHours();
    const expected = objeto;
    expect(actual).toStrictEqual(expected);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string "The zoo is closed"', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toStrictEqual(expected);
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string "The zoo is open"', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toStrictEqual(expected);
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string "The zoo is closed"', () => {
    const actual = getOpeningHours('Wednesday', '09:00-PM');
    const expected = 'The zoo is closed';
    expect(actual).toStrictEqual(expected);
  });
});
