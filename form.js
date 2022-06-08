class Form {
  constructor(...fileds) {
    this.fields = fileds;
    this.index = 0;
  }

  fillResponse(response) {
    const field = this.#getField();
    field.fillResponse(response);
    this.index++;
  }

  isFilled() {
    return this.index === this.fields.length;
  }

  getResponses() {
    const responses = {};
    this.fields.forEach((filed) => {
      const { name, response } = filed.getEntry();
      responses[name] = response;
    })
    return responses;
  }

  #getField() {
    return this.fields[this.index];
  }

  validate(input) {
    const field = this.#getField();
    const valid = field.validator(input);
    if (!valid) {
      return;
    }

    const formattedInput = field.formatter(input.trim());
    this.fillResponse(formattedInput);
  };

  getPrompt() {
    return this.fields[this.index].getPrompt();
  }
}

exports.Form = Form;
