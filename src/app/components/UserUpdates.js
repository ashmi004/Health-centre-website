// components/UserUpdates.js
"use client";

import React, { useEffect, useState } from 'react';

const UserUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      const response = await fetch('/api/updates');
      const data = await response.json();
      setUpdates(data);
    };
    fetchUpdates();
  }, []);

  return (
    <div>
      <h1>Latest Updates</h1>
      <ul>
        {updates.map((update) => (
          <li key={update._id}>{update.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserUpdates;
