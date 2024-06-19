import React from "react";
import 'tailwindcss/tailwind.css';
import StaffCard from "../src/app/components/StaffCard";
import Navbar from "@/app/components/Navbar";
import Top from "@/app/components/Header";

const Staff = () => {
  return (
    <div>
      <Top/>
      <Navbar/>
    <div
      id="our Staff"
      className="w-full mx-auto py-8 md:px-20 px-16 max-w-[1440px] bg-[#f5faff] text-center"
    >
     
      <h1 className="text-3xl md:text-4xl font-bold py-4">Our Staff</h1>

      <div className="w-[10%] h-[2px] mx-auto my-2 bg-black" />

      <p className="text-black-400 py-4 md:max-w-[800px] mx-auto leading-9 tracking-wide">
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </p>

      {/* Gallery Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-4">
        <StaffCard
          img="/rs.jpg"
          title="Ms. Rajni Sharma"
          desc="Staff Nurse"
          mail="Email : rajnisharma [at] iiti.ac.in"
          
        />
        <StaffCard
          img="/ms.jpg"
          title="Ms. Meenaxi Sen"
          desc="Staff Nurse "
          mail="Email : meenaxis [at] iiti.ac.in"
          
        />
        <StaffCard
          img="/Sunita.jpg"
          title="Ms. Sunita Verma"
          desc="Staff Nurse"
          mail="Email : sunitav [at] iiti.ac.in"
          
        />
        <StaffCard
          img="/dolly.jpg"
          title="Ms. Dolly Parkhe"
          desc="Staff Nurse"
          mail="Email : dollyparkhe [at] iiti.ac.in"
          
        />
        <StaffCard
          img="/ranju.jpg"
          title="Ms. Renju Chacko"
          desc="Staff Nurse"
          mail="Email : nikhilmishra [at] iiti.ac.in"
          
        />
        <StaffCard
          img="/sef.jpg"
          title="Ms. Shephalee Gujare"
          desc="Staff Nurse"
          mail="Email : shephalee [at] iiti.ac.in"
          
        />
        <StaffCard
          img="/tarun.jpg"
          title="Mr. Tarun Birla"
          desc="Staff Nurse"
          mail="Email : # [at] iiti.ac.in"
          
        />

        <StaffCard
          img="/pf.jpg"
          title="Ms. Pooja Tiwari"
          desc="Pharmacist"
          mail="Email : poojatiwari [at] iiti.ac.in"
          
        />
        <StaffCard
          img="/ranu.jpg"
          title="Mr. Ranu Rai"
          desc="Pharmacist"
          mail="Email : ranurai [at] iiti.ac.in"
          
        />
        <StaffCard
          img="/bhupesh.jpg"
          title="Mr. Bhupesh Ujiwal"
          desc="Pharmacist"
          mail="Email : bhupesh [at] iiti.ac.in"
          
        />
        
        <StaffCard
          img="/kiran.jpg"
          title="Ms. Kiran Sankhla"
          desc="Junior Assistant"
          mail="Email : kiransankhla [at] iiti.ac.in"
          
        />
        <StaffCard
          img="/ashish.jpg"
          title="Ashish Chawda"
          desc="Junior Attendant (Multi-Skilled)"
          mail="Email : ashishchawda [at] iiti.ac.in"
    
          
        />
        <StaffCard
          img="/sunil.jpg"
          title="Mr. Sunil Chouhan"
          desc="Ward Boy"
          mail="Email : schouhan [at] iiti.ac.in"
          
        />
        <StaffCard
          img="/indira.jpg"
          title="Ms. Indra Kumayu"
          desc="Ward Girl"
          mail=""
          
        />

        <StaffCard
          img="/priti.jpg"
          title="Ms. Priti Chouhan"
          desc="Ward Girl"
          mail=""
          />
          </div>

           <h1 className="text-3xl md:text-4xl font-semi-bold py-4 text-blue-600 text-center" >VISITING CONSULTANTS TIMING SCHEDULE</h1>
            <p className="text-black-600 leading-7 tracking-wide py-3  textAlign: 'right'">
            1. Dr. Sumit Kulkarni, Dentist,[Tuesday & Friday]</p>
            <p className="text-black-600 leading-7 tracking-wide py-3">
            2. Dr. Sushma Jhamad, Gynaecologist,[Every Tuesday]</p>
            <p className="text-black-600 leading-7 tracking-wide py-3">
            3. Dr. Rashmi Shad, Pediatrician[Every Tuesday]</p>
            <p className="text-black-600 leading-7 tracking-wide py-3">
            4. Dr. Ashutosh Singh, Psychiatrist[1st & 3rd Wednesday]</p>
            <p className="text-black-600 leading-7 tracking-wide py-3">
            5. Dr. Norman Sharma, Physician ,[Every Thursday]</p>
            <p className="text-black-600 leading-7 tracking-wide py-3">
            6. Dr. Sameer Nivsarkar, E. N. T.[Every Tuesday]</p>
            <p className="text-black-600 leading-7 tracking-wide py-3">
            7. Dr. Mahesh Kumar Somani, Ophthalmologist[Every Friday]</p>
            <p className="text-black-600 leading-7 tracking-wide py-3">
            8. Dr. Shruti Kochar Maru, Ophthalmologist,[Once a month]</p>
            <p className="text-black-600 leading-7 tracking-wide py-3">
            9. Dr. Arjun Wadhwani, Orthopedics[Twice a month]</p>
            <p className="text-black-600 leading-7 tracking-wide py-3">
            10. Dr. Sarita Rao, Cardiologist[Once a Month]</p>
            <p className="text-black-600 leading-7 tracking-wide py-3">
            11. Dr. Neha Roy, Neurologist[Once a Month]</p>
            <p className="text-gray-600 leading-7 tracking-wide py-3">
            12. Dr. Shrikant Phatak, E. N. T.[Once a Month]</p>
            <p className="text-gray-600 leading-7 tracking-wide py-3">
            13. Dr. Jitendra Keswani, Psychiatrist[Every Thursday]</p>
            <p className="text-gray-600 leading-7 tracking-wide py-3">
            14. Dr. Deepshikha Sharma, Pediatrician[Every Saturday]</p>
            <p className="text-gray-600 leading-7 tracking-wide py-3">
            15. Dr. A Sheeba Prasanna Kumari, Dentist[Every Wednesday]</p>
            <p className="text-gray-600 leading-7 tracking-wide py-3">
            16. Dr. Priya Chitale, Nutritionist[Every Thursday]</p>
            <p className="text-gray-600 leading-7 tracking-wide py-3">
            17. Dr. Shrikanth Reddy, Psychiatrist[Once a Month]</p>







        

        

        





      
    </div>
    </div>


  );
};

export default Staff;
