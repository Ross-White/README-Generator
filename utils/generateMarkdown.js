// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "NONE") {
    return ''
  }
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (license === "APACHE 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === "GPL 3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "NONE") {
    return ''
  }
  return `* [License](#license)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "NONE") {
    return ''
  }
  return `## License 
  
    This project is licensed under the ` + license + ` license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Contributers](#contributers)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Installation
  The required dependencies are installed using: ${data.installation}

  ## Contributers
  ${data.contributers} contributed to the final outcome of this project.

  ## Questions
  For any questions regarding this project, I can be contacted through:
  * GitHub- <github.com/${data.username}>
  * Email- <${data.email}>

  ${renderLicenseSection(data.license)}

  
`;
}

module.exports = generateMarkdown;

