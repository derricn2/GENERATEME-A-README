// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquire');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter projcet description',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter project intallation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter projcet usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter project contribution guidelines',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Enter project testing instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
