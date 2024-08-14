const express = require('express');
const router = express.Router();
const suppliersController = require('../controllers/suppliersController');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', suppliersController.getAllSuppliers);
router.post('/', suppliersController.createSupplier);
router.put('/:id', suppliersController.updateSupplier);
router.delete('/:id', checkAdmin, suppliersController.deactivateSupplier);

module.exports = router;