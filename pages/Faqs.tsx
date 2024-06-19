import Top from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import React from 'react'
import 'tailwindcss/tailwind.css';
import { Button } from '@/components/ui/button'

const Faqs = () => {
  return (
        
    <div className="mr-10" style={{ padding: "20px" }}> {/* Adjust the value as per your requirement */}
    <Top/>
    <Navbar/>
        <h1 className="text-blue-600 font-bold leading-10 mr-10 md:text-1xl">Q. 1 Which documents are required for the reimbursement of OPD treatment?</h1>
        <p className="text-black-600 leading-10 font-bold">Answer- a. For Consultation Charges–</p>
        <p>I) Prescription with name, age, and gender of the patient.</p>
        <p>II) Date.</p>
        <p>III) Diagnosis and treatment advice</p>
        <p>IV) Signature of consulting doctor with registration number (Mandatory).</p>

        <p>V) Receipt / Invoice for consultation charges</p>
        <p className="text-black-600 leading-10 font-bold">b. For Investigation –</p>
        <p>I) Prescription with name, age, and gender of the patient.</p>
        <p>II) Date.</p>
        <p>III) Diagnosis, treatment, and investigation advice.</p>
        <p>IV) Signature of consulting doctor with registration number</p>
        <p>V) Receipt / Invoice with name and charges for each investigation. Expenses for test packages will
not be admissible unless all the tests and cost of each test are mentioned clearly.</p>
<p className="text-black-600 leading-10 font-bold">c. For Medicine –</p>
        <p>I) Prescription with name, age, and gender of the patient.
</p>
        <p>II) Date.</p>
        <p>III) Diagnosis and treatment advice – with duration of each medication.</p>
        <p>IV) Signature of consulting doctor with registration number.</p>
        <p>V) Invoice.</p>
        <p className="text-black-600 leading-10 font-bold">Answer- a. Consultation -</p>
        <p>I) Prescription with name, age, and gender of the patient</p>
        <p>II) Date.</p>
        <p>III) Diagnosis and treatment advice.</p>
        <p>IV) Signature of consulting doctor with registration number.
</p>
        <p>V) Receipt / Invoice for consultation charges.</p>

        <h2 className="text-blue-600 font-semi-bold leading-10 font-bold mt-8">Q. 2 Which documents are required for Dental treatment?</h2>
        
        <p className="text-black-600 leading-10 font-bold">b. Investigation –</p>
        <p>I) Prescription with name, age, and gender of the patient.</p>
        <p>II) Date.
</p>
        <p>III) Diagnosis and treatment and investigation advice.</p>
        <p>IV) Pre & Post procedure X-Ray copy for each procedure with patient name and date</p>
        <p>V) Invoice with name and charges for each investigation. Expenses for test packages will not be
admissible unless all the tests and cost of each test are mentioned clearly.</p>

       
       <p className="text-black-600 leading-10 font-bold">c. Medicine –</p>
        <p>I) Prescription with name, age, gender of the patient.</p>
        <p>II) Date.</p>
        <p>III) Diagnosis and treatment advice – with duration of each medication.</p>
        <p>IV) Signature of consulting doctor with registration number</p>
        <p>V) Invoice.</p>
    </div>
  )
}

export default Faqs
