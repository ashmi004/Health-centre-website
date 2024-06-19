// components/Notification.js
import React from 'react';

const Notification = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-md z-50">
      {message}
    </div>
  );
};

export default Notification;
