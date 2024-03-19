import React from 'react';

interface propsType{
    img:string;
    title:string;
}

const Slide: React.FC<propsType> = ({img}) => {
    return (
        <div className="outline-none border-none relative ">
            <div className="absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50% -translate-y-[50% space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none]">
                
            </div>

            <img
                className="rounded-xl object-cover object-right md:object-left-bottom"
                src={img}
                // alt="banner"
                // style={{ width: '100%', height: 'auto' }} // Adjust size here
            />
        </div>
    );
};

export default Slide;
