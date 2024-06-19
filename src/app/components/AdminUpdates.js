// components/AdminUpdates.js
"use client";

import React, { useState, useEffect } from 'react';

const AdminUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [newUpdate, setNewUpdate] = useState('');

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    const response = await fetch('/api/updates');
    const data = await response.json();
    setUpdates(data);
  };

  const handleAddUpdate = async () => {
    await fetch('/api/updates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newUpdate }),
    });
    setNewUpdate('');
    fetchUpdates();
  };

  const handleDeleteUpdate = async (id) => {
    await fetch(`/api/updates?id=${id}`, {
      method: 'DELETE',
    });
    fetchUpdates();
  };

  return (
    <div>
      <h1>Add Updates</h1>
      <input
        type="text"
        value={newUpdate}
        onChange={(e) => setNewUpdate(e.target.value)}
      />
      <button onClick={handleAddUpdate}>Add Update</button>
      <ul>
        {updates.map((update) => (
          <li key={update._id}>
            {update.content}
            <button onClick={() => handleDeleteUpdate(update._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUpdates;
