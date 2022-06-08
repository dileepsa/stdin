class Field {
  #name;
  #prompt;
  #response;
  #validator;
  #formatter;
  constructor(name, prompt, validator = _ => true, formatter = x => x) {
    this.#name = name;
    this.#prompt = prompt;
    this.#validator = validator;
    this.#formatter = formatter;
    this.#response = null;
  }

  fillResponse(response) {
    const valid = this.#validator(response);
    if (!valid) {
      return false;
    }
    this.#response = response;
    return true;
  }

  getPrompt() {
    return this.#prompt;
  }

  getEntry() {
    return { name: this.#name, response: this.#formatter(this.#response) };
  }

  isFilled() {
    return this.#response !== null;
  }
}

exports.Field = Field;
