
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectTitle}
  ![Github license](https://img.shields.io/badge/License-${data.License}-brightgreen)
  
  ## Description
  ${data.Description}
  
  ## Table of Contents
  * [installation](#installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation
  ${data.Installation}
  ${data.Github}
  ## Usage
  ${data.Usage}
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
