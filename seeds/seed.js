const sequelize = require('../config/connection');

const Project = require('../models/Project');

const projectData = require('./projectData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await Project.bulkCreate(projectData, {
        returning: true,
    });
    console.log('Seeded!');
    process.exit(0);
};
seedDatabase();