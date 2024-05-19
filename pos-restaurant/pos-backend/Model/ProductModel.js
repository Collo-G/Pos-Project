const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('pos_products', {   
        Product_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Product_Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Product_Price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Product_Description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
    });

    return Product;
};
