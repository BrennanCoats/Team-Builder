const Employee = require("../lib/Employee");

describe('newEmployee', () => {
  it('creates new employee name', () => {
    const name = "Bobby";
    const newGuy = new Employee(name);
    expect(newGuy.name).toBe(name);
  });

  it('creates new employee ID', () => {
    const testId = "35";
    const newGuy = new Employee("Bobby", testId);
    expect(newGuy.id).toBe(testId);
  });

  it('creates new employee email', () => {
    const testEmail = "test@test.com";
    const newGuy = new Employee("Bobby", "35", testEmail);
    expect(newGuy.email).toBe(testEmail);
  });

});