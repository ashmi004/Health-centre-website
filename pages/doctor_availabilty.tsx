// pages/doctor-availability.tsx

import React, { useState } from 'react';
import axios from 'axios';
import EventList from '@/app/components/EventList'; // Import EventList component
import FullCalendarComponent from '@/app/components/FullCalendarComponent'; // Ensure correct import
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is imported

const DoctorAvailabilityPage = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async (date) => {
    setLoading(true);
    try {
      const formattedDate = new Date(date).toISOString().split('T')[0]; // Format date to YYYY-MM-DD
      const response = await axios.get(`/api/events?date=${formattedDate}`);
      setSelectedEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDateChange = (event) => {
    const date = event.target.value;
    setSelectedDate(date);
    fetchEvents(date);
  };

  return (
    <div >
      <Header />
      <Navbar />
      <div className="relative flex-grow">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/c.jpg')" }}></div>
        <div className="relative  bg-opacity-80 h-full flex items-center justify-center">
          <div className="container mx-auto py-8 md:px-20 px-16 max-w-[1440px]">
            <h1 className="text-3xl font-bold mb-4 text-center">Check Doctor Availability</h1>
            <h3 className=" mb-4">Select a date</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="border p-2 rounded w-full mb-4"
                />
                <div className="bg-gray-100 p-4 rounded shadow-lg">
                  <h2 className="text-xl font-bold mb-4">Events</h2>
                  {loading ? (
                    <p>Loading events...</p>
                  ) : (
                    <EventList events={selectedEvents} />
                  )}
                </div>
              </div>
              {/* <div className="bg-white p-4 rounded shadow-lg">
                <FullCalendarComponent />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorAvailabilityPage;
