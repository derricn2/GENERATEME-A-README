// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const LicenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}

  ${LicenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents

   - [Installation](#installation)
   - [Usage](#usage)
   - [Contribution](#contribution)
   - [Tests](#tests)
   - [Questions/Contact Info](#questions/contact-info)
   
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## Questions/Contact Info

  If you have any questions, please reach out:

  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
