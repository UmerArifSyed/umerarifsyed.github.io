
//importing node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template");

//lib modules
//do I require Employee?
const Engineer = require("./lib/Engineer");
const Intern =  require("./lib/Intern");
const Manager = require("./lib/Manager");

//Building array for answers to questions 
const team = [];

//Creating array object questions asked in CLI to user
const questions = async () => {
    const answers = await inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email",
        },
        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: ["Engineer","Intern", "Manager"],
        },
    ])

    //Now, console.log(answers);
    //If manager is selected, answer these questions
    if (answers.role === "Manager") {
        const managerAns = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your office number?",
                name: "officeNumber",
            },
        ])
        const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerAns.officeNumber
        );
        team.push(newManager);
    //If Engineer role is selected
    } else if (answers.role === "Engineer") {
        const githubAns = await inquirer
        .prompt([
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "github",
            }
        ])
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            githubAns.github
        );
        team.push(newEngineer);
    //If Intern role is selected
    } else if (answers.role === "Intern") {
        const internAns = await inquirer
        .prompt([
            {
                type: "input",
                message: "What university did you attend?",
                name: "school",
            },
        ])
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internAns.school
        );
        team.push(newIntern);
    }
}; //End of questions function

async function promptQuestions() {
    await questions()

    const addMemberAns = await inquirer
    .prompt([
        {
            name: 'addMember',
            type: 'list',
            choices: ['Add a new member', 'Create team'],
            message: "What would you like to do next?"
        }
    ])
    
    if (addMemberAns.addMember === 'Add a new member') {
        return promptQuestions()
    }
    return createTeam();
}

promptQuestions();

function createTeam () {
    console.log("New Employee", team)
    fs.writeFileSync(
        "./output/index.html",
        generateTeam(team),
        "UTF-8"
    );
}