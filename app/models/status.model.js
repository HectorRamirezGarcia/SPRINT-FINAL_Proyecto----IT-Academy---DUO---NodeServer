module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define("status", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        symbol: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true // Evita que Sequelize pluralice el nombre de la tabla
      });
    return Status;
};