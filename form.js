class Form {
  constructor(cb, questions) {
    this.cb = cb;
    this.questions = questions;
    this.allInputs = [];
    this.index = 0;
  }

  addInput(data) {
    this.allInputs.push(data);
    console.log(this.allInputs);
    this.index++;
  }

  areQuestionsOver() {
    if (this.index === this.questions.length) {
      this.cb(this.allInputs);
      process.exit(0);
    }
  }

  validate(input) {
    const result = this.questions[this.index].validator(input);
    if (!result) {
      return;
    }
    const formattedInput = this.questions[this.index].formatter(input.trim())
    this.addInput(formattedInput);
  };

  displayQuestion() {
    console.log(this.questions[this.index].description);
  }

}

exports.Form = Form;
