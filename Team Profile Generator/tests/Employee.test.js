const Employee = require("../lib/Employee");

test("Can create a new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "John";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.",() => {
    const id= 2;
    const employeeInstance = new Employee("John", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email ="johndoe@yahoo.com";
    const employeeInstance = new Employee("John", 2, email);
    expect(employeeInstance.email).toBe(email);
})

test("Gets name through getName method.", () => {
    const testName = "John";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("can test ID through getID method.", () => {
    const testID = 2;
    const employeeInstance = new Employee("John", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test test email thorugh getEmail method.", () => {
    const testEmail = "johndoe@yahoo.com";
    const employeeInstance = new Employee("John", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("John", 2, "johndoe@yahoo.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})


// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'
// const { exportAllDeclaration } = require("@babel/types");

// const { default: test} = required{'node:test'};
// const Employee = required('../lib/Employee.js')

// jest.mock('../lib/Employee.js');

// test('creates an employee object', ()=> {
//     const employee=new Employee('name', 'id','role','email')

//     expect(employee.name).toBe('name');
//     expect(employee.email)toBe('email');
//     expect(employee.id)toBe('id');
//     expect(employee.rolde)toBe('role');
// });

// test('')
