// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./markDown')
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [

    {
      type: 'input',
      message: 'What is your project title?',
      name: 'ProjectTitle',
    },
    {
      type: 'input',
      message: 'how do you install your app?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'How do you use your app?',
      name: 'Usage',
    },
    {
        type: 'input',
        message: 'Do you have any credits to add?',
        name: 'Credits',
      },
      {
        type: 'input',
        message: 'Which license does your project have?',
        name: 'License',
      },
      {
        type: 'url',
        message: 'What is your Github project link?',
        name: 'Github',
      },
    ];
 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName,data, function(err) {
    console.log(filename)
    console.log(data)
    if(err) {
      return console.log(err)
    } else {
      console.log("Success! Your Readme file has been created.")
    }
  })
}


// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(data) {
      writeToFile('README.md', markDown(data));
      console.log(data)
    })
}

// Function call to initialize app
init();
