const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
function generateQuestions() {
const questions = [
        {
            type: 'input',
            message: 'Name of the Project:',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Short Description of your Project:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Instalation intructions:',
            name: 'instalation'
        },
        {
            type: 'input',
            message: 'Usage information:',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Contribution guidelines:',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Test instructions:',
            name: 'test'
        },
        {
            type: 'list',
            message: 'Please chose your License:',
            choices: ['MIT','Academic_Free_License_v3.0','European_Union_Public_License_1.1','Microsoft_Public_License','The_Unlicense','Open_Software_License_3.0'],
            name: 'license'        
        },
        {
            type: 'input',
            message: 'GitHub username:',
            name: 'gitHub'
        },
        {
            type: 'input',
            message: 'User Email address:',
            name: 'email'
        }
    ];
    return questions
}

// function to prompt questions to user
async function promptUser(questions) {
    let answers = {};
    answers = await inquirer.prompt(questions);
    console.log(answers);
    return answers;
}

// function to write README file
async function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log("Error writing to file:", err);
        }
})};

// function to initialize program
async function init() {
    const questions = generateQuestions();
    const answers = await promptUser(questions);
    const readmeMd = generateMarkdown(answers);
    await writeToFile("exampleREADME.md", readmeMd);
}

// function call to initialize program
init();