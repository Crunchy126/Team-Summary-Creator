const inquirer = require("inquirer")
const fs = require("fs")
const Employee = require("./lib/employee")
const Manager = require("./lib/manager")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const engineerCard = require("./templates/engineer")
const managerCard = require("./templates/manager")
const internCard = require("./templates/intern")

let middleCard = ""
const team = []
let id = 1;

let firstHalfOfHTML =
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <title>The Extreme Team</title>
</head>

<body>
    <div class="jumbotron">
        <h1 class="display-4 text-center mb-5">The Extreme Team</h1>
        <div class="row d-flex justify-content-around">`

let lastHalfOfHTML =
    `</div>
    </div>


    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossorigin="anonymous"></script>
</body>

</html>`


function userInput() {
    inquirer.prompt([

        {
            type: "list",
            message: "What is your role?",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },

        {
            type: "input",
            message: "What is your e-mail?",
            name: "email"
        }

    ]) // .then for other info needed based on user input
        .then(function (mainAnswer) {
            if (mainAnswer.role === "Manager") {
                managerInfo(mainAnswer).then(function (managerInput) {
                    //name,id, email, officeNumber
                    let manager = new Manager(mainAnswer.name, id++, mainAnswer.email, managerInput.officeNumber)
                    team.push(manager)

                    let finalManagerCard = managerCard(team)

                    middleCard += finalManagerCard;
                    console.log(middleCard);


                    fs.writeFile("./output/team.html", firstHalfOfHTML + middleCard + lastHalfOfHTML, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    })

                    if (managerInput.quit != "Quit") {

                        userInput()
                    } else {

                        return
                    }
                }).catch(function (err) {
                    console.log(err);
                })
            }
            else if (mainAnswer.role === "Engineer") {
                engineerInfo(mainAnswer).then(function (engineerInput) {
                    let engineer = new Engineer(mainAnswer.name, id++, mainAnswer.email, engineerInput.github)
                    team.push(engineer)
                    let finalEngineerCard = engineerCard(team)

                    middleCard += finalEngineerCard
                    console.log(middleCard);

                    fs.writeFile("./output/team.html", firstHalfOfHTML + middleCard + lastHalfOfHTML, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    })

                    if (engineerInput.quit != "Quit") {

                        userInput()
                    } else {

                        return
                    }
                }).catch(function (err) {
                    console.log(err);

                })
            }
            else if (mainAnswer.role === "Intern") {
                internInfo(mainAnswer).then(function (internInput) {
                    console.log(internInput.school);

                    let intern = new Intern(mainAnswer.name, id++, mainAnswer.email, internInput.school)
                    console.log(intern);

                    team.push(intern)
                    let finalInternCard = internCard(team)
                    middleCard += finalInternCard;
                    console.log(middleCard);

                    fs.writeFile("./output/team.html", firstHalfOfHTML + middleCard + lastHalfOfHTML, function (err) {
                        if (err) {
                            console.log(err);
                        }
                    })

                    if (internInput.quit != "Quit") {
                        userInput()
                    } else {

                        return
                    }
                }).catch(function (err) {
                    console.log(err);
                })
            }


        })
        .catch(function (err) {
            console.log(err);
        })
};

function managerInfo(answers) {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Office Number?",
            name: "officeNumber"
        },
        {
            type: "list",
            message: "Done?",
            name: "quit",
            choices: [
                "Quit",
                "Add another employee"
            ]
        }

    ])
};

function engineerInfo(answers) {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Github Username?",
            name: "github"
        },
        {
            type: "list",
            message: "Done?",
            name: "quit",
            choices: [
                "Quit",
                "Add another employee"
            ]
        }

    ])
};

function internInfo(answers) {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the name of your School?",
            name: "school"
        },
        {
            type: "list",
            message: "Done?",
            name: "quit",
            choices: [
                "Quit",
                "Add another employee"
            ]
        }

    ])
};

userInput()