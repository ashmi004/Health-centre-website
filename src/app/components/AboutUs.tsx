import React from "react";


const AboutUs = () => {
  return (
    <div
      id="about"
      className="w-full mx-auto py-10 max-w-[1440px] bg-white text-center"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-10">
        <div className="flex-1">
          <img src="/img-1.jpg" alt="provider_img" className="rounded-xl W-300px H-300px"/>
        </div>

        <div className="flex-1 text-start md:ml-10">
          <h4 className="capitalize font-bold text-center md:text-3xl leading-10 py-2 ">
            About Us
          </h4>

          <p className="text-gray-600 leading-7 tracking-wide py-3">
          The Health Centre of the Indian Institute of Technology Indore provides dedicated
          health services to the institute community comprising of students, employees,
          their dependents and Institute Guests. The Health Centre offers Outpatient, Day
          care, Trauma, and Emergency Care.IIT Indore’s Health Centre provides health services to the students, faculties, employees, guests and to the entire IIT Indore community. Some expert consultants or doctors visit the Health Centre for better treatment of the community once or twice a week.

          

          </p>
        </div>
      </div>

     
    </div>
  );
};

export default AboutUs;
