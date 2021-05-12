const router = require('express').Router();
const Project = require('../models/Project');

router.get('/', async (req,res) => {
    try {
        const projData = await Project.findAll({});
        const projects = projData.map((proj)=>proj.get({plain:true}));
        console.log(projects);
        res.render('homepage',{
            proj: projects
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/skills', async (req,res) => {
    try {
        res.render('skills');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/contact', async (req,res) => {
    try {
        res.render('contact');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;