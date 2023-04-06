const generateIntern = ({ manager, managerId, managerEmail, managerOffice, engineer, engineerId, engineerEmail, engineersGithub, intern, internId, internEmail, internsGithub }) =>
  `<!DOCTYPE html>
  <html lang="en">
  <body id="body">
    <section id="cards">
    <div class="card">
      <h3 class="cardHead">
          Intern
      </h3>
      <h4 class="personName">Name: ${intern}</h4>
      <span>ID: ${internId}</span>
      <span>Email: ${internEmail}</span>
      <span>Office ${internsGithub}</span>
    </div>

    </section>
  </body>
  </html>`;

module.exports = generateIntern;