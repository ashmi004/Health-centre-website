// pages/student_details.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is imported

const StudentDetails = () => {
  const { data: session, status } = useSession();
  const [student, setStudent] = useState(null);
  const [healthRecords, setHealthRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudentDetails = async () => {
      try {
        const response = await axios.get('/api/student');
        setStudent(response.data[0]); // Assuming there is only one student or you have logic to select the correct one
      } catch (error) {
        console.error("Error fetching student details:", error);
        setError("Failed to fetch student details");
      }
    };

    const fetchHealthRecords = async () => {
      try {
        if (status === 'authenticated' && session?.user?.email) {
          const response = await axios.get(`/api/healthrecord`);
          setHealthRecords(response.data);
        } else {
          console.log("User not authenticated or email not available.");
        }
      } catch (error) {
        console.error("Error fetching health records:", error);
        setError("Failed to fetch health records");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentDetails();
    fetchHealthRecords();
  }, [session, status]);

  return (
    <>
      <Header />
      <Navbar />
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/updatebg.jpg')" }}></div>
        <div className="relative bg-white bg-opacity-80">
          <div className="w-full mx-auto py-8 md:px-20 px-16 max-w-[1440px]">
            {loading ? (
              <p>Loading student details...</p>
            ) : student ? (
              <>
                <h1 className="text-2xl font-bold mb-4 align-text-top">Student Details</h1>
                <div className="flex space-x-8 mb-8">
                  <div className="w-1/2">
                    <p><span className="font-bold">Name:</span> {student.name}</p>
                    <p><span className="font-bold">Roll Number:</span> {student.rollNo}</p>
                    <p><span className="font-bold">Department:</span> {student.department}</p>
                    {/* Add more student details here */}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Your Health Records</h2>
                {healthRecords.length > 0 ? (
                  <ul className="space-y-4">
                    {healthRecords.map((record, index) => (
                      <li key={index} className="p-4 border rounded shadow-sm">
                        <p><span className="font-bold">Doctor:</span> {record.doctorName}</p>
                        <p><span className="font-bold">Specialization:</span> {record.doctorSpecialization}</p>
                        <p><span className="font-bold">Prescription:</span> {record.prescription}</p>
                        <p><span className="font-bold">Cause of Visit:</span> {record.causeOfVisit}</p>
                        <p><span className="font-bold">Date of Visit:</span> {new Date(record.dateOfVisit).toLocaleDateString()}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No health records available</p>
                )}
              </>
            ) : (
              <p>No student details available</p>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
