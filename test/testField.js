const assert = require("assert");
const { Field } = require("../src/field");

describe('Field', () => {
  it('Should give the prompt', () => {
    const nameField = new Field('name', 'Enter name');
    const actual = nameField.getPrompt();
    const expected = 'Enter name';
    assert.strictEqual(actual, expected);
  });

  it('Should give an entry with name and response', () => {
    const nameField = new Field('name', 'Enter name');
    nameField.fillResponse('jhondon');
    const actual = nameField.getEntry();
    assert.deepStrictEqual(actual, { name: 'name', response: 'jhondon' });
  });

  it('Should return false when the field is not filled', () => {
    const nameField = new Field('name', 'Enter name');
    const actual = nameField.isFilled();
    assert.strictEqual(actual, false);
  });

  it('Should fill the valid response', () => {
    const nameField = new Field('name', 'Enter name', (name) => name.length >= 5);
    const actual = nameField.fillResponse('jhons');
    assert.strict(actual, true);
  });

  it('Should not fill the invalid response', () => {
    const nameField = new Field('name', 'Enter name', (name) => name.length >= 5);
    const actual = nameField.fillResponse('jho');
    assert.strictEqual(actual, false);
  });
});
