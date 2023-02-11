import React from "react";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Events(props) {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="bg-black text-white border-t-2 border-white">
      <div className="py-10 md:py-40">
        <div className="grid grid-cols-2  gap-2 ">
          <div className="col-span-2 lg:col-span-1 mx-10 md:mx-16">
          <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              className="relative z-10 border border-[#D7F205] h-full w-full  m-auto"
            >
              <div className="mx-5 sm:mx-0">
                <div
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  className="relative mr-20 top-5  sm:top-14 right-8 md:right-12 h-[200px] w-[100%] sm:h-[300px] sm:w-full lg:h-[320px] lg:w-[550px]"
                >
                  <Image
                    src={props.img1}
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="event img"
                  />
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="3000"
                  className="relative top-10 sm:top-32   -bottom-0 right-8 md:right-12 h-[200px] w-[100%] sm:h-[300px] sm:w-full lg:h-[320px] lg:w-[550px]"
                >
                  <Image
                    src={props.img2}
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="event img"
                  />
                </div>
              </div>
           
                <div
                  data-aos="fade-right"
                  // data-aos-duration="1000"
                  // data-aos-offset="100"
                  className="absolute z-30 -left-8 md:-left-16 top-[200px] sm:top-[320px] lg:top-[340px] bg-black text-white w-[200px] sm:w-[230px] border border-white py-0 sm:py-5 mx-5 sm:mx-0"
                >
                  <h1 className="flex justify-center">
                    <span className="text-[30px] font-[Syne] md:text-[50px] text-[#D7F205]">
                      {counterOn && (
                        <CountUp
                          start={0}
                          end={props.eventNo}
                          duration={2}
                          delay={0}
                        />
                      )}
                    </span>{" "}
                    +
                  </h1>
                  <div className="text-sm md:text-lg font-[Syne] text-center py-2">
                    {props.eventTitle}
                  </div>
                </div>
            
            </div>
            </ScrollTrigger>
          </div>
          <div className="col-span-2 lg:col-span-1 py-40 lg:py-24 mx-5">
            <div className="text-[#D7F205] font-bold tracking-[5px]">
              {props.title}
            </div>
            <h1 className="text-[28px] text-white leading-8 sm:leading-[60px] sm:text-[50px] md:text-[67px] font-medium font-[Syne] py-4">
              {props.titleHead}
            </h1>
            <div className="text-sm text-gray-300 sm:text-lg py-3">
              {props.desc}
            </div>
            <div>{props.card}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
