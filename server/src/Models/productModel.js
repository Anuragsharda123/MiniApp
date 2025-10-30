const { DataTypes, Model, Optional } = require('sequelize');
const sequelize = require('../Config/db');
const { v4: UUIDV4 } = require('uuid');  // using dynamic import()
const generateRandNumber = require('../Utils/randonNumberGenerator');

class Product extends Model{};

Product.init({
    id:{
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true 
    },

    productName: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    inPrice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

    unit: {
        type: DataTypes.STRING,
        allowNull: false
    },

    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    articleNumber:{
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },

    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },

    createdBy:{
        type: DataTypes.INTEGER,
        allowNull: true
    },

    updatedBy:{
        type: DataTypes.INTEGER,
        allowNull: true
    }

}, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true,
    paranoid: true,
    hooks: {
        beforeCreate: async (product, options) => {
            // Ensure the random number is unique before saving
            let isUnique = false;
            while (!isUnique) {
                const randomNum = generateRandNumber();
                const existingProduct = await Product.findOne({
                    where: { articleNumber: randomNum }
                });

                if (!existingProduct) {
                    // If the random number is unique, set it
                    product.articleNumber = randomNum;
                    isUnique = true;
                }
            }
        }
    }
});

module.exports = Product;
