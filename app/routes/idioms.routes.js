module.exports = app => {
    const idioms = require("../controllers/idioms.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all Idioms
    router.get("/", idioms.findAll);  
      
    app.use('/api/idioms', router);
  };