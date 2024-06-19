// models/Event.js
import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Event || mongoose.model('Event', EventSchema);
