function renderlicenseBadge(license) {
  if (!license){
    return '';
  }

  switch (license) {
    case 'MIT License ':
      return  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0 License ':
      return  '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0 License ':
      return  '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Attribution 4.0 International License ':
      return  '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)';
    case 'Eclipse Public License 1.0':
      return  '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    default:
      return  '';
  }
}

function renderlicenseLink(license) {
  if (!license){
    return'';
  }

  switch (license) {
    case 'MIT License ':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0 License ':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL 3.0 license ':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'Attribution 4.0 International License ':
      return 'https://creativecommons.org/licenses/by/4.0/';  
    case 'Eclipse Public License 1.0':
      return 'https://opensource.org/licenses/EPL-1.0'
    default:
      return '';
  }
}

function renderlicenseSection(license) {
  if(!license){
    return'';
  }
  return`## license:
  
  this project is licensed under the ${license} license.

  ${renderlicenseBadge(license)}
  ${renderlicenseLink(license)}
  `;
}


function generateMarkdown(data) {
  return `#${data.title}

  ${renderlicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of contents:

  ## Installation Instructions 
  ${data.installation}

  ## Usage Instructions
  ${data.usage}

  ## Contribution Guidelines
  [contributor covenant](https://www.contributor-covenant.org/)
  ${data.contribution}

  ## Test Instructions:
  ${data.test}

  ${renderlicenseSection(data.license)}

  ## Questions:
  For questions or suggestions, feel free to contact me at my email${data.email}.
  You can also find me on Github at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
