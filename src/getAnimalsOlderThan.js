const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const ageAndAnimals = species
    .find((name) => name.name === animal).residents
    .every((idade) => idade.age >= age);

  return ageAndAnimals;
};

module.exports = getAnimalsOlderThan;
