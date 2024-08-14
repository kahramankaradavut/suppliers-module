const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', paymentsController.getAllPayments);
router.post('/', paymentsController.createPayment);
router.put('/:id', paymentsController.updatePayment);
router.delete('/:id', checkAdmin,  paymentsController.deactivatePayment);

module.exports = router;