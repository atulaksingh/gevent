import React from "react";

function TrustedVenderCard(props) {
  return (
    <>
      <div className="grid grid-rows-4 gap-5">
      {props.data.map((item,index)=>(
        <div key={index} className="row-span-1">
        <div className="flex ">
        <div className="text-[50px] text-right">{item.number}</div>
          <div className="mx-10">
            <div className="text-2xl mt-3 text-[#D7F205]">{item.title}</div>
            <div className="text-base text-gray-300">
              {item.desc}
            </div>
          </div>
        </div>
          
        </div>
      ))}
     
        {/* <div className="row-span-1">
        <div className="flex ">
        <div className="text-[50px] text-right">01</div>
          <div className="mx-10">
            <div className="text-2xl mt-3 text-[#D7F205]">Explain The Concept</div>
            <div className="text-base text-gray-300">
              Nunc quis consequat urna, a rhoncus lectus. Ut aliquam id sem quis
              rutrum. Donec lacinia id lectus quis posuere.
            </div>
          </div>
        </div>
          
        </div> */}
      </div>
    </>
  );
}

export default TrustedVenderCard;
