// components/FullCalendarComponent.tsx

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import axios from 'axios';

const FullCalendarComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events'); // Replace with your API endpoint
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDateClick = async (clickInfo) => {
    const clickedDate = clickInfo.dateStr; // Date string in YYYY-MM-DD format
    try {
      const response = await axios.get(`/api/events?date=${clickedDate}`);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events for date:', error);
    }
  };

  return (
    <div style={{ height: '500px' }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={events.map((event) => ({
          title: event.eventName,
          start: new Date(event.date), // Assuming event.date is a valid Date or ISO string
          // Optionally, include end date if available: end: new Date(event.endDate)
        }))}
        dateClick={handleDateClick} // Handle date click events
        className="w-full h-full" // Adjust width and height as needed
      />
    </div>
  );
};

export default FullCalendarComponent;
