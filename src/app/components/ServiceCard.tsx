import React from "react";

const ServiceCard = ({ icon, title }) => {
  return (
    <div className="py-1 px-2 bg-white rounded-lg shadow-md text-start md:max-w-[170px] mx-auto cursor-pointer hover:bg-gray-200">
      <img src={icon} className="py-5" />
      <h3 className=" text-center md:text-2xl py-2">{title}</h3>
      
    </div>
  );
};

export default ServiceCard;
