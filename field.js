class Field {
  constructor(name, prompt, validator = _ => true, formatter = x => x) {
    this.name = name;
    this.prompt = prompt;
    this.validator = validator;
    this.formatter = formatter;
  }

  fillResponse(response) {
    this.response = response;
  }
}

exports.Field = Field;
