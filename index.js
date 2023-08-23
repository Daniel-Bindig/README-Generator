const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


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
        name: 'title',
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
        choices: ['MIT','APACHE 2.0','GPL 3.0','None']
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
        name: 'tests',
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
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    })
}



function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile('sample-README.md', generateMarkdown(userInput));
    })
}


init();
