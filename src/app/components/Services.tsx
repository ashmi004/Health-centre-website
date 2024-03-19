import React from "react";
import ServiceCard from "./ServiceCard";
import { SlCalender } from "react-icons/sl";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full mx-auto py-8 md:px-20 px-16 max-w-[1440px]"
    >
      

     

     

      {/* Services Cards */}
      <div className="flex items-center justify-between p-4 shadow-sm bg-blue-300">
        
        <ServiceCard
          icon="/calen.jpg"
          title="Updates & Upcomings"
          
        />
        <ServiceCard
          icon="/doc.jpg"
          title="Doctors & Nurses"
          
        />
        <ServiceCard
          icon="/busf.jpg"
          title="Buses & EV timings"
          
        />
        <ServiceCard
          icon="/nursef.jpg"
          title="Doctor Availability"
         
        />
        <ServiceCard
          icon="/searchf.jpg"
          title="Your Health Record"
         
        />
      </div>
    </div>
  );
};

export default Services;
