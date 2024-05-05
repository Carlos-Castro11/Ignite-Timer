/* eslint-disable no-undef */
module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "folder",
        message: "What is your component folder?",
      },
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/{{folder}}/{{pascalCase name}}/index.tsx",
        templateFile: "templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "../src/{{folder}}/{{pascalCase name}}/styles.ts",
        templateFile: "templates/styles.ts.hbs",
      },
    ],
  });
};
