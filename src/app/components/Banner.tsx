import React from 'react';
import { PiPhoneCallLight } from "react-icons/pi";


function Banner() {
  return (
    <div className="flex items-center justify-between p-4 shadow-sm bg-blue-100">
      <div className="banner-text flex">
      <h1 className="mr-40" style={{fontWeight:'bold', fontSize:'2em'}}>
  <span style={{color:'#00008B'}}>HEALTH</span>
  <span style={{color:'#4169E1'}}> CENTER</span>
</h1>
        <PiPhoneCallLight className='icon text-blue-900 text-4xl' />
        <div className="emergency mr-20 flex flex-col items-center  text-blue-900">EMERGENCY
        
        <div>97564876495</div>
        </div>
        <PiPhoneCallLight className='icon text-blue-900 text-4xl' />
        <div className="opd mr-20 flex flex-col items-center  text-blue-900">OPD SECTION
        
        <div>97564876495</div>
        </div>
        <PiPhoneCallLight className='icon text-blue-900 text-4xl' />
        <div className="ambulance mr-20 flex flex-col items-center  text-blue-900">AMBULANCE
        
        <div>97564876495</div>
        </div>
        
        
        
        
       
       
      </div>
    
    </div>
  );
}

export default Banner;
