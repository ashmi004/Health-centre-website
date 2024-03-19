import React from "react";
import DoctorsCard from "./DoctorsCard";

const Doctors = () => {
  return (
    <div
      id="our Doctors"
      className="w-full mx-auto py-8 md:px-20 px-16 max-w-[1440px] bg-[#f5faff] text-center"
    >
      <h1 className="text-3xl md:text-4xl font-bold py-4">Our Doctors</h1>

      <div className="w-[10%] h-[2px] mx-auto my-2 bg-black" />

      <p className="text-black-400 py-4 md:max-w-[800px] mx-auto leading-9 tracking-wide">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      {/* Gallery Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-4">
        <DoctorsCard
          img="/img-6A.jpg"
          title="DR.Shilpa Raut"
          desc="Designation : Chief Medical Officer (NFSG)"
          mail="Email : cmo [at] iiti.ac.in"
          phone="Phone : +91-731-660 (Ext.3176)"
        />
        <DoctorsCard
          img="/img-4A.jpg"
          title="Dr.Rakesh Gupta"
          desc="Designation : Physician "
          mail="Email : rakeshgupta [at] iiti.ac.in"
          phone="Phone : +91-731-660 (Ext.3374)"
        />
        <DoctorsCard
          img="/img-3A.jpg"
          title="Dr.Pankhuri Mehta"
          desc="Designation : Physiotherapist"
          mail="Email : pankhurimehta [at] iiti.ac.in"
          phone="Phone : +91-731-660 (Ext.3517)"
        />
        <DoctorsCard
          img="/img-2A.jpg"
          title="Dr.Amey Joglekar"
          desc="Designation : Residential Medical Officer"
          mail="Email : joglekaramey [at] iiti.ac.in"
          phone="Phone : +91-731-660 (Ext.3374)"
        />
        <DoctorsCard
          img="/img-5A.jpg"
          title="Dr.Nikhil Mishra"
          desc="Designation : Residential Medical Officer"
          mail="Email : nikhilmishra [at] iiti.ac.in"
          phone="Phone : +91-731-660 (Ext. 3374)"
        />
        <DoctorsCard
          img="/img-1A.jpg"
          title="Dr.Vishal choudhary"
          desc="Designation : Medical Officer"
          mail="Email : # [at] iiti.ac.in"
          phone="Phone : +91-731-660 (Ext.)"
        />
      </div>
    </div>

  );
};

export default Doctors;
