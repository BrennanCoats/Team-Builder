const Manager = require("../lib/Manager");

describe('newManager', () => {
  it('creates new Manager name', () => {
    const name = "Bobby";
    const newGuy = new Manager(name);
    expect(newGuy.name).toBe(name);
  });

  it('creates new Manager ID', () => {
    const testId = "35";
    const newGuy = new Manager("Bobby", testId);
    expect(newGuy.id).toBe(testId);
  });

  it('creates new Manager email', () => {
    const testEmail = "test@test.com";
    const newGuy = new Manager("Bobby", "test@test.com", testEmail);
    expect(newGuy.email).toBe(testEmail);
  });
  it('creates new Manager office number', () => {
    const testOfficeNumber = "217";
    const newGuy = new Manager("Bobby", "35", "test@test.com", testOfficeNumber);
    expect(newGuy.officeNumber).toBe(testOfficeNumber);
  });
});
