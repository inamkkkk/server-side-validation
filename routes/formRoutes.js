const express = require('express');
const formController = require('../controllers/formController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { validateFormData } = require('../middlewares/validationMiddleware');

const router = express.Router();

router.post('/submit', authenticateToken, validateFormData, formController.submitForm);

module.exports = router;