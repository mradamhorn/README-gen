// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
  `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Testing](#testing)
  - [Questions](#questions)
  - [License](#license)

  ## Instructional Video
  ![Instructional Video](https://drive.google.com/file/d/1Wa_Lo4BhqAqUVIBHqLvVoCBXCohMMw2L/view)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributions}

  ## Testing
  ${data.tests}

  ## Questions
  GitHub username: [${data.github}](https://github.com/${data.github})\n
  Email address: ${data.email}

  ## License
  ${data.license}
`;


module.exports = generateMarkdown;
