// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// # <Your-Project-Title>

// ## Description

// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?

// ## Table of Contents (Optional)

// If your README is long, add a table of contents to make it easy for users to find what they need.

// - [Installation](#installation)
// - [Usage](#usage)
// - [Credits](#credits)
// - [License](#license)

// ## Installation

// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [

{type: 'input',
    name:'title',
    message:'What is the title of your project?',

},
{type: 'input',
    name:'description',
    message:'Please describe your project:',

},
{type: 'input',
    name:'tableOfContents',
    message:'List your table of contents:',

},
{type: 'input',
    name:'usage',
    message:'Provide instructions and examples for use. Include screenshots as needed.',

},
{type: 'input',
    name:'credits',
    message:'Please list your contributors:',

},
{
    type: 'list',
    name:'license',
    message:'Which license is attached to your repo?',
    choices: ['MIT','GPL_3.0','BSD_3','None']
},
{
    type: 'input',
    name:'features',
    message:'Please describe the features of your product:',
},
{
    type: 'input',
    name:'howToContribute',
    message:'Are there any contributions you are looking to be added to your project?',
},
{
    type: 'input',
    name:'tests',
    message:'How do you run tests?',
},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(
        fileName, data, function(err){err? console.log(err): console.log("README generated")}
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data =>{
        console.log(data)
        let markdown = generateMarkdown(data)  
        writeToFile("READMETemplate.md", markdown)
        console.log(markdown)  
    })
}

// Function call to initialize app
init();
