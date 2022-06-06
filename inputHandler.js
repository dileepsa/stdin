const { isValidAddress, isValidDOB, isValidName, isValidPhNo, isValidHobbies } = require('./validations.js');

class InputHandler {
  constructor(cb) {
    this.cb = cb;
    this.allInputs = '';
    this.index = 0;
    this.validations = [isValidName, isValidDOB, isValidHobbies, isValidPhNo, isValidAddress, isValidAddress];
    this.details = ['name', 'dob', 'hobbies', 'ph-no', 'address-1', 'address-2'];
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
    if (this.index === this.validations.length) {
      this.invokeCallBack();
      process.exit(0);
    }
  }

  validate(input) {
    const result = this.validations[this.index](input);
    if (result) {
      this.addInput(input);
    }
  };

}


exports.InputHandler = InputHandler;
