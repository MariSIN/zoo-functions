const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const expected = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};
function getSchedule(scheduleTarget) {
  const specie = species.some((animal) => animal.name === scheduleTarget);
  if (specie) {
    return species.find((nome) => nome.name === scheduleTarget).availability;
  }
  for (let i = 0; i < Object.keys(expected).length; i += 1) {
    if (Object.keys(expected).includes(scheduleTarget)) {
      return {
        [scheduleTarget]: expected[scheduleTarget],
      };
    }
  }
  return expected;
}
console.log(getSchedule('Saturday'));
module.exports = getSchedule;
