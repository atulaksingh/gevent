import React from "react";
import AboutIconCard from "components/card/AboutIconCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import AboutTeamCard from "components/card/AboutTeamCard";
import Exprience from "components/card/Exprience";
import MainAboutItemCard from "./MainAboutItemCard";
import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function About(props) {
  const [counterOn,setCounterOn] = useState(false)
  return (
    <>
      <div className="bg-black text-white  h-full w-full  py-32">
        <div className="container m-auto ">
          <div className="overflow-hidden">
            <div className="grid grid-cols-2 gap-20 lg:gap-2 mx-5 lg:mx-0 ">
              <div className="col-span-2 lg:col-span-1 py-24 order-2 lg:order-1">
                <div className="text-[#D7F205] font-bold tracking-[5px]">
                  {props.title}
                </div>
                <h1 className="text-[28px] text-white leading-10 sm:leading-[60px] sm:text-[50px] md:text-[69px] font-medium font-[Syne] py-4">
                  {props.titleHead}
                </h1>
                <div className="text-sm text-gray-300 sm:text-lg py-3">
                  {props.desc}
                </div>

                <div>{props.aboutcard}</div>

                <div className="py-10">
                  <button
                    data-aos="fade-up"
                    data-aos-once="false"
                    data-aos-duration="3000"
                    className="p-3 md:p-4 text-bold hover:text-[#D7F205] tracking-[2px] border border-[#D7F205]"
                  >
                    {props.buttonTitle}
                  </button>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-duration="2000"
                className="col-span-2 lg:col-span-1 order-1 lg:order-2 box-content   m-auto "
              >
                <div
                  className="relative z-10 border border-[#D7F205]
               h-[490px] w-[350px] sm:h-[550px] sm:w-[600px]
                 md:h-[600px] md:w-[690px] lg:h-[600px] lg:w-[610px] sm:mx-12 lg:ml-10 box-content"
                >
                  <div className="relative top-5 sm:top-12 right-2 sm:right-12 h-[490px] w-[97%] sm:h-[600px] sm:w-[600px] md:h-[650px] md:w-[670px] lg:h-[650px] lg:w-[610px]  box-content">
                    <Image
                      src={props.img}
                      layout="fill"
                      objectFit="cover"
                      className=" h-fit w-fit "
                      alt="about img"
                    />
                  </div>
                  <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>

                  <div
                    data-aos="fade-left"
                    data-aos-duration="3000"
                    className="absolute  z-30 -bottom-16 -right-2  sm:bottom-20 sm:-right-5  bg-black text-white w-[300px] lg:w-[200px] border border-white py-5 "
                  >
                    <h1 className="flex justify-center">
                      <span className="text-[50px] font-[Syne] text-[#D7F205]">
                      {counterOn &&  <CountUp start={0} end={props.year} duration={2} delay={0} />}
                      
                      </span>{" "}
                      TH
                    </h1>
                    <div className="text-lg text-center">{props.titleyear}</div>
                  </div>
                  </ScrollTrigger>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
