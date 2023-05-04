module.exports = app => {
    const users = require("../controllers/users.controller.js");
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/register", users.create);

    // Login
    router.post("/authenticate", users.loggin);
  
    // Retrieve all Users
    router.get("/", users.findAll);
    
    // Retrieve a single User with id
    router.get("/:username", users.findOne);
  
    // Update a User with id
    router.put("/:id", users.update);
  
    // Delete a User with id
    router.delete("/:id", users.delete);
  
    app.use('/api/users', router);
  };