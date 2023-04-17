const Intern = require("../lib/Intern");

describe('newIntern', () => {
  it('creates new Intern name', () => {
    const name = "Bobby";
    const newGuy = new Intern(name);
    expect(newGuy.name).toBe(name);
  });

  it('creates new Intern ID', () => {
    const testId = "35";
    const newGuy = new Intern("Bobby", testId);
    expect(newGuy.id).toBe(testId);
  });

  it('creates new Intern email', () => {
    const testEmail = "test@test.com";
    const newGuy = new Intern("Bobby", "test@test.com", testEmail);
    expect(newGuy.email).toBe(testEmail);
  });
  it('creates new Intern School', () => {
    const testSchool = "SLCC";
    const newGuy = new Intern("Bobby", "35", "test@test.com", testSchool);
    expect(newGuy.school).toBe(testSchool);
  });

});