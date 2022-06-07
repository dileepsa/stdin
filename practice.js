const fs = require('fs');
const { Form } = require('./form.js');
const { questions } = require('./questions.js')

process.stdin.setEncoding('utf-8');

const toJson = (allInputs) => {
  const obj = {
    name: allInputs[0],
    DOB: allInputs[1],
    hobbies: allInputs[2],
    'ph-no': allInputs[3],
    address: allInputs.slice(4).join('\n')
  }
  return obj;
};

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
    const details = toJson(allInputs);
    fs.writeFileSync('details.json', JSON.stringify(details), 'utf8');
    process.exit(0);
  })
};

const main = () => {
  const form = new Form(questions);
  readInput(form);
}

main();
