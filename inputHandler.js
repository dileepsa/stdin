class InputHandler {
  constructor(cb) {
    this.cb = cb;
    this.allInputs = '';
    this.index = 0;
    this.details = ['name', 'dob', 'hobbies'];
  }

  addInput(data) {
    this.allInputs += data;
    this.index++;
  }

  log() {
    console.log('Please enter your', this.details[this.index]);
  }

  invokeCallBack() {
    this.cb(this.allInputs.split('\n'));
  }

  decideInvokation() {
    if (this.index === 3) {
      this.invokeCallBack();
      process.exit(0);
    }
  }

}

exports.InputHandler = InputHandler;
