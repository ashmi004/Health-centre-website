import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import React from "react";
import 'tailwindcss/tailwind.css';



const Contact  = () => {
  return (
    
    <div
      id="Contact"
      className="w-full mx-auto  max-w-[1440px] bg-white text-center"
    > 
    <Header/>
    <Navbar/>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-10">
        

        <div className="flex-1 text-start md:ml-10">
          <h4 className=" font-semi-bold md:text-3xl leading-10 py-2 text-blue-600">
            Contact Us
          </h4>

          <p className=" leading-7 tracking-wide py-3 text-blue-400">
          Postal Address:
          </p>

          <p className="text-gray-600 leading-7 tracking-wide py-3">
          Health centre,
          Indian Institute of Technology Indore
          Khandwa Road, Simrol, Indore,
          Pin code 453 552, Madhya Pradesh, India

          </p>
          <p className="text-blue-400 leading-7 tracking-wide py-3">
            Contact Information:</p>
            <p className="text-gray-600 leading-7 tracking-wide py-3">
            Phone: +91 731 660 3571 </p>
            <p className="text-gray-600 leading-7 tracking-wide py-3">
            +91 731 660 3571 Ext. No. 3571 / 3187 / 3433 </p>
            <p className="text-gray-600 leading-7 tracking-wide py-3">
            Ambulance Contact No. : +91-7509062832

          </p>

          
          <h4 className=" leading-7 Tracking-wide py-3 text-blue-400">
          Email: healthcentre[at]iiti.ac.in
          </h4>
          </div>
          
          
        </div>
      </div>

     
    
  );
};

export default Contact ;
