const Sequelize = require ('sequelize');
const db = require('../config/database');


const offers= db.define('offers',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    food_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    foodtype_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { timestamps: false });
 
module.exports = offers;
