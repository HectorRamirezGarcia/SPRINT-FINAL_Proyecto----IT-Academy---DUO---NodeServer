module.exports = {
    HOST: "localhost",
    USER: "roothector",
    PASSWORD: "123456",
    DB: "duo",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };