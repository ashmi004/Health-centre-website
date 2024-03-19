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
              className="rounded-xl object-cover w-12 h-12 ml-1 mr-3"
            />
          </div>
          {/* Text */}
          <div>
            <h4 className="capitalize font-bold md:text-3xl mr-8">
              Indian Institute of Technology, Indore
            </h4>
            <h4 className="capitalize font-bold leading-tight py-2">
              भारतीय प्रौद्योगिकी संस्थान इंदौर
            </h4>
          </div>
        </div>

        {/* Health Center */}
        <div className="absolute top-4 right-6">
          <p className="leading-6 font-bold text-blue-600 text-2xl">Health Center-स्वास्थ्य केंद्र</p>
        </div>
      </div>
      <div className="bg-blue-900 h-1 w-100%"></div>
    </div>
  );
};

export default Top;
