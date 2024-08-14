const categoryModel = require('../models/categoryModel');

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryModel.getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createCategory = async (req, res) => {
    try {
        const category = await categoryModel.createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const updateCategory = async (req, res) => {
    try {
        const category = await categoryModel.updateCategory(req.params.id, req.body);
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const deleteCategory = async (req, res) => {
    try {
        await categoryModel.deleteCategory(req.params.id);
        res.send('Category deleted');
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
};