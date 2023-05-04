module.exports = (sequelize, Sequelize) => {
    const GamesLikeds = sequelize.define("gameslikeds", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: Sequelize.INTEGER
        },
        game_id: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: false
    });
    return GamesLikeds;
};