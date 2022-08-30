const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((e) => e.id === id);
  let age = 0;
  const animals = data.species.find((animal) => animal.id === employee.responsibleFor[0]).residents;
  for (let i = 0; i < animals.length; i += 1) {
    const animal = animals[i];
    if (animal.age > age) {
      age = animal.age;
    }
  }
  const result = animals.find((a) => a.age === age);
  const arr = [];
  arr.push(result.name);
  arr.push(result.sex);
  arr.push(result.age);
  console.log(result);
  return arr;
}
getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
