// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
 }

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }

  return `## License
  
  This project is licensed under the ${license} License. Refer to the link below for more information:
  
   - [${license} License](https://opensource.org/licenses/${encodeURIComponent(license)})`;

 }

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}

  ${licenseBadge}

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

  ${licenseSection}
`;
}

module.exports = generateMarkdown;
