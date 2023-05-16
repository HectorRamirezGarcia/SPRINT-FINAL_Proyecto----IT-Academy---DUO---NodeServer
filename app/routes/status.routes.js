module.exports = app => {
    const status = require("../controllers/status.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Games
    router.get("/", status.findAll);  

    app.use('/api/status', router);
  };