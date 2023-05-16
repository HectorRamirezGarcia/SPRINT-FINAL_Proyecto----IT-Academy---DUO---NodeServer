const db = require("../models");

const Idioms = db.idioms;

// Retrieve all Idioms from the database.
exports.findAll = (req, res) => {
    Idioms.findAll()
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving User."
        });
      });
};