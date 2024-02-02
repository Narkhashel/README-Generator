// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [License](#license)

## Description 

${data.description}

### Instalation

${data.instalation}

### Usage

${data.usage}

### Contribution

${data.contribution}

### Test

${data.test}

### License

${data.license}

### Questions

You can reach me at ${data.email} or you can check my work at ${data.gitHub}.

`;
}

module.exports = generateMarkdown;