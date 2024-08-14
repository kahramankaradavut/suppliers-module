const projectModel = require('../models/projectModel');

const getAllProjects = async (req, res) => {
    try {
        const projects = await projectModel.getAllProjects();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createProject = async (req, res) => {
    try {
        const project = await projectModel.createProject(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateProject = async (req, res) => {
    try {
        const project = await projectModel.updateProject(req.params.id, req.body);
        res.json(project);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteProject = async (req, res) => {
    try {
        await projectModel.deleteProject(req.params.id);
        res.send('Project deleted');
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllProjects,
    createProject,
    updateProject,
    deleteProject
};