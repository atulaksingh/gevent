import React from "react";
import Image from "next/image";
import { MdDateRange, MdModeComment } from "react-icons/md";
// import { MdModeComment} from 'react-icons/md';
function Blog() {
  return (
    <div className="bg-black text-white border-t-2 border-white py-16 lg:py-28 font-[Syne]">
      <div className="container m-auto">
        <div className="grid grid-cols-12 gap-5 mx-5">
          <div
            data-aos="fade-right"
            //  data-aos-anchor="#example-anchor"
            data-aos-offset="120"
            data-aos-duration="1000"
            className="col-span-12 lg:col-span-7 mx-3 md:mx-0 lg:order-none border border-[#D7F205] "
          >
            <div
              data-aos="fade-right"
              //  data-aos-anchor="#example-anchor"
              data-aos-offset="120"
              data-aos-duration="1000"
              className="  relative top-20 right-3 md:right-5 lg:right-11 grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="col-span-1 border-2 border-white bg-black  md:ml-0">
                <div className="relative h-64">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675747969/crowd-holding-mobiles-on-selfie-sticks-at-the-musi-FYXHF2N_j5dvyw.jpg"
                    }
                    layout="fill"
                    objectFit="cover"
                    className="h-fit w-fit"
                    alt="blog img"
                  />
                </div>
                <div className="mx-5">
                  <div className="text-2xl py-5">
                    6 Strategies for Hosting the Perfect Event
                  </div>
                  <div className="flex justify-start gap-11 text-[#D7F205]">
                    <div className="flex gap-2">
                      <div className="">
                        <MdDateRange size={25} color="#D7F205" />
                      </div>
                      <div className="my-auto text-lg">
                        {" "}
                        <span> August 16</span>,<span>2022</span>
                      </div>
                    </div>
                    <div className="flex gap-2 text-[#D7F205]">
                      <div className="">
                        <MdModeComment size={20} />
                      </div>
                      <div className="my-auto">0</div>
                    </div>
                  </div>
                  <div className="text-base text-[ Syne] text-gray-300 py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ac diam auctor, pharetra magna ultrices, imperdiet…
                  </div>
                  <div className="flex gap-3 pb-7">
                    <div className="my-auto font-bold text-base text-gray-300 font-[Syne] cursor-pointer hover:text-[#D7F205]">
                      READ MORE
                    </div>
                    <div className="w-4 h-4 stroke-[#D7F205]   my-auto  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 13"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 11.5l5-5-5-5M1 11.5l5-5-5-5"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 border-2 border-white bg-black ">
                <div className="relative h-64 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675747969/crowd-holding-mobiles-on-selfie-sticks-at-the-musi-FYXHF2N_j5dvyw.jpg"
                    }
                    layout="fill"
                    objectFit="cover"
                    className="h-fit w-fit"
                    alt="blog img"
                  />
                </div>
                <div className="mx-5">
                  <div className="text-2xl py-5">
                    6 Strategies for Hosting the Perfect Event
                  </div>
                  <div className="flex justify-start gap-11 text-[#D7F205]">
                    <div className="flex gap-2">
                      <div className="">
                        <MdDateRange size={25} color="#D7F205" />
                      </div>
                      <div className="my-auto text-lg">
                        {" "}
                        <span> August 16</span>,<span>2022</span>
                      </div>
                    </div>
                    <div className="flex gap-2 text-[#D7F205]">
                      <div className="">
                        <MdModeComment size={20} />
                      </div>
                      <div className="my-auto">0</div>
                    </div>
                  </div>
                  <div className="text-base text-[ Syne] text-gray-300 py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec ac diam auctor, pharetra magna ultrices, imperdiet…
                  </div>
                  <div className="flex gap-3 pb-7">
                    <div className="my-auto font-bold text-base text-gray-300 font-[Syne] cursor-pointer hover:text-[#D7F205]">
                      READ MORE
                    </div>
                    <div className="w-4 h-4 stroke-[#D7F205]   my-auto  ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14 13"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 11.5l5-5-5-5M1 11.5l5-5-5-5"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 ">
            <div className="col-span-1 py-16 md:mx-10">
              <div className="text-[#ddf242] mb-5 m-auto font-[Syne] text-lg font-bold md:space-x-20 md:tracking-widest">
                BLOG
              </div>
              <h1 className="text-[30px] sm:text-[50px] md:text-[59px] w-full font-bold ">
                Our Latest News
              </h1>
              <div className="text-base text-gray-300 font-medium py-3">
                Cras porttitor urna eu metus efficitur, a tempus ligula
                vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris
                dolor, interdum id vestibulum et pharetra ac libero. Etiam
                vestibulum in mi sit amet.
              </div>

              <div className="py-10">
                <button
                  data-aos="fade-up"
                  data-aos-once="false"
                  data-aos-duration="1000"
                  className=" px-6 py-3 text-bold hover:text-[#D7F205] tracking-[2px] border border-[#D7F205] font-[Syne]"
                >
                  VIEW ALL
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
