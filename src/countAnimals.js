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
    const ani = species.find((name) => species.name === name.specie).residents;
    const sex = ani.filter((sexo) => sexo.sex === animal.sex).length;
    return sex;
  }
  if (animal.specie) {
    const quant = species.find((count) => species.name === count.specie).residents.length;
    return quant;
  }
}
countAnimals();
module.exports = countAnimals;
