module.exports = (sequelize, Sequelize) => {
    const Idioms = sequelize.define("idioms", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING
        },
        text: {
            type: Sequelize.STRING
        }
    },{
        timestamps: false
    });
    return Idioms;
};