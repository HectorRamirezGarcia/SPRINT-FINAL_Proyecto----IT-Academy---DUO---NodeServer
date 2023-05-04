const db = require("../models");

const Game = db.games;
const Op = db.Sequelize.Op;

// Retrieve all Users from the database.
exports.findAll = (req, res) => {

    Game.findAll({

        distinct: true
    })
        .then(data => {
            hash = {};
            data = data.filter(function (current) {
                let go = String(current.name)
                let exists = !hash[go] || false;
                hash[go] = true;
                return exists;
            });
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Game."
            });
        });
};

// Find a single Game with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Game.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Game with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Game with id=" + id
            });
        });
};