class InputHandler {
  constructor(cb, questions) {
    this.cb = cb;
    this.questions = questions;
    this.allInputs = '';
    this.index = 0;
  }

  addInput(data) {
    this.allInputs += data;
    this.index++;
  }

  toString() {
    console.log(this.questions[this.index].description);
  }

  areQuestionsOver() {
    if (this.index === this.questions.length) {
      this.cb(this.allInputs.split('\n'));
      process.exit(0);
    }
  }

  validate(input) {
    const result = this.questions[this.index].validator(input);
    if (result) {
      this.addInput(input);
    }
  };

}

exports.InputHandler = InputHandler;
