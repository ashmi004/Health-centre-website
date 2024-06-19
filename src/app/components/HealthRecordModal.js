// components/HealthRecordModal.js
import React, { useState } from 'react';
import axios from 'axios';

const HealthRecordModal = ({ isOpen, onClose }) => {
  const initialFormData = {
    studentRollNo: '',
    studentEmail: '',
    dateOfVisit: '',
    doctorName: '',
    doctorSpecialization: '',
    prescription: '',
    causeOfVisit: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/healthrecord', formData);
      console.log('Health record added:', response.data);
      setSuccessMessage('Health record added successfully!');
      setFormData(initialFormData); // Clear the form fields
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      // You can keep the modal open or close it based on your preference
      // onClose(); // Uncomment this line to close the modal after successful submission
    } catch (error) {
      console.error('Error adding health record:', error);
      setErrorMessage('Failed to add health record. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Add Health Record</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="studentRollNo"
            value={formData.studentRollNo}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            placeholder="Student Roll No"
            required
          />
          <input
            type="email"
            name="studentEmail"
            value={formData.studentEmail}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            placeholder="Student Email"
            required
          />
          <input
            type="date"
            name="dateOfVisit"
            value={formData.dateOfVisit}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            required
          />
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            placeholder="Doctor Name"
            required
          />
          <input
            type="text"
            name="doctorSpecialization"
            value={formData.doctorSpecialization}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            placeholder="Doctor Specialization"
            required
          />
          <textarea
            name="prescription"
            value={formData.prescription}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            rows={4}
            placeholder="Prescription"
            required
          />
          <textarea
            name="causeOfVisit"
            value={formData.causeOfVisit}
            onChange={handleChange}
            className="w-full border p-2 mb-4"
            rows={4}
            placeholder="Cause of Visit"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-black px-4 py-2 rounded-md mr-2"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-black px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="mt-4 p-2 rounded-md text-green-700 bg-green-100 border border-green-300">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mt-4 p-2 rounded-md text-red-700 bg-red-100 border border-red-300">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthRecordModal;
