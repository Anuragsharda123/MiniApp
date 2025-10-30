const { DataTypes, Model, Optional } = require('sequelize');
const sequelize = require('../Config/db');
const { v4: UUIDV4 } = require('uuid');  // using dynamic import()

class User extends Model{};

User.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true 
    },

    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    paranoid: true
});

module.exports = User;
