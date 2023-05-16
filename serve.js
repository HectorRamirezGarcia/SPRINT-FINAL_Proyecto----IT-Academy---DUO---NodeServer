const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');

app.use(cors('*'));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/images', express.static('images'));

// try to sync the db
const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

require("./app/routes/users.routes")(app);
require("./app/routes/uploads.routes")(app);
require("./app/routes/games.routes")(app);
require("./app/routes/gameslikeds.routes")(app);
require("./app/routes/idioms.routes")(app);
require("./app/routes/status.routes")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});




