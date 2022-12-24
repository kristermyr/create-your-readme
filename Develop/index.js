// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Type in your bio:',
      name: 'bio',
    },
    {
      type: 'url',
      message: 'Enter your Linkdn url',
      name: 'Linkdn',
    },
    {
        type: 'url',
        message: 'Enter your Github url',
        name: 'Github',
      },
  ])
  .then((response) =>
    fs.writeFile('index.html', response.name,(error,data) =>
    error ? console.error(error) : console.log(data)
    )
  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
