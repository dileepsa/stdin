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
  fs.writeFileSync('details.json', JSON.stringify(obj), 'utf8');
}

const readInput = (form) => {
  form.displayQuestion();
  process.stdin.on('data', (chunk) => {
    form.validate(chunk);
    if (form.areQuestionsOver()) {
      const allInputs = form.getAllInputs();
      toJson(allInputs);
      process.exit(0);
    };
    form.displayQuestion();
  });
};

const main = () => {
  const form = new Form(questions);
  readInput(form);
}

main();
