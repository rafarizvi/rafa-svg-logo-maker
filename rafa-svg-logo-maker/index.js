const fs = require('fs');
const inquirer = require('inquirer');
const SvgLogo = require('./logo.js'); 

inquirer
  .prompt([{
    type: 'input',
    name: 'text',
    message: 'Enter a logo text containing up to 3 characters:',
    validate: function (input) {
        if (input.length > 3) {
            return 'Logo text should only contain up to 3 characters';
        }
        return true;
    }
  },

  {
    type: 'input',
    name: 'textColor',
    message: 'Type a text color keyword or hex number:'
  },

  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['circle', 'square', 'triangle']
  },

  {
    type: 'input',
    name: 'shapeColor',
    message: 'Type a shape color keyword or hex number:'
  },
])

  .then((response) => {
    const logoMaker = SvgLogo.shape(response);

    fs.writeFile(`./assets/${response.text}.svg`, logoMaker, (err) =>
      err ? console.log(err) : console.log(`Successfully created ${response.text}.svg!`)
    );
  });
