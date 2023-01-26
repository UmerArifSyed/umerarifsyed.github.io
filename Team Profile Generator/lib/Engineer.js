//importing Employee constructor
const Employee = require('./Employee.js');

//passing inheritants from Employee to Engineer
class Engineer extends Employee {
    constructor(name,id,email,github){
        //calling employee constructor
        super(name,id,email);

        this.github = github;
    }

    //returning github from input
    getGithub() {
        return this.github;
    }

    //overide employee rolde to engineer
    getRole() {
        return "Engineer";
    }

}

//to be exported
module.exports = Engineer;