const { isValidDOB, isValidName, isValidPhNo, isNotEmpty } = require('./validations.js');

const identity = (x) => x;

const formatAddress = (address2 = '', address1 = '') => {
  return `${address1}\n${address2}`;
};

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
    validator: isNotEmpty,
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
    description: 'Enter your address-1',
    validator: isNotEmpty,
    formatter: identity
  },
  {
    name: 'address',
    description: 'Enter your address-2',
    validator: isNotEmpty,
    formatter: formatAddress
  }
]

exports.questions = questions;
