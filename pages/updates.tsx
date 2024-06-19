import React, { useEffect, useState } from "react";
import axios from "axios";
import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is imported
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";

const UpdatesPage = () => {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get('/api/updates');
        setUpdates(response.data);
      } catch (error) {
        console.error("Error fetching updates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/updatebg.jpg')" }}></div>
        <div className="relative bg-white bg-opacity-80">
          <div className="w-full mx-auto py-8 md:px-20 px-16 max-w-[1440px]">
            <h1 className="text-2xl font-bold mb-4 align-text-top">Announcements</h1>
            {loading ? (
              <p>Loading updates...</p>
            ) : updates.length > 0 ? (
              <ul className="space-y-4">
                {updates.map((update, index) => (
                  <li key={index} className="p-4 border rounded shadow-sm">
                    {update.content}
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

export default UpdatesPage;
