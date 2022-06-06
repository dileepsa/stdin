process.stdin.setEncoding('utf-8');

const readInput = (cb) => {
  let input = '';
  let index = 0;
  process.stdin.on('data', (chunk) => {
    input += chunk;
    index++;
    if (index === 3) {
      console.log(cb(input.split('\n')));
      process.exit(0);
    }
  })
};

const toJson = (allInputs) => {
  return {
    name: allInputs[0],
    DOB: allInputs[1],
    hobbies: allInputs[2].split(',')
  }
}

readInput(toJson);
