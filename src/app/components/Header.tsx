import React from "react";

const Top = () => {
  return (
    <div id="about" className="max-w-screen-lg mx-auto">
      <div className="flex items-center justify-between md:justify-start">
        {/* Logo and Text */}
        <div className="flex items-center ml-0">
          {/* Image */}
          <div className="mr-4 absolute top-4 left-1">
            <img
              src="/logo.jpg"
              alt="provider_img"
              className="rounded-xl object-cover w-20 h-18 ml-1 mr-3"
            />
          </div>
          {/* Text */}
          <div>
            <h4 className="capitalize font-bold md:text-3xl mr-8">
              Indian Institute of Technology, Indore
            </h4>
            <h4 className="capitalize font-bold leading-tight py-2 text-1xl">
              भारतीय प्रौद्योगिकी संस्थान इंदौर
            </h4>
            <div className="bg-blue-900 h-0.5 w-60%"></div>
           
          <p className="leading-6 font-bold text-2xl pt-2 pb-2">Health Center-स्वास्थ्य केंद्र</p>
        
          </div>
        </div>

        {/* Health Center */}
        
      </div>
     
    </div>
  );
};

export default Top;
