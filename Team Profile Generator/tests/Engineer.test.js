const Engineer = require("../lib/Engineer");

test("Can set a GitHub account.", () => {
    const testGithub = "JamesLJenks";
    const employeeInstance = new Engineer("John", 2, "johndoe@yahoo.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing to get GitHub username via getGithub method.", () => {
    const testGithub = "JohnDoe";
    const employeeInstance = new Engineer("John", 2,"johndoe@yahoo.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("John", 2, "johndoe@yahoo.com", "JohnDoe");
    expect(employeeInstance.getRole()).toBe(returnValue);
});