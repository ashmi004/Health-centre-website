// components/EventModal.js
import React, { useState } from 'react';
import axios from 'axios';

const EventModal = ({ isOpen, onClose }) => {
  const [date, setDate] = useState('');
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddEvent = async () => {
    try {
      await axios.post('/api/events', { date, eventName, description });
      setDate('');
      setEventName('');
      setDescription('');
      setSuccessMessage('Event added successfully!');

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Add Event</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border p-2 mb-4"
        />
        <input
          type="text"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="w-full border p-2 mb-4"
          placeholder="Event Name"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border p-2 mb-4"
          rows={4}
          placeholder="Enter event details here..."
        />
        <div className="flex justify-end">
          <button
            onClick={handleAddEvent}
            className="bg-blue-500 text-black px-4 py-2 rounded-md mr-2"
          >
            Add
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-black px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
        {successMessage && (
          <div className="mt-4 p-2 rounded-md text-green-700 bg-green-100 border border-green-300">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventModal;
