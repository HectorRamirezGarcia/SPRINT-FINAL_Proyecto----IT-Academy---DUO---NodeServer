module.exports = (sequelize, Sequelize) => {
    const Game = sequelize.define("games", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        },
        id_categories: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: false
    });
    return Game;
};