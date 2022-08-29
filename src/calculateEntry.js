const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((ages) => ages.age < 18).length;
  const adult = entrants.filter((ages) => ages.age >= 18 && ages.age < 50).length;
  const senior = entrants.filter((ages) => ages.age >= 50).length;
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  let value = 0;
  value += prices.adult * adult;
  value += prices.senior * senior;
  value += prices.child * child;
  return value;
}

module.exports = { calculateEntry, countEntrants };
