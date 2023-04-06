var inquirer = require('inquirer');
const fs = require("node:fs");
const generateHTML = require("./utils/generateHTML");
const generateEngineer = require("./utils/generateEngineer");
const generateIntern = require("./utils/generateIntern");
const { appendFileSync } = require('node:fs');

const { writeFile } = require('fs').promises;

const promptUser = () => {
        inquirer
          .prompt([
            {
                type: "input",
                name: "manager",
                message: "Please enter your team manager's name",
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter your team manager's Employee ID",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter your team manager's email address",
            },
            {
                type: 'input',
                name: 'managerOffice',
                message: "Please enter your team manager's office number",
            },
          ])
          .then((answers) => {
            console.log("Building your team")
            writeFile('./dist/index.html', generateHTML(answers))
            .then(() => console.log('Successfully created index.html file'))
            .catch((err) => console.error(err));
            promptForMore()
          });        
        };

 
const promptForMore = () => {
     inquirer.prompt([
        {
            type: 'list',
            name: 'openingQuestion',
            message: 'What would you like to do?',
            choices: ["Add a Manager", "Add an engineer", "Add an intern", "Finish building my team"],
        }
    ])
    .then((answers) => {
     if (answers.openingQuestion === 'Add an engineer') {
        inquirer
          .prompt([
            {
                type: "input",
                name: "engineer",
                message: "Please enter your team engineer's name",
            },
            {
                type: "input",
                name: "engineerId",
                message: "Please enter your team engineer's Employee ID",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter your engineer's email address",
            },
            {
                type: 'input',
                name: 'engineersGithub',
                message: "Please enter your engineers Github username",
            },
          ])
          .then((answers) => appendFileSync('./dist/index.html', generateEngineer(answers)))
          .then((answers) => {
            console.log("Building your team")
            promptForMore()
          });

    } else if (answers.openingQuestion === 'Add an intern') {
        inquirer
          .prompt([
            {
                type: "input",
                name: "intern",
                message: "Please enter your team intern's name",
            },
            {
                type: "input",
                name: "internId",
                message: "Please enter your team intern's Employee ID",
            },
            {
                type: "input",
                name: "internEmail",
                message: "Please enter your intern's email address",
            },
            {
                type: 'input',
                name: 'internsGithub',
                message: "Please enter your interns Github username",
            },
          ])
          .then((answers) => appendFileSync('./dist/index.html', generateIntern(answers)))
          .then(() => console.log('Successfully appended index.html file'))
          .then((answers) => {
            promptForMore()
          });
    }else if (answers.openingQuestion === 'Finish building my team') {

    }  
    })
    
};     

const init = () => {
    promptUser()    
};

init();
