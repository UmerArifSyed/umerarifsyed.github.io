const Manager = require("../lib/Manager");

test("can create an office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("John", 2, "johndoe@yahoo.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 2;
    const employeeInstance = new Manager("john", 2, "johndoe@yahoo.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue ="Manager";
    const employeeInstance = new Manager("John", 2, "johndoe@yahoo.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});

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