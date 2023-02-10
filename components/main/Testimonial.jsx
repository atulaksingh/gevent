import AboutIconCard from "components/card/AboutIconCard";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { AiFillStar } from 'react-icons/ai';
import { RiDoubleQuotesR } from 'react-icons/ri';
import Image from "next/image";
function Testimonial() {
  return (
    <div className="bg-black text-white">
      <div className="container m-auto">
        <div className=" pt-40 lg:py-40">
          <div className="grid grid-cols-2  gap-2">
            <div className="col-span-2 lg:col-span-1 order-2 lg:order-1 py-24 ">
              <div className="text-[#D7F205] font-bold tracking-[5px] pb-5">
                TESTIMONIAL
              </div>
              <h1 className="text-[30px] sm:text-[50px] md:text-[60px] w-full font-bold ">
                Experience <br />
                They Have
              </h1>
              <div className="text-lg text-gray-300 font-semibold py-3 lg:w-[80%]">
                Cras porttitor urna eu metus efficitur, a tempus ligula
                vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris
                dolor, interdum id vestibulum et pharetra ac libero. Etiam
                vestibulum in mi sit amet.
              </div>
              <div className="relative  bg-black   border border-white p-5 lg:p-10 z-30">
              <div className="flex pb-8">
               <AiFillStar color="yellow" size={20}/> 
               <AiFillStar color="yellow" size={20}/>
               <AiFillStar color="yellow" size={20}/>
               <AiFillStar color="yellow" size={20}/>
               <AiFillStar color="yellow" size={20}/>
                
              </div>
                <div>
                &apos; Cras porttitor urna eu metus efficitur, a tempus ligula
                  vehicula. Donec ornare pharetra metus nec vehicula. Etiam
                  mauris dolor, interdum id vestibulum et pharetra ac libero.
                  Etiam vestibulum in mi sit amet. Cras porttitor urna eu metus
                  efficitur, a tempus ligula vehicula. Donec ornare pharetra
                  metus nec vehicula. Etiam mauris dolor, interdum id vestibulum
                  et pharetra ac libero. Etiam vestibulum in mi sit amet.&apos;
                </div>
                <div className="flex justify-between mt-5">
                    <div className="">
                        <div className="text-2xl font-bold">Baron Mordo</div>
                        <div className="text-base text-[#b6ca21]">CEO Agency</div>
                    </div>
                    <div><RiDoubleQuotesR size={80} color="#D7F205"  /></div>
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 order-1 lg:order-2 mx-1 md:mx-10 lg:mx-0">
              <div className=" z-10  md:mx-0 border border-[#D7F205] h-full w-full  lg:h-[850px] lg:w-[610px] ">
               
                <div className="relative z-20 top-4 right-2 md:top-14  md:right-10 lg:right-20 h-[450px]  sm:h-[700px]  md:h-[800px] md:w-[700px] lg:h-[800px] lg:w-[650px]">
                  <Image
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675666264/business-people-party-celebration-success-concept-XGXN6PU_rn0kpf.webp"
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit "
                    alt=" img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
