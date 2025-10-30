const { DataTypes, Model, Optional } = require('sequelize');
const sequelize = require('../Config/db');
const { v4: UUIDV4 } = require('uuid'); 

class contentLanguage extends Model{};

contentLanguage.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true 
    },

    section: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    swedishLang: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    englishLang: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize,
    modelName: 'contentLanguage',
    tableName: 'contentlanguages',
    timestamps: true,
    paranoid: true
});

module.exports = contentLanguage;
