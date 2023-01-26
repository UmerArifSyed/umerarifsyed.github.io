//create the team
const generateTeam = team => {

    //create the manager html
    const generateManager = manager => {
        return `
        <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${manager.getName()}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID:${manager.getId()} </li>
                        <li class="list-group-item">Email: <a href="mail to:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    //creating the html for engineers
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mail to:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()} </a></li>
                </ul>
            </div>
        </div>
        `;
    };

    //creating the html for interns
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mail to:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    //push array to page
    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");
}

//export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Our Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="stylesheet.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand md-0 h1 w-100 text-center" id="navbar-text">Our Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${generateTeam(team)}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
};