import React from "react";
import Image from "next/image";
import { MdDateRange, MdModeComment } from "react-icons/md";
const UpComingData=[
    {
        img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1675747969/crowd-holding-mobiles-on-selfie-sticks-at-the-musi-FYXHF2N_j5dvyw.jpg",
        title:"University Seminars",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam auctor, pharetra magna ultrices, imperdiet…",
        date:"07",
        month:"june"
    },
    {
        img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1675747969/crowd-holding-mobiles-on-selfie-sticks-at-the-musi-FYXHF2N_j5dvyw.jpg",
        title:"University Seminars",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam auctor, pharetra magna ultrices, imperdiet…",
        date:"07",
        month:"june"
    },
    {
        img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1675747969/crowd-holding-mobiles-on-selfie-sticks-at-the-musi-FYXHF2N_j5dvyw.jpg",
        title:"University Seminars",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam auctor, pharetra magna ultrices, imperdiet…",
        date:"07",
        month:"june"
    },
    {
        img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1675747969/crowd-holding-mobiles-on-selfie-sticks-at-the-musi-FYXHF2N_j5dvyw.jpg",
        title:"University Seminars",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam auctor, pharetra magna ultrices, imperdiet…",
        date:"07",
        month:"june"
    },
    {
        img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1675747969/crowd-holding-mobiles-on-selfie-sticks-at-the-musi-FYXHF2N_j5dvyw.jpg",
        title:"University Seminars",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam auctor, pharetra magna ultrices, imperdiet…",
        date:"07",
        month:"june"
    },
]
function UpComing() {
  return (
    <>
      <div className="py-20">
        <div className="container m-auto ">
          <div className="py-10 text-center">
            <div className="text-[#ddf242] mb-5 m-auto text-lg font-bold md:space-x-20 md:tracking-widest">
              UPCOMING
            </div>
            <h1 className="text-[2rem] leading-[40px] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] sm:leading-[65px] md:leading-[80px] lg:leading-[70px] font-[600] mx-1 text-white ">
              Upcoming Events
            </h1>
            <div className="text-gray-300 font-semibold md:text-lg lg:text-xl mx-3 sm:mx-10 lg:mx-24 md:py-5 lg:py-10">
              Cras porttitor urna eu metus efficitur, a tempus ligula vehicula.
              Donec ornare pharetra metus nec vehicula. Etiam mauris dolor,
              interdum id vestibulum et pharetra ac libero. Etiam vestibulum in
              mi sit amet.
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {
            UpComingData.map((item,index)=>(

            <div data-aos-offset="300"  data-aos="fade-up"  data-aos-once="false"
     data-aos-duration="1000" key={index
            } className="relative col-span-1 border border-[#D7F205] bg-black mx-10 lg:mx-0">
              <div className="relative w-[93%] right-2 top-5 border border-white bg-black">
                <div className="relative h-60 ">
                  <Image
                    src={
                   item.img
                    }
                    layout="fill"
                    objectFit="cover"
                    className="h-fit w-fit"
                    alt="logo img"
                  />
                </div>
                <div className="mx-5">
                  <div className="text-2xl hover:text-[#D7F205] py-5 text-white">
                    {item.title}
                  </div>

                  <div className="text-base text-[Hind] text-gray-300 ">
                  {item.desc}
                  </div>
                  <div className="py-10">
                    <button className=" p-4 text-bold text-white hover:text-[#D7F205] tracking-[2px] border border-[#D7F205]">
                      EVENT DETAILS
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute  -right-10 top-10 bg-black border border-white text-white ">
                <div className="w-32 text-center">
                  <div className="text-[#D7F205] text-[40px] leading-[50px] pt-3">{item.date}</div>
                  <div className="text-xl py-3">{item.month}</div>
                </div>
              </div>
            </div>
            ))
          }
            
          </div>
        </div>
      </div>
    </>
  );
}

export default UpComing;
