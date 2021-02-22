// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
  `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage Instructions
  ${data.usage}

  ## Contributors
  ${data.contributions}

  ## Testing
  ${data.tests}

  ## Questions
  GitHub username: ${data.github}
  Email address: ${data.email}
`;


module.exports = generateMarkdown;
