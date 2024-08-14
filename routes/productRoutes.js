const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', productsController.getAllProducts);
router.post('/', productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', checkAdmin, productsController.deactivateProduct);

module.exports = router;