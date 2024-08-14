const userModel = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !password || !email) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const user = await userModel.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        if (error.message === 'Email already in use') {
            return res.status(409).json({ error: 'Email already in use' });
        }
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await userModel.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deactivateUser = async (req, res) => {
    try {
        await userModel.deactivateUser(req.params.id);
        res.send('User deactivated');
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deactivateUser
};