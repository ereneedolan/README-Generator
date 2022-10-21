

// # <Your-Project-Title>

// ## Description
// ## Table of Contents (Optional)
// ## Installation
// ## Usage
// ## Credits
// ## License
// ## Badges
// ## Features
// ## How to Contribute
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
