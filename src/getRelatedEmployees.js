const data = require('../data/zoo_data');

function isManager(id) {
  const managers = data.employees.find((manager) => manager.id === id).managers.length < 2;
  return managers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employees = data.employees.filter((employee) => employee.managers.includes(managerId));

  const arrayWithNames = employees.map((employee) => `${employee.firstName} ${employee.lastName}`);

  return arrayWithNames;
}

module.exports = { isManager, getRelatedEmployees };
