import React from "react";

const ServiceCard = ({ icon, title, children }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-md shadow-md">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-lg font-bold">{title}</h3>
      {children && <div className="mt-2 w-full text-center">{children}</div>}
    </div>
  );
};

export default ServiceCard;
