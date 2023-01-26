const Intern = require("../lib/Intern");

test("Can set school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("John", 2, "johndoe@yahoo.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("John", 2, "johndoe@yahoo.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("James", 2, "johndoe@yahoo.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});