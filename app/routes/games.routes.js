module.exports = app => {
    const games = require("../controllers/games.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Games
    router.get("/", games.findAll);  
    
    // Retrieve a single Game with name
    router.get("/:name", games.findOne);
  
    app.use('/api/games', router);
  };