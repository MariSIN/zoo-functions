const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const informations = () => employees.map((a) => ({
  id: a.id,
  fullName: `${a.firstName} ${a.lastName}`,
  species: a.responsibleFor.map((r) => species.find((s) => s.id === r).name),
  locations: a.responsibleFor.map((r) => species.find((s) => s.id === r).location),
}));

function getEmployeesCoverage(object) {
  if (object === undefined) {
    return informations();
  }
  const verify = employees.some((employ) =>
    employ.firstName === object.name
|| employ.lastName === object.name || employ.id === object.id);
  if (!verify) {
    throw new Error('Informações inválidas');
  }
  const emp = employees.find((employee) => employee.firstName === object.name
  || employee.lastName === object.name || employee.id === object.id);
  const obj = {
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: emp.responsibleFor.map((r) => species.find((s) => s.id === r).name),
    locations: emp.responsibleFor.map((r) => species.find((s) => s.id === r).location),
  };
  return obj;
}
module.exports = getEmployeesCoverage;
