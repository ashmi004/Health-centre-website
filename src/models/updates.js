// src/models/update.js
import mongoose, { Schema } from 'mongoose';

const updateSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Update = mongoose.models.Update || mongoose.model('Update', updateSchema);

export default Update;
