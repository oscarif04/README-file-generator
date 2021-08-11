// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown.js");




// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },

    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },

    {
        type: "input",
        message: "Please write a short description of your project: ",
        name: "description"
    },

    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "IPL 1.0", "BSD 3", "None"],
        name: "license"
    },

    {
        type: "input",
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "dependencies"
    },

    {
        type: "input",
        message: "What command should be run to run tests?",
        default: "npm test",
        name: "tests"
    },

    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },

    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
    }
];// end of questions

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        }
        else {
            console.log("updates done.")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
