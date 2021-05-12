const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model{}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        projectName: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        github: {
            type: DataTypes.STRING,
            allowNull:false,
        }
    },
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'Project',
        },
);

module.exports = Project;