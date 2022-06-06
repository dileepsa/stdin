const fs = require('fs');
const { InputHandler } = require('./inputHandler.js');
const { questions } = require('./questions.js')

process.stdin.setEncoding('utf-8');

const readInput = (inputHandler) => {
  inputHandler.toString();
  process.stdin.on('data', (chunk) => {
    inputHandler.validate(chunk);
    inputHandler.areQuestionsOver();
    inputHandler.toString();
  });
};

const toJson = (allInputs) => {
  const obj = {
    name: allInputs[0],
    DOB: allInputs[1],
    hobbies: allInputs[2].split(','),
    'ph-no': allInputs[3],
    address: allInputs.slice(4).join('\n')
  }
  fs.writeFileSync('details.json', JSON.stringify(obj), 'utf8');
}

const main = () => {
  const inputHandler = new InputHandler(toJson, questions);
  readInput(inputHandler);
}

main();
