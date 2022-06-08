const fs = require('fs');
const { Form } = require('./form.js');
const { Field } = require('./field.js')
const { MultiLineField } = require('./multiLineField.js');
const { isValidDOB, isValidName, isValidPhNo, isNotEmpty } = require('./validations.js');

const formatHobbies = hobbies => hobbies.split(',');
const formatAddress = address => address.join('\n');
const alwaysTrue = _ => true;

process.stdin.setEncoding('utf-8');

const registerResponse = (form, response, logger) => {
  form.fillResponse(response);
  if (form.isFilled()) {
    const responses = form.getResponses();
    fs.writeFileSync('details.json', JSON.stringify(responses), 'utf8');
    process.stdin.destroy(0);
    return;
  };

  logger(form.getPrompt());
};

const getLines = content => content.trim().split('\n');

const readResponse = (form, logger) => {
  console.log(form.getPrompt());
  process.stdin.on('data', (response) => {
    const responses = getLines(response);
    responses.forEach((response) => {
      registerResponse(form, response.trim(), logger);
    });
  });
};

const createForm = () => {
  const nameField = new Field('name', 'Enter name', isValidName);
  const dobField = new Field('dob', 'Enter dob', isValidDOB);
  const hobbiesField = new Field('hobbies', 'Enter hobbies', isNotEmpty, formatHobbies);
  const phnoField = new Field('ph-no', 'Enter ph-no', isValidPhNo);
  const address = new MultiLineField('address', ['Enter address-1', 'Enter address-2'], alwaysTrue, formatAddress);
  return new Form(nameField, dobField, hobbiesField, phnoField, address);
};

module.exports = { registerResponse, createForm, readResponse }
