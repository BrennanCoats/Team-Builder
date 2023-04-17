const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML")
const generateEngineer = require("./utils/generateEngineer")
const generateIntern = require("./utils/generateIntern")

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { log } = require("console");


const { writeFile } = require('fs').promises;


const teamInfo = [];

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
              writeFile('./dist/index.html', generateHTML(answers))
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
            choices: [ "Add an engineer", "Add an intern", "Finish building my team"],
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
          .then((answers) => {
            fs.appendFileSync('./dist/index.html', generateEngineer(answers))
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
                name: 'internsSchool',
                message: "Please enter your interns School Name",
            },
          ])
          .then((answers) => {
            fs.appendFileSync('./dist/index.html', generateIntern(answers))
              promptForMore()
            });
    }else if (answers.openingQuestion === 'Finish building my team') {
      console.log("Your teams page has been created!")
    }  
    })
    
};     

const init = () => {
    promptUser()    
};

init();
