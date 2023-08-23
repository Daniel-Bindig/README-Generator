function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  ## Installation:
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contributing}
  ## Credits
  - Email: ${data.email}
  - Github: [${data.github}](https://github.com/${data.github})
  ## License
  ${data.license}
  ## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;
