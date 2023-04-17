const Engineer = require("../lib/Engineer");

describe('newEngineer', () => {
  it('creates new engineer name', () => {
    const name = "Bobby";
    const newGuy = new Engineer(name);
    expect(newGuy.name).toBe(name);
  });

  it('creates new engineer ID', () => {
    const testId = "35";
    const newGuy = new Engineer("Bobby", testId);
    expect(newGuy.id).toBe(testId);
  });

  it('creates new engineer email', () => {
    const testEmail = "test@test.com";
    const newGuy = new Engineer("Bobby", "35", testEmail);
    expect(newGuy.email).toBe(testEmail);
  });
  it('creates new engineer github Username', () => {
    const testGithub = "Deathstar25";
    const newGuy = new Engineer("Bobby", "35", "test@test.com", testGithub);
    expect(newGuy.github).toBe(testGithub);
  });

});