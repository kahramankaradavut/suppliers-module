const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');
const checkAdmin = require('../middlewares/checkAdmin');

router.get('/', projectsController.getAllProjects);
router.post('/', projectsController.createProject);
router.put('/:id', projectsController.updateProject);
router.delete('/:id', checkAdmin, projectsController.deleteProject);

module.exports = router;