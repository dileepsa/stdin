class MultiLineField {
  #name;
  #prompts;
  #responses;
  #validator;
  #formatter;
  #index;
  constructor(name, prompts, validator = _ => true, formatter = x => x) {
    this.#name = name;
    this.#prompts = prompts;
    this.#validator = validator;
    this.#formatter = formatter;
    this.#responses = [];
    this.#index = 0;
  }

  fillResponse(response) {
    const valid = this.#validator(response);
    if (!valid) {
      return false;
    }
    this.#responses.push(response);
    this.#index++;
    return true;
  }

  getPrompt() {
    return this.#prompts[this.#index];
  }

  getEntry() {
    return { name: this.#name, response: this.#formatter(this.#responses) };
  }

  isFilled() {
    return this.#responses.length === this.#prompts.length;
  }
}

module.exports = { MultiLineField }
