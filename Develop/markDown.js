// function to generate markdown for README

function markDown(data){
    
return `# ${data.ProjectTitle}
* [installation](#installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)

[#installation]
${data.Installation}
${data.Github}
[#Usage]
${data.Usage}
#Credits
${data.Credits}
#Licence
${data.License}
`;
}
module.exports = markDown;