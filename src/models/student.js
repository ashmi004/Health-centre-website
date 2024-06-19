const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  department: { type: String, required: true },
  // Add more fields as per your student collection structure
});

module.exports = mongoose.models.Student || mongoose.model('Student', studentSchema);
