const express = require('express');
const router = express.Router();
const medicalReportController = require('../controllers/medicalReportController');

router.post('/', medicalReportController.createMedicalReport);
router.get('/:username', medicalReportController.getMedicalReportsByUsername);

module.exports = router;