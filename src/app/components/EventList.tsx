// components/EventList.tsx

import React from 'react';

const EventList = ({ events }) => (
  <div className="mt-8">
    {events.length > 0 ? (
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="p-4 border rounded shadow-sm">
            <h3 className="font-bold">{event.eventName}</h3>
            <p>{event.description}</p>
            <p className="text-sm text-gray-500">{new Date(event.date).toDateString()}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>No events available for this date.</p>
    )}
  </div>
);

export default EventList;
