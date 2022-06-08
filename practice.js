const fs = require('fs');
const { Form } = require('./form.js');
const { Field } = require('./questions.js')
const { isValidDOB, isValidName, isValidPhNo, isNotEmpty } = require('./validations.js');

const formatHobbies = (hobbies) => {
  return hobbies.split(',');
};

process.stdin.setEncoding('utf-8');

const readInput = (form) => {
  form.displayQuestion();
  process.stdin.on('data', (chunk) => {
    form.validate(chunk);

    if (form.areQuestionsOver()) {
      process.stdin.emit('close');
    };

    form.displayQuestion();
  });

  process.stdin.on('close', () => {
    const allInputs = form.getAllInputs();
    fs.writeFileSync('details.json', JSON.stringify(allInputs), 'utf8');
    process.exit(0);
  })
};

const createForm = () => {
  const nameField = new Field('name', 'Enter name', isValidName);
  const dobField = new Field('dob', 'Enter dob', isValidDOB);
  const hobbiesField = new Field('hobbies', 'Enter hobbies', isNotEmpty, formatHobbies);
  const phnoField = new Field('ph-no', 'Enter ph-no', isValidPhNo);
  return new Form(nameField, dobField, hobbiesField, phnoField);
};

const main = () => {
  const form = createForm();
  readInput(form);
}

main();
