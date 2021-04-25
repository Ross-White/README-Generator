// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your applicaton installed?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'NONE'],
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Who contributed to your project?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {writeToFile('README.md', generateMarkdown(answers))
    });
}

// Function call to initialize app
init();
