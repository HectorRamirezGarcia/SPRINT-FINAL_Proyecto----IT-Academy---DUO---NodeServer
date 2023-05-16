module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validator: {
          min: -20,
          max: 20,
        }
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
        validator: {
          min: -30,
          max: 30,
        }
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
        validator: {
          min: -30,
          max: 30,
        }
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validator: {
          min: -100,
          max: 100,
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validator: {
          min: -100,
          max: 100,
        }
      },
      photourl: {
        type: Sequelize.STRING,
      },
      emailverified: {
        type: Sequelize.BOOLEAN
      },
      userverified: {
        type: Sequelize.BOOLEAN
      },
      status_id: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      }
    });
  
    return User;
};