const generateHTML = ({ manager, managerId, managerEmail, managerOffice, engineer, engineerId, engineerEmail, engineersGithub, intern, internId, internEmail, internsGithub }) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="./style.css">
    <title>Document</title>
  </head>
  <body id="body">
    <header>
      <div id ="pageHeader">
        <h1>My Team</h1>
      </div>
    </header>
    <section id="cards">
    <div class="card">
      <h3 class="cardHead">
          Manager
      </h3>
      <h4 class="personName">Name: ${manager}</h4>
      <span>ID: ${managerId}</span>
      <span>Email: ${managerEmail}</span>
      <span>Office ${managerOffice}</span>
    </div>
    </section>
  </body>
  </html>`;

module.exports = generateHTML;