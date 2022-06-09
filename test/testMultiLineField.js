const { MultiLineField } = require("../src/multiLineField");
const { Form } = require('../src/form.js');
const assert = require("assert");

describe('MultiLineField', () => {
  it('Should give single prompt', () => {
    const address = new MultiLineField('address', ['Enter address-1']);
    const form = new Form(address);
    const actual = form.getPrompt();
    const expected = 'Enter address-1'
    assert.strictEqual(actual, expected);
  });

  it('Should give two prompts', () => {
    const address = new MultiLineField('address', ['Enter address-1', 'Enter address-2']);
    let actual = address.getPrompt();
    let expected = 'Enter address-1'
    assert.strictEqual(actual, expected);
    address.fillResponse('ram');
    actual = address.getPrompt();
    expected = 'Enter address-2'
    assert.strictEqual(actual, expected);
  });

  it('Should give entry of multiple responses', () => {
    const address = new MultiLineField('address', ['Enter address-1', 'Enter address-2']);
    address.fillResponse('ram');
    address.fillResponse('mandir');
    const actual = address.getEntry();
    const expected = { name: 'address', response: ['ram', 'mandir'] };
    assert.deepStrictEqual(actual, expected);
  });

  it('Should return when all responses are filled', () => {
    const address = new MultiLineField('address', ['Enter address-1']);
    address.fillResponse('ram');
    const actual = address.isFilled()
    assert.strictEqual(actual, true);
  });
});
