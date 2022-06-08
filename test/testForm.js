const assert = require("assert");
const { Field } = require("../src/field");
const { Form } = require("../src/form");

describe('Form', () => {
  it('Should give the prompt of name field', () => {
    const nameField = new Field('name', 'Enter name');
    const form = new Form(nameField);
    const actual = form.getPrompt();
    const expected = 'Enter name';
    assert.strictEqual(actual, expected);
  });

  it('Should fill the field for valid response', () => {
    const nameField = new Field('name', 'Enter name', name => name.length >= 5);
    const form = new Form(nameField);
    form.fillResponse('jhons');
    const actual = form.isFilled();
    assert.strictEqual(actual, true);
  });

  it('Should give all the responses', () => {
    const nameField = new Field('name', 'Enter name', name => name.length >= 5);
    const dobField = new Field('dob', 'Enter dob');
    const form = new Form(nameField, dobField);
    form.fillResponse('jhons');
    form.fillResponse('2022-12-20');
    const actual = form.getResponses();
    assert.deepStrictEqual(actual, { name: 'jhons', dob: '2022-12-20' });
  });

  it('Should return true when all fields are filled', () => {
    const nameField = new Field('name', 'Enter name', name => name.length >= 5);
    const dobField = new Field('dob', 'Enter dob');
    const form = new Form(nameField, dobField);
    form.fillResponse('jhons');
    form.fillResponse('2022-12-20');
    const actual = form.isFilled();
    assert.deepStrictEqual(actual, true);
  });
});