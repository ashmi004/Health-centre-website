import React from 'react';

const Middle = () => {
    return (
        <div className='middle section pt-10'>
            <div className=" bg-cover bg-center bg-opacity-100 " style={{ backgroundImage: "url('/counter.avif')"   }}>
        
                <div className="secContainer container mx-auto py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className='flex flex-col items-center justify-center bg-white p-8 rounded shadow'>
                            <h1 className='text-2xl font-bold mb-2'>Contact Us</h1>
                            <p >07316603187 (Emergency Section)</p>
          <p >07316603571 (OPD Section)</p>
          <p>7509062832 (Ambulance)</p>
                        </div>

                        <div className='flex flex-col items-center justify-center bg-blue-100 p-8 sm:p-0 rounded-lg sm:rounded-none'>
                            <h1 className='text-2xl font-bold mb-2'>Visit Us</h1>
                            <p className="font-bold" >Monday To Friday</p>
          <p >09:00 AM To 01:00 PM</p>
          <p >02:00 PM To 05:00 PM</p>
          <p className="font-bold" >Saturday</p>
          <p>09:00 AM To 01:00 PM</p>
                        </div>

                        <div className='flex flex-col items-center justify-center bg-white p-8 rounded shadow'>
                            <h1 className='text-2xl font-bold mb-2'>For Queries</h1>
                            <p className='font-bold'>Mail Us-</p>
                            <p>healthcentre@iiti.ac.in</p>
                            <h2 className='font-bold'>Location</h2>
                            <p >Health center</p>
          <p >IIT Indore,Khandwa Road</p>
                        </div>

                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Middle;
