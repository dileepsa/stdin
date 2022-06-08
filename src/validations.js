const isValidName = (name) => {
  const isDigit = /.*[0-9].*/.test(name);
  return !isDigit && name.length > 5
};

const isValidDOB = (DOB) => {
  const dateFormat = /\d\d\d\d-\d\d-\d\d/;
  return dateFormat.test(DOB);
};

const isNotEmpty = (text) => text !== '';

const isValidPhNo = (number) => number.trim().length === 10;

module.exports = { isValidName, isValidDOB, isNotEmpty, isValidPhNo };
