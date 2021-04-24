// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Contributers](#contributers)
  * [Questions](#questions)

  ## Installation
  The required dependencies are installed using: ${data.installation}

  ## Contributers
  ${data.contributers} contributed to the final outcome of this project.

  ## Questions
  For any questions regarding this project, I can be contacted through:
  * GitHub- <github.com/${data.username}>
  * Email- <${data.email}>
`;
}

module.exports = generateMarkdown;

