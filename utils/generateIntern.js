const generateIntern = ({ manager, managerId, managerEmail, managerOffice, engineer, engineerId, engineerEmail, engineersGithub, intern, internId, internEmail, internsSchool }) =>
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
      <span>School ${internsSchool}</span>
    </div>

    </section>
  </body>
  </html>`;

module.exports = generateIntern;