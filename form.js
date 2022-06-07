class Form {
  constructor(questions) {
    this.questions = questions;
    this.allInputs = [];
    this.index = 0;
  }

  addInput(data) {
    this.allInputs.push(data);
    this.index++;
  }

  areQuestionsOver() {
    return this.index === this.questions.length;
  }

  getAllInputs() {
    return this.allInputs;
  }

  validate(input) {
    const valid = this.questions[this.index].validator(input);
    if (!valid) {
      return;
    }
    const formattedInput = this.questions[this.index].formatter(input.trim());
    this.addInput(formattedInput);
  };

  displayQuestion() {
    console.log(this.questions[this.index].description);
  }

}

exports.Form = Form;
