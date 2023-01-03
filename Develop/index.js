//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('./utils/generateMarkdown')

//  array of questions for user input
const questions = [

    {
      type: 'input',
      message: 'What is your project title?',
      name: 'ProjectTitle',
      validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}  // response if user does not write an answer
    },
    {
      type: 'input',
      message: 'Can you describe why, what and how you built this app?',
      name: 'Description',
      validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
    },
    {
      type: 'input',
      message: 'how do you install your app?',
      name: 'Installation',
      validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
    },
    {
      type: 'input',
      message: 'Add a screenshot by using by using ./assets/images/screenshot.png',
      name: 'Usage',
      
    },
    {
        type: 'input',
        message: 'Do you have any credits to add?',
        name: 'Credits',
        validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
      },
      {
        type: 'checkbox',
        message: 'Which license does your project have?',
        name: 'License', 
        choices: ["MIT","GPLv2","Apache","GPLv3","Eclipse", "N/A"],
        validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
      },
      {
        type: 'url',
        message: 'What is your Github project link?',
        name: 'Github',
        validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
      },
      {
        type: 'input',
        message: 'Does your project have any dependencies?',
        name: 'Dependencies',
        validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
      },
      {
        type: 'input',
        message: 'How can other developers contribute?',
        name: 'Contributing',
        validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
      },
      {
        type: 'input',
        message: 'Do you have any tests for the application?',
        name: 'Tests',
        validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
      },
      {
        type: 'input',
        message: 'What is your E-mail?',
        name: 'email',
        validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
      },
      {
        type: 'input',
        message: 'What is your Github Username?',
        name: 'GithubUser',
        validate:(value) =>{if(value){return true} else {return 'I need an answer to continue'}}
      },
    ];
 

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName,data, function(err) {
    if(err) {
      return console.log(err)
    } else {
      console.log("Success! Your Readme file has been created.")   //message to user when readme file has been created
    }
  })
}


//function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(data) {
      writeToFile('README.md', markDown(data));      //writes content of GeneratemarkDown function to readme
      console.log("Success! Your Readme file has been created.")
    })
}

// Function call to initialize app
init();
