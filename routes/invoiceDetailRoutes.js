const express = require('express');
const router = express.Router();
const invoiceDetailsController = require('../controllers/invoiceDetailsController');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', invoiceDetailsController.getAllInvoiceDetails);
router.post('/', invoiceDetailsController.createInvoiceDetail);
router.put('/:id', invoiceDetailsController.updateInvoiceDetail);
router.delete('/:id', checkAdmin,  invoiceDetailsController.deactivateInvoiceDetail);

module.exports = router;