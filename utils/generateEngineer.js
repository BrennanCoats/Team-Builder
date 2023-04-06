const generateEngineer = ({ manager, managerId, managerEmail, managerOffice, engineer, engineerId, engineerEmail, engineersGithub, intern, internId, internEmail, internsGithub }) =>
  `<!DOCTYPE html>
  <html lang="en">
  <body id="body">
    <section id="cards">
    <div class="card">
      <h3 class="cardHead">
          Engineer
      </h3>
      <h4 class="personName">Name: ${engineer}</h4>
      <span>ID: ${engineerId}</span>
      <span>Email: ${engineerEmail}</span>
      <span>Office ${engineersGithub}</span>
    </div>

    </section>
  </body>
  </html>`;

module.exports = generateEngineer;