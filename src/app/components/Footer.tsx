import React from "react";

const Footer = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-10 px-20 relative z-20 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 md:gap-3 text-black">
        <div>
          <div className="flex justify-start items-center my-4">
            <div>
              <h1 className="mr-40" style={{fontWeight:'bold', fontSize:'1.5em', whiteSpace: 'nowrap',color:'#00008B'}}>
                HEALTH CENTER
              </h1>
              <p className="font-bold text-blue-900">EMAIL</p>
              <p>healthcentre@iiti.ac.in</p>
            </div>
          </div>
        </div>

        <div className="p-3">
          <h6 className="text-blue-900 font-bold">LOCATION</h6>
          <p >Health center</p>
          <p >IIT Indore,Khandwa Road</p>
          <p >MP-452020</p>
        </div>

        <div className="p-3">
          <h6 className="text-blue-900 font-bold ">CONTACT US</h6>
          <p >07316603187 (Emergency Section)</p>
          <p >07316603571 (OPD Section)</p>
          <p>7509062832 (Ambulance)</p>
        </div>

        <div className="p-3">
          <h6 className="text-blue-900  font-bold ">WORKING HOURS</h6>
          <p className="font-bold" >Monday To Friday</p>
          <p >09:00 AM To 01:00 PM</p>
          <p >02:00 PM To 05:00 PM</p>
          <p className="font-bold" >Saturday</p>
          <p>09:00 AM To 01:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
