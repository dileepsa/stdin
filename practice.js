const fs = require('fs');

process.stdin.setEncoding('utf-8');

const readInput = (cb) => {
  let input = '';
  let index = 0;
  const details = ['name', 'DOB', 'hobbies'];
  process.stdin.on('data', (chunk) => {
    console.log('Please enter your', details[index]);
    input += chunk;
    index++;
    if (index === 4) {
      console.log(cb(input.split('\n')));
      process.exit(0);
    }
  })
};

const toJson = (allInputs) => {
  const obj = {
    name: allInputs[0],
    DOB: allInputs[1],
    hobbies: allInputs[2].split(',')
  }
  fs.writeFileSync('details.json', JSON.stringify(obj), 'utf8');
}

readInput(toJson);
