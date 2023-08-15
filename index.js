// TODO: Include packages needed for this application
const util = require('util');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: function (input) {
            if (input.length <= 0) {
                return console.log('No username was given. Please enter a username to continue.');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function (input) {
            if (input.length <= 0) {
                return console.log('No email address was given. Please enter an email address to continue.');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'project',
        message: "What is your project's name?",
        validate: function (input) {
            if (input.length <= 0) {
                return console.log('No name was given. Please enter a name to continue.');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: function (input) {
            if (input.length <= 0) {
                return console.log('No description was given. Please enter a description to continue.');
            }
            return true;
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        validate: function (input) {
            if (input.length <= 0) {
                return console.log('No command was given. Please enter a command to continue.');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        validate: function (input) {
            if (input.length <= 0) {
                return console.log('No command was given. Please enter a command to continue.');
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'extraInfo',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
