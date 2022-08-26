const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const employees = data.employees
    .find((e) => e.firstName === employeeName || e.lastName === employeeName);
  return employees;
}

module.exports = getEmployeeByName;
