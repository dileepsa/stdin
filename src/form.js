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
    if (field.isFilled()) {
      this.#index++;
    }
  }

  isFilled() {
    return this.#fields.every((field) => field.isFilled());
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
    return this.#getField().getPrompt();
  }
}

module.exports = { Form }
