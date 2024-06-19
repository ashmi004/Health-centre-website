//UpdateModal.js file
import React, { useState } from 'react';
import axios from 'axios';

const UpdateModal = ({ isOpen, onClose }) => {
  const [newUpdate, setNewUpdate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAddUpdate = async () => {
    try {
      await axios.post('/api/updates', { content: newUpdate });
      setNewUpdate(''); // Clear the text box
      setSuccessMessage('Update added successfully!'); // Set success message

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error adding update:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Add Update</h2>
        <textarea
          value={newUpdate}
          onChange={(e) => setNewUpdate(e.target.value)}
          className="w-full border p-2 mb-4"
          rows={4}
          placeholder="Enter your update here..."
        />
        <div className="flex justify-end">
          <button
            onClick={handleAddUpdate}
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

export default UpdateModal;
