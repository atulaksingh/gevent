import React from "react";

function TrustedVenderCard(props) {
  return (
    <>
      <div className="grid grid-rows-4 sm:gap-5">
      {props.data.map((item,index)=>(
        <div data-aos="fade-right" key={index} className=" sm:row-span-1">
        <div className="flex flex-col sm:flex-row">
        <div className="text-[40px] md:text-[55px]  font-[Syne] sm:text-right font-bold">{item.number}</div>
          <div className="mx-0 sm:mx-10">
            <div className="text-lg md:text-2xl mt-3 font-bold text-[#DF2844] font-[Syne]">{item.title}</div>
            <div className="text-base text-gray-300 line-clamp-2">
              {item.desc}
            </div>
          </div>
        </div>
          
        </div>
      ))}
     
  
      </div>
    </>
  );
}

export default TrustedVenderCard;
