const dbConfig = require("../config/db.config.js");

const Sequelize  = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.games = require("./games.model.js")(sequelize, Sequelize);
db.gameslikeds = require("./gameslikeds.model.js")(sequelize, Sequelize);
db.idioms = require("./idioms.model.js")(sequelize, Sequelize);
db.status = require("./status.model.js")(sequelize, Sequelize);

module.exports = db;