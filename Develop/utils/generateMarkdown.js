// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.ProjectTitle}
  ![badge](https://img.shields.io/badge/license-${data.License}-yellow.svg)    

  
  ## Description
  ${data.Description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#lontributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.Installation}
  ${data.Github}
  ## Usage
  ![${data.Usage}](./assets/images/screenshot.png)
  ## Dependencies
  ${data.Dependencies}
  ## Credits
  ${data.Credits}
  ## License
  ${data.License}
  ## Contributing
  ${data.Contributing}
  ## Tests
  ${data.Tests}
  ## Questions
  Github Username: ${data.GithubUser}
  Please send me an E-mail if you have any questions [here](mailto:${data.email}) or visit https://github.com/${data.GithubUser}

`;
}

module.exports = generateMarkdown;
