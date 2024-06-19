import React from "react";

const StaffCard = ({ img, title, desc, mail,  }) => {
  return (
    <div className="py-5 px-7 bg-white rounded-lg shadow-md text-start md:max-w-[370px] mx-auto">
      <img src={img} className="py-5 w-100 h-100" />
      <h3 className="font-bold text-xl md:text-2xl py-2">{title}</h3>
      <p className="text-gray-600 tracking-wide py-2">{desc}</p>
      <p className="text-gray-600 tracking-wide py-2">{mail}</p>
      
    </div>
  );
};

export default StaffCard;
