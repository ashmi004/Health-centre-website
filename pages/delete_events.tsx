// pages/DeleteEventsPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is imported
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";

const DeleteEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/events'); // Update to '/api/events' if necessary
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/events?id=${id}`); // Update to '/api/events' if necessary
      setEvents(events.filter(event => event._id !== id));
      setSuccessMessage('Event deleted successfully');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear the message after 3 seconds
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div>
      <Header />
      <Navbar />
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/updatebg.jpg')" }}></div>
        <div className="relative bg-white bg-opacity-80">
          <div className="w-full mx-auto py-8 md:px-20 px-16 max-w-[1440px]">
            <h1 className="text-2xl font-bold mb-4 align-text-top">Delete Events</h1>
            {successMessage && (
              <div className="mb-4 p-4 text-green-800 bg-green-100 border border-green-200 rounded">
                {successMessage}
              </div>
            )}
            {loading ? (
              <p>Loading events...</p>
            ) : events.length > 0 ? (
              <ul className="space-y-4">
                {events.map((event) => (
                  <li key={event._id} className="p-4 border rounded shadow-sm flex justify-between items-center">
                    <span>{event.eventName}</span> {/* Display event name */}
                    <span>{event.description}</span> {/* Display event details */}
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No events available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteEventsPage;
