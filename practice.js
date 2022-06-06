const fs = require('fs');
const { InputHandler } = require('./inputHandler.js');

process.stdin.setEncoding('utf-8');

const readInput = (inputHandler) => {
  inputHandler.log();
  process.stdin.on('data', (chunk) => {
    inputHandler.addInput(chunk);
    inputHandler.decideInvokation();
    inputHandler.log();
  });
};

const toJson = (allInputs) => {
  const obj = {
    name: allInputs[0],
    DOB: allInputs[1],
    hobbies: allInputs[2].split(',')
  }
  fs.writeFileSync('details.json', JSON.stringify(obj), 'utf8');
}

const main = () => {
  const inputHandler = new InputHandler(toJson);
  readInput(inputHandler);
}

main();
