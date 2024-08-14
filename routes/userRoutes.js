const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', usersController.getAllUsers);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', checkAdmin, usersController.deactivateUser);

module.exports = router;