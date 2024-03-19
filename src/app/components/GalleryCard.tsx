import React from "react";

const GalleryCard = ({ icon }) => {
  return (
    <div className="py-1 px-2 bg-white rounded-lg shadow-md text-start md:max-w-[370px] mx-auto cursor-pointer">
      <img src={icon} className="py-5" />
      
      
    </div>
  );
};

export default GalleryCard;

