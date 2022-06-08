const fs = require('fs');
const { Form } = require('./form.js');
const { questions } = require('./questions.js')

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

const main = () => {
  const form = new Form(questions);
  readInput(form);
}

main();
