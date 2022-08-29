const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const sum = species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});
  if (animal === undefined) {
    return sum;
  }
  if (animal.specie && animal.sex) {
    const ani = species.find((name) => name.name === animal.specie).residents;
    const sex = ani.filter((sexo) => sexo.sex === animal.sex).length;
    return sex;
  }
  if (animal.specie) {
    const quant = species.find((count) => count.name === animal.specie).residents.length;
    return quant;
  }
}

module.exports = countAnimals;
