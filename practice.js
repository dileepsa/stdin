const fs = require('fs');
const { Form } = require('./inputHandler.js');
const { questions } = require('./questions.js')

process.stdin.setEncoding('utf-8');

const readInput = (form) => {
  form.displayQuestion();
  process.stdin.on('data', (chunk) => {
    form.validate(chunk);
    form.areQuestionsOver();
    form.displayQuestion();
  });
};

const toJson = (allInputs) => {
  const obj = {
    name: allInputs[0],
    DOB: allInputs[1],
    hobbies: allInputs[2],
    'ph-no': allInputs[3],
    address: allInputs.slice(4).join('\n')
  }
  fs.writeFileSync('details.json', JSON.stringify(obj), 'utf8');
}

const main = () => {
  const form = new Form(toJson, questions);
  readInput(form);
}

main();
