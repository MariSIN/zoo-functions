const data = require('../data/zoo_data');

const entrants = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];

function countEntrants(entrants) {
  const child = entrants.filter((ages) => ages.age < 18).length;
  const adult = entrants.filter((ages) => ages.age >= 18 && ages.age < 50).length;
  const senior = entrants.filter((ages) => ages.age >= 50).length;
  return {child: child, adult: adult, senior: senior};
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || entrants === {}) {
    return 0;
  }
  if (entrants.adult) {
    const getEntrantsAdutls = entrants.filter((ages) => ages.age >= 18 && ages.age < 50).length;
    const price = data.prices.filter((price) => price.adult)
    console.log(price)
  } 
}
console.log(calculateEntry(entrants));
console.log(countEntrants(entrants));

module.exports = { calculateEntry, countEntrants };
