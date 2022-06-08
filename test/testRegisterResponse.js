const assert = require("assert");
const { Field } = require("../src/field");
const { registerResponse } = require("../src/fillForm");
const { Form } = require("../src/form");

const identity = x => x;

describe('Register Response', () => {
  it('Should register a valid response', () => {
    const nameField = new Field('name', '');
    const form = new Form(nameField);
    registerResponse(form, 'jhons', identity);
    const actual = form.getResponses();
    const expected = { name: 'jhons' }
    assert.deepStrictEqual(actual, expected);
  });

  it('Should not fill the invalid response', () => {
    const nameField = new Field('name', 'Enter name', name => name.length >= 5);
    const form = new Form(nameField);
    const display = [];

    const logger = text => display.push(text);
    registerResponse(form, 'jhon', logger);
    assert.deepStrictEqual(display, ['Enter name']);
  });

  it('Should display the current prompt', () => {
    const nameField = new Field('name', 'Enter name');
    const dobField = new Field('dob', 'Enter dob');
    const form = new Form(nameField, dobField);
    const display = [];

    const logger = text => display.push(text);
    registerResponse(form, 'jhons', logger);
    assert.deepStrictEqual(display, ['Enter dob']);
  });
});