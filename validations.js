const isValidName = (name) => {
  const isDigit = /.*[0-9].*/.test(name);
  return !isDigit && name.length > 5
};

const isValidDOB = (DOB) => {
  const dateFormat = /\d\d\d\d-\d\d-\d\d/;
  return dateFormat.test(DOB);
};

const isValidHobbies = (hobbies) => {
  return hobbies !== '' ? true : false;
};

const isValidAddress = (address) => {
  return address !== '' ? true : false;
}

const isValidPhNo = (number) => {
  return number.trim().length === 10;
};

exports.isValidName = isValidName;
exports.isValidDOB = isValidDOB;
exports.isValidHobbies = isValidHobbies;
exports.isValidAddress = isValidAddress;
exports.isValidPhNo = isValidPhNo;
