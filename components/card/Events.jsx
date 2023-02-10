import React from "react";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
function Events(props) {
  return (
    <div className="bg-black text-white border-t-2 border-white">
      <div className="py-20">
        <div className="grid grid-cols-2  gap-2 ">
          <div className="col-span-2 lg:col-span-1 mx-3 md:mx-16">
            <div className="relative z-10 border border-[#D7F205] h-full w-full  m-auto">
              <div className="absolute z-30 -left-12 top-[215px] sm:top-[320px] lg:top-[340px] bg-black text-white w-[260px] sm:w-[200px] border border-white py-2 sm:py-5 mx-5 sm:mx-0">
                <h1 className="flex justify-center">
                  <span className="text-[50px] text-[#D7F205]">{props.eventNo}</span> +
                </h1>
                <div className="text-lg text-center">{props.eventTitle}</div>
              </div>

              <div className="mx-5 sm:mx-0">
                <div className="relative mr-20 top-5  sm:top-14 right-10 h-[250px] w-full sm:h-[300px] sm:w-full lg:h-[320px] lg:w-[550px]">
                  <Image
                    src={props.img1}
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="event img"
                  />
                </div>
                <div className="relative top-10 sm:top-32   -bottom-0 right-10 h-[250px] w-full sm:h-[300px] sm:w-full lg:h-[320px] lg:w-[550px]">
                  <Image
                    src={props.img2}
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="event img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 py-40 lg:py-24 mx-3">
            <div className="text-[#D7F205] font-bold tracking-[5px] pb-5">
              {props.title}
            </div>
            <h1 className="text-[30px] sm:text-[40px] md:text-[50px] w-full font-bold font-[Hind]">
            {props.titleHead}
            </h1>
            <div className="text-lg text-gray-300 font-semibold py-3">
              {props.desc}
            </div>
            <div>
              {props.card}
            </div>
       
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
