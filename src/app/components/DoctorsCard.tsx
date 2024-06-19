import React from "react";

const DoctorsCard = ({ img, title, desc, mail, phone }) => {
  return (
    <div className="py-5 px-7 bg-white rounded-xl shadow-md text-start md:max-w-[370px] mx-auto">
      <img src={img} className="py-5" />
      <h3 className="font-bold text-xl md:text-2xl py-2">{title}</h3>
      <p className="text-gray-600 tracking-wide py-2">{desc}</p>
      <p className="text-gray-600 tracking-wide py-2">{mail}</p>
      <p className="text-gray-600 tracking-wide py-2">{phone}</p>
    </div>
  );
};

export default DoctorsCard;
