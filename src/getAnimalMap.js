const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const local = {
  NE: species.filter((a) => a.location === 'NE').map((a) => a.name),
  NW: species.filter((a) => a.location === 'NW').map((a) => a.name),
  SE: species.filter((a) => a.location === 'SE').map((a) => a.name),
  SW: species.filter((a) => a.location === 'SW').map((a) => a.name),
};

const animals = (filter) =>
  species
    .filter((a) => a.location === filter)
    .reduce((acc, curr) => {
      acc[curr.name] = curr.residents.map((names) => names.name);
      return acc;
    }, []);

const objSpecies = (ani, outro = false) => {
  const arr = [];
  Object.keys(ani).forEach((e) => {
    const obj = {};
    if (outro) {
      obj[e] = ani[e].sort();
    } else {
      obj[e] = ani[e];
    }
    arr.push(obj);
  });
  return arr;
};

const newObj = {
  NE: objSpecies(animals('NE')),
  NW: objSpecies(animals('NW')),
  SE: objSpecies(animals('SE')),
  SW: objSpecies(animals('SW')),
};

const newObjSorted = {
  NE: objSpecies(animals('NE'), true),
  NW: objSpecies(animals('NW'), true),
  SE: objSpecies(animals('SE'), true),
  SW: objSpecies(animals('SW'), true),
};

const filterBySex = (nome, sex) => species
  .find((ani) => ani.name === nome)
  .residents.filter((fem) => fem.sex === sex)
  .map((name) => name.name);

const sexo = {
  NE: species.filter((a) => a.location === 'NE').map((a) => a.name),
  NW: species.filter((a) => a.location === 'NW').map((a) => a.name),
  SE: species.filter((a) => a.location === 'SE').map((a) => a.name),
  SW: species.filter((a) => a.location === 'SW').map((a) => a.name),
};

const findAnimalBySex = (sex, locale, sort = false) => {
  const sexArr = [];
  locale.forEach((e) => {
    let sexlocale = {};
    if (sort) {
      sexlocale = { [e]: filterBySex(e, sex).sort() };
    } else {
      sexlocale = { [e]: filterBySex(e, sex) };
    }
    sexArr.push(sexlocale);
  });
  return sexArr;
};

const recebeSex = (sex) => {
  const aniSex = {
    NE: findAnimalBySex(sex, sexo.NE),
    NW: findAnimalBySex(sex, sexo.NW),
    SE: findAnimalBySex(sex, sexo.SE),
    SW: findAnimalBySex(sex, sexo.SW) };
  return aniSex;
};

const recebeSexSorted = (sex) => {
  const aniSex = {
    NE: findAnimalBySex(sex, sexo.NE, true),
    NW: findAnimalBySex(sex, sexo.NW, true),
    SE: findAnimalBySex(sex, sexo.SE, true),
    SW: findAnimalBySex(sex, sexo.SW, true) };
  return aniSex;
};

function getAnimalMap({ includeNames, sorted, sex } = {}) {
  if (!includeNames) return local;
  if (sex && sorted) return recebeSexSorted(sex);
  if (sex) return recebeSex(sex);
  if (sorted) return newObjSorted;
  if (includeNames) return newObj;
}
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }).NE);
module.exports = getAnimalMap;
