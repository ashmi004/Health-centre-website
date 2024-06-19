// src/models/HealthRecord.js
import mongoose from 'mongoose';

const healthRecordSchema = new mongoose.Schema({
  studentRollNo: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    required: true,
  },
  dateOfVisit: {
    type: Date,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
  doctorSpecialization: {
    type: String,
    required: true,
  },
  prescription: {
    type: String,
    required: true,
  },
  causeOfVisit: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const HealthRecord = mongoose.models.HealthRecord || mongoose.model('HealthRecord', healthRecordSchema);

export default HealthRecord;
