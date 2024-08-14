const express = require('express');
const router = express.Router();
const meetingsController = require('../controllers/meetingsController');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', meetingsController.getAllMeetings);
router.post('/', meetingsController.createMeeting);
router.put('/:id', meetingsController.updateMeeting);
router.delete('/:id', checkAdmin,  meetingsController.deleteMeeting);

module.exports = router;