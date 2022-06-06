const { isValidAddress, isValidDOB, isValidName, isValidPhNo, isValidHobbies } = require('./validations.js');

const identity = (x) => x;

const formatHobbies = (hobbies) => {
  return hobbies.split(',');
};

const questions = [
  {
    name: 'name',
    description: 'Enter your name',
    validator: isValidName,
    formatter: identity
  },
  {
    name: 'dob',
    description: 'Enter your DOB',
    validator: isValidDOB,
    formatter: identity
  },
  {
    name: 'hobbies',
    description: 'Enter your hobbies',
    validator: isValidHobbies,
    formatter: formatHobbies
  },
  {
    name: 'ph-no',
    description: 'Enter your ph-no',
    validator: isValidPhNo,
    formatter: identity
  },
  {
    name: 'address',
    description: 'Enter your address',
    validator: isValidAddress,
    formatter: identity
  }
]

exports.questions = questions;
