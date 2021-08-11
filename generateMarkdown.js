// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
     console.log("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]")
  }
  else if(license === "Apache 2.0") {
    console.log("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]")
  }
  else if(license === "IPL 1.0") {
    console.log("[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]")
  }
  else if(license === "BSD 3"){
    console.log("[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]")
  }
  else {
    console.log(" ")
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    console.log("(https://opensource.org/licenses/MIT)")
 }
 else if(license === "Apache 2.0") {
   console.log("(https://opensource.org/licenses/Apache-2.0)")
 }
 else if(license === "IPL 1.0") {
   console.log("(https://opensource.org/licenses/IPL-1.0)")
 }
 else if(license === "BSD 3"){
   console.log("(https://opensource.org/licenses/BSD-3-Clause)")
 }
 else {
   console.log(" ")
 }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None") {
    console.log(" ")
  }
  else {
    console.log("[License](#license)")
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  renderLicenseBadge()
  renderLicenseLink()
  renderLicenseSection()

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#dependencies)

  * [Usage](#usage)

  * [License](#license)

  * [Constributing](#contribution)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install the necessary dependencies, run the following command:
  ${data.dependencies}

  ## Usage 

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contribution}

  ## Tests

  To run tests, run the following command:
  ${data.tests}

  ## Questions

  If you have any questions about this repo, feel free to contact me at ${data.email}. You can find more of my work at [${data.username}](github.com/${data.username})
`;
}

module.exports = generateMarkdown;
