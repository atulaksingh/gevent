import React, { useState } from "react";
import { useSpring,animated } from "react-spring";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Exprience(props) {
  const [counterOn,setCounterOn] = useState(false)
  return (
    <>
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>

      <div
        class="bg-fixed w-full lg:h-92 bg-no-repeat bg-cover bg-top "
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1680328220/325896687_1344318806392330_3201923214306674348_n_s6g7eu.jpg)",
        }}
      >
                      {/* color=""#bfcc58 */}
        <div className="bg-gradient-to-b from-[#984552] sm:bg-gradient-to-b sm:from-[#DF2844]">
          <div className=" flex flex-wrap gap-10 justify-center  py-28 font-[Syne]">
            <div className=" text-white w-[290px] border-2 border-white py-10">
              <h1 className="flex  justify-center">
                <span className="text-[50px] text-[#DF2844] font-[Syne]">
                {counterOn &&  <CountUp start={0} end={200} duration={2} delay={0} />}
               
                </span>{" "}
                <span className="font-bold font-[Syne]">+</span>
              </h1>
              <div className="text-lg text-center font-bold">
              Clients
              </div>
            </div>
            <div className=" text-white w-[290px] border-2 border-white py-10">
              <h1 className="flex  justify-center">
                <span className="text-[50px] text-[#DF2844] font-bold"> {counterOn &&  <CountUp start={0} end={1000} duration={2} delay={0} />}</span>{" "}
                <span className="font-bold">+</span>
              </h1>
              <div className="text-lg text-center font-bold">
              Shows 
              </div>
            </div>
            <div className=" text-white w-[290px] border-2 border-white py-10">
              <h1 className="flex  justify-center">
                <span className="text-[50px] text-[#DF2844] font-bold">
                {counterOn &&  <CountUp start={0} end={10} duration={2} delay={0} />}
                </span>{" "}
                <span className="font-bold">+</span>
              </h1>
              <div className="text-lg text-center font-bold">
                Years Of Experience
              </div>
            </div>
            <div className=" text-white w-[290px] border-2 border-white py-10">
              <h1 className="flex  justify-center">
                <span className="text-[50px] text-[#DF2844] font-bold"> {counterOn &&  <CountUp start={0} end={50} duration={2} delay={0} />}</span>{" "}
                <span className="font-bold">+</span>
              </h1>
              <div className="text-lg text-center font-bold">
              Team 
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
    </>
  );
}

export default Exprience;
