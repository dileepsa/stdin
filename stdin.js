process.stdin.setEncoding('utf-8');

const readAllInputs = (cb) => {
  let input = '';
  process.stdin.on('data', (chunk) => {
    const lines = chunk.split('\n').slice(0, -1);
    lines.forEach(cb);
    input = lines.slice(-1)[0];
  });

  process.stdin.on('end', () => {
    cb(input);
  })

  process.stdin.on('close', () => {
    console.log('closed');
  })
};

let count = 1;

readAllInputs(
  (data) => {
    console.log(data.length)
    count++;
    if (count > 5) {
      process.exit();
    }
  });

// class ReadInputs {
//   constructor(cb) {
//     this.cb = cb;
//     this.allInputs = '';
//   }

//   addInput(input) {
//     this.allInputs += input;
//   }

//   invokeCallBack() {
//     this.cb(this.allInputs);
//   }
// }

// const main = () => {
//   const inputs = new ReadInputs((data) => console.log(data.length));
//   process.stdin.on('data', chunk => {
//     inputs.addInput(chunk);
//     inputs.invokeCallBack();
//   })
//   process.stdin.on('end', () => {
//     inputs.invokeCallBack();
//   })
// }

// main();
