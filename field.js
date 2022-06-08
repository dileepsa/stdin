class Field {
  #name;
  #prompt;
  #response;
  constructor(name, prompt, validator = _ => true, formatter = x => x) {
    this.#name = name;
    this.#prompt = prompt;
    this.validator = validator;
    this.formatter = formatter;
  }

  fillResponse(response) {
    this.#response = response;
  }

  getPrompt() {
    return this.#prompt;
  }

  getEntry() {
    return { name: this.#name, response: this.#response };
  }
}

exports.Field = Field;
