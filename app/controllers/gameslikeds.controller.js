const db = require("../models");

const User = db.users;
const GamesLikeds = db.gameslikeds;

let counts = 0;

// Create and Save a new Game liked
exports.create = async (req, res) => {

  const email = req.body.email;

  const id_user = await User.findOne({ where: { email: email } })
    .then(data => {
      if (data) {
        return data.id;
      } else {
        res.status(404).send({
          message: `Cannot find User with email=${req.body.email}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with email=" + email
      });
    });

    const gamesliked = {
      user_id: parseInt(id_user),
      game_id: req.body.games[counts].id,
    };
    if (counts != req.body.games.length) {
      counts++;
    }
    GamesLikeds.create(gamesliked)
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