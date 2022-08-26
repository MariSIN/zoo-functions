const data = require("../data/zoo_data");

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  let idAnimals = [];
  for(let i = 0; i < ids.length; i += 1) {
   idAnimals.push( data.species.find((species) => {
    return species.id === ids[i];
  }));
  }
  return idAnimals;
}
console.log(
  getSpeciesByIds(
    "0938aa23-f153-4937-9f88-4858b24d6bce",
    "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
    'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5'
  )
);

module.exports = getSpeciesByIds;
