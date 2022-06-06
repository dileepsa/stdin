class InputHandler {
  constructor(cb) {
    this.cb = cb;
    this.allInputs = '';
    this.index = 0;
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
    if (this.index === 6) {
      this.invokeCallBack();
      process.exit(0);
    }
  }

  validateName(name) {
    const isDigit = /.*[0-9].*/;
    const result = isDigit.test(name);
    if (!result && name.length > 5) {
      this.addInput(name);
    }
  }

  validateDOB(DOB) {
    const dateFormat = /\d\d\d\d-\d\d-\d\d/;
    if (dateFormat.test(DOB)) {
      this.addInput(DOB);
    }
  }

  validateHobbies(hobbies) {
    if (hobbies) {
      this.addInput(hobbies);
    }
  }

  validatePhNo(number) {
    if (number.trim().length === 10) {
      this.addInput(number);
    }
  }
  validateAddress(address) {
    if (address) {
      this.addInput(address);
    }
  }

  validate(input) {
    if (this.index === 5) {
      this.validateAddress(input);
    }

    if (this.index === 4) {
      this.validateAddress(input);
    }

    if (this.index === 3) {
      this.validatePhNo(input);
    }

    if (this.index === 2) {
      this.validateHobbies(input);
    }

    if (this.index === 1) {
      this.validateDOB(input);
    }

    if (this.index === 0) {
      this.validateName(input);
    }
  };

}


exports.InputHandler = InputHandler;
