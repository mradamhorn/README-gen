// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the description of the project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the installation instructions for the project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What does the user need to know about the usage of the project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Who all contributed to the project?',
            name: 'contributions',
        },
        {
            type: 'input',
            message: 'How does a user test the project?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ]);
};

// TODO: Create a function to write README file
const writeMarkdown = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((data) => writeMarkdown('README.md', generateMarkdown(data)))
        .then(() => console.log('Successfully wrote to README.md!'))
        .catch((err) => console.log(err));
}

// Function call to initialize app
init();
