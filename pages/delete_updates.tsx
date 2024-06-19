import React, { useEffect, useState } from "react";
import axios from "axios";
import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is imported
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";

const DeleteUpdatePage = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    try {
      const response = await axios.get('/api/updates');
      setUpdates(response.data);
    } catch (error) {
      console.error('Error fetching updates:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/updates?id=${id}`);
      setUpdates(updates.filter(update => update._id !== id));
      setSuccessMessage('Update deleted successfully');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear the message after 3 seconds
    } catch (error) {
      console.error('Error deleting update:', error);
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
            <h1 className="text-2xl font-bold mb-4 align-text-top">Delete Updates</h1>
            {successMessage && (
              <div className="mb-4 p-4 text-green-800 bg-green-100 border border-green-200 rounded">
                {successMessage}
              </div>
            )}
            {loading ? (
              <p>Loading updates...</p>
            ) : updates.length > 0 ? (
              <ul className="space-y-4">
                {updates.map((update) => (
                  <li key={update._id} className="p-4 border rounded shadow-sm flex justify-between items-center">
                    <span>{update.content}</span>
                    <button
                      onClick={() => handleDelete(update._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No updates available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUpdatePage;
