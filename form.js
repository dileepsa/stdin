class Form {
  constructor(...fileds) {
    this.fields = fileds;
    this.responses = {};
    this.index = 0;
  }

  addInput(data) {
    const question = this.fields[this.index];
    this.responses[question.name] = data;
    console.log(this.responses);
    this.index++;
  }

  areQuestionsOver() {
    return this.index === this.fields.length;
  }

  getAllInputs() {
    return this.responses;
  }

  validate(input) {
    const question = this.fields[this.index];
    const valid = question.validator(input);
    if (!valid) {
      return;
    }

    const formattedInput = question.formatter(input.trim());
    this.addInput(formattedInput);
  };

  displayQuestion() {
    console.log(this.fields[this.index].prompt);
  }

}

exports.Form = Form;
