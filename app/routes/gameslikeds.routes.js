module.exports = app => {
    const gamesliked = require("../controllers/gameslikeds.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Games
    router.post("/", gamesliked.create);  

    app.use('/api/users/gameslikeds', router);
  };