const db = require("../models");

const Status = db.status;

// Retrieve all Status from the database.
exports.findAll = (req, res) => {
    Status.findAll()
    .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Status."
        });
      });
};