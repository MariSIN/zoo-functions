const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  }
  const idAnimals = [];
  for (let i = 0; i < ids.length; i += 1) {
    idAnimals.push(data.species.find((species) => species.id === ids[i]));
  }
  return idAnimals;
}

module.exports = getSpeciesByIds;
