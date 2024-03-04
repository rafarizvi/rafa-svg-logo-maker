const fs = require('fs');
const inquirer = require('inquirer');
const SvgLogo = require('./logo'); 

inquirer
  .prompt([{
    type: 'input',
    name: 'text',
    message: 'Enter a logo text containing up to 3 characters:'
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

    fs.writeFile(`${response.text}.svg`, logoMaker, (err) =>
      err ? console.log(err) : console.log('Successfully created logo.svg!')
    );
  });
  