const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', categoriesController.getAllCategories);
router.post('/', categoriesController.createCategory);
router.put('/:id', categoriesController.updateCategory);
router.delete('/:id', checkAdmin, categoriesController.deleteCategory);

module.exports = router;