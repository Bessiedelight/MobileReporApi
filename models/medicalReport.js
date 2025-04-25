const mongoose = require('mongoose');

const medicalReportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  contactNumber: { type: String },
  address: { type: String },
  email: { type: String },
  hospitalName: { type: String, required: false },
  diagnosis: { type: String, required: false },
  symptoms: { type: [String], required: false },
  medications: { type: [{ name: String, dosage: String }], required: false },
  prescription: { type: [String] },
  notes: { type: String },
  Date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('MedicalReport', medicalReportSchema);