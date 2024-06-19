"use client";
import React, { useState } from "react";
import AccordionUI from "./AccordionUI";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      id: 1,
      question: "Q. 1 Which documents are required for the reimbursement of OPD treatment?",
      answer: `
      **Consultation Charges**:
      - Prescription with name, age, and gender of the patient.
      - Date.
      - Diagnosis and treatment advice.
      - Signature of consulting doctor with registration number (Mandatory).
      - Receipt / Invoice for consultation charges.
      
      **Investigation**:
      - Prescription with name, age, and gender of the patient.
      - Date.
      - Diagnosis, treatment, and investigation advice.
      - Signature of consulting doctor with registration number.
      - Receipt / Invoice with name and charges for each investigation. Expenses for test packages will not be admissible unless all the tests and cost of each test are mentioned clearly.
      
      **Medicine**:
      - Prescription with name, age, and gender of the patient.
      - Date.
      - Diagnosis and treatment advice – with duration of each medication.
      - Signature of consulting doctor with registration number.
      - Invoice
      `,
    },
    {
      id: 2,
      question: "Q. 2 Which documents are required for Dental treatment?",
      answer: `
      **Consultation**:
      - Prescription with name, age, and gender of the patient.
      - Date.
      - Diagnosis and treatment advice.
      - Signature of consulting doctor with registration number.
      - Receipt / Invoice for consultation charges.
      
      **Investigation**:
      - Prescription with name, age, and gender of the patient.
      - Date.
      - Diagnosis and treatment and investigation advice.
      - Pre & Post procedure X-Ray copy for each procedure with patient name and date.
      - Invoice with name and charges for each investigation. 
      Expenses for test packages will not be admissible unless all the tests and cost of each test are mentioned clearly.
      
      **Medicine**:
      - Prescription with name, age, gender of the patient.
      - Date.
      - Diagnosis and treatment advice – with duration of each medication.
      - Signature of consulting doctor with registration number.
      - Invoice
      `,
    },
    {
      id: 3,
      question: "Q. 3 How to access your health record as a student of IIT Indore?",
      answer: `
      You first have to login using your institute ID either from the Sign In option or by clicking the Your Health Record option. After a successful login, students can see their Personal Health Record.
      `,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:mt-32 md:mx-20 p-10 rounded-xl h-auto py-20 bg-gray-50">
      <div className="md:w-1/2">
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        {data.map((item) => (
          <div key={item.id} className="w-full mb-4">
            <AccordionUI
              title={item.question}
              Id={item.id}
              children={item.answer}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        ))}
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img src="/faq.jpg" alt="FAQ Image" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Accordion;
