class Form {
  #fields;
  #index;
  constructor(...fileds) {
    this.#fields = fileds;
    this.#index = 0;
  }

  fillResponse(response) {
    const field = this.#getField();
    const filled = field.fillResponse(response);
    if (!filled) {
      return;
    }
    this.#index++;
  }

  isFilled() {
    return this.#index === this.#fields.length;
  }

  getResponses() {
    const responses = {};
    this.#fields.forEach((filed) => {
      const { name, response } = filed.getEntry();
      responses[name] = response;
    })
    return responses;
  }

  #getField() {
    return this.#fields[this.#index];
  }

  getPrompt() {
    return this.#fields[this.#index].getPrompt();
  }
}

exports.Form = Form;
