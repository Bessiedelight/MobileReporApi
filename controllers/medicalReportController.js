const MedicalReport = require('../models/medicalReport');

async function createMedicalReport(req, res) {
  try {
    const report = new MedicalReport(req.body);
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getMedicalReportsByUsername(req, res) {
  try {
    const username = req.params.username;
    const reports = await MedicalReport.find({ username });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createMedicalReport, getMedicalReportsByUsername };