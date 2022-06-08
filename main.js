const { createForm, readResponse } = require("./src/fillForm");
const { Form } = require("./src/form");

const main = () => {
  const form = createForm();
  readResponse(form, console.log);
}

main();
