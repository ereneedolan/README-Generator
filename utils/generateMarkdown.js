// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === "None"){
  return ""
  }
  else {
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})`
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return ""
    }
    else {
      return ` * [License](#license)`
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return ""
    }
    else {
      return ` ## License
      ${license}`
    }
  
 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description 
${data.description}
## Table of Contents 
* [Usage](#usage)
* [Credits](#credits)
${renderLicenseLink()}
* [Features](#features)
* [Contributions](#contributions)
* [Tests](#tests)
## Usage 
${data.usage}
## Credits 
${data.credits}
${renderLicenseSection(data.license)}
##  Features
${data.features}
## Contributions
${data.howToContribute}
## Tests
${data.tests}
`;
}

module.exports = generateMarkdown;
