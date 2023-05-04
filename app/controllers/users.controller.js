const crypt = require("../config/pw.config");
const db = require("../models");

const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = async (req, res) => {
  //Encrypt pw
  const pwencrypt = await crypt.encryptpw(req.body.password);

  // Create a User
  const users = {
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    photourl: req.body.photourl,
    password: pwencrypt,
    emailverified: false,
    userverified: false,
    description: req.body.description,
    city: req.body.city,
    province: req.body.province
  };

  // Save User in the database
  User.create(users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message + "body == " + req.body || "Some error occurred while creating the User. body == " + req.body
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

  User.findAll({ where: condition })
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

// Compare password put in input to encrypted password
exports.loggin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ where: {email : email}}).then(async data => {
    const cresult = await crypt.comparepw(password, data.password);
    console.log(cresult);
    if (cresult == true) {
      res.send("Logged successfull.")
    } else {
      res.status(401).send({
        message: "Password incorrect."
      })
    }
  }).catch(err => {
    res.status(404).send({
      message: err
    })
  })


}

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
};