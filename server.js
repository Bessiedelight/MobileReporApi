require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const medicalReportRoutes = require('./routes/medicalReportRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/medical-reports', medicalReportRoutes);

// MongoDB Atlas Connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(3000, () => console.log('Server is running on port 3000'));
  })
  .catch(err => console.error('Could not connect to MongoDB Atlas', err));

// Basic route to test server
app.get('/', (req, res) => {
  res.send('Medical Report API is running');
});