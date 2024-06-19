"use client";

import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import 'tailwindcss/tailwind.css';
import { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div>
      <Header />
      <Navbar />

      <form onSubmit={handleSubmit} className="py-4 mt-2 border-t flex flex-col gap-4">
        <div className="p-4 max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-400 text-center md:text-3xl leading-10 p-4">Feedback Form</h1>
          <p><strong>Please fill in the form below</strong></p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="fullname" className="mb-1">Full Name</label>
              <input
                type="text"
                id="fullname"
                className="border border-gray-300 rounded-md shadow-md px-2 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                placeholder="Your Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-1">Email</label>
              <input
                type="text"
                id="email"
                className="border border-gray-300 rounded-md shadow-md px-2 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
                placeholder="Your Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message">Message</label>
            <textarea
              className="border border-gray-300 rounded-md shadow-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-48 w-full"
              id="message"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="bg-blue-700 p-3 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100" type="submit">
            Send
          </button>
        </div>
      </form>

      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e, index) => (
            <div key={index} className={`${success ? "text-green-800" : "text-red-600"} px-5 py-2`}>
              {e}
            </div>
          ))}
      </div>
    </div>
  );
}
