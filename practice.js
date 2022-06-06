const fs = require('fs');

process.stdin.setEncoding('utf-8');

const readInput = (cb) => {
  let input = '';
  let index = 0;
  const details = ['name', 'DOB', 'hobbies'];
  console.log('Please enter your', details[index]);
  process.stdin.on('data', (chunk) => {
    index++;
    input += chunk;
    if (index === 3) {
      cb(input.split('\n'));
      process.exit(0);
    }
    console.log('Please enter your', details[index]);
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
