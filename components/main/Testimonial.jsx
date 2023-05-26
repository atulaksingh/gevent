import AboutIconCard from "components/card/AboutIconCard";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { RiDoubleQuotesR } from "react-icons/ri";
import Image from "next/image";
import YouTube from "react-youtube";
import PropTypes from "prop-types";
function Testimonial() {
  return (
    <>
      <div className="bg-black text-white">
        <div className="container mx-auto">
          <div className=" pt-40 lg:py-40">
          <div className="py-10 text-center">
            <div className="text-[#DF2844] font-[Syne] mb-5 m-auto  sm:text-lg font-bold md:space-x-20 md:tracking-widest">
            VIDEOS
            </div>
            <h1 className="text-[2.2rem] font-[Syne] leading-[40px] sm:text-[3rem] md:text-[4rem] lg:text-[3.8rem] sm:leading-[65px] md:leading-[80px] lg:leading-[70px] font-[600] mx-1 text-white ">
            EK EHSAAS CONCERT - GULAM ALI
            </h1>
       
          </div>
            <div className="grid col-span-1 lg:grid-cols-2  gap-2 mt-10 ">
              <div className="col-span-1 ">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    className=""
                    src={`https://www.youtube.com/embed/${"M-b3Xuo35SI"}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${"34dLDx39AKE"}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        {/* <div>
          <div className="video-responsive">
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${"xNRJwmlRBNU"}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div> */}
        {/* <div>
        <div className="col-span-2 lg:col-span-1 order-2 lg:order-1 py-16 lg:py-24 mx-5">
              <div className="text-[#DF2844] font-bold tracking-[5px] font-[Syne]">
                TESTIMONIAL
              </div>
              <h1 className="text-[28px] text-white leading-8 sm:leading-[70px] sm:text-[50px] md:text-[67px] font-medium font-[Syne] py-4 ">
                Experience <br />
                They Have
              </h1>
              <div className="text-sm text-gray-300 sm:text-lg font-[Syne] py-3 lg:w-[80%]">
                Cras porttitor urna eu metus efficitur, a tempus ligula
                vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris
                dolor, interdum id vestibulum et pharetra ac libero. Etiam
                vestibulum in mi sit amet.
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="120"
                data-aos-duration="1000"
                className="relative   bg-black   border border-white p-5 lg:p-10 z-20"
              >
                <div className="flex pb-8">
                  <AiFillStar color="#DF2844" size={20} />
                  <AiFillStar color="#DF2844" size={20} />
                  <AiFillStar color="#DF2844" size={20} />
                  <AiFillStar color="#DF2844" size={20} />
                  <AiFillStar color="#DF2844" size={20} />
                </div>
                <div className="font-[Syne]">
                  &apos; Cras porttitor urna eu metus efficitur, a tempus ligula
                  vehicula. Donec ornare pharetra metus nec vehicula. Etiam
                  mauris dolor, interdum id vestibulum et pharetra ac libero.
                  Etiam vestibulum in mi sit amet. .&apos;
                </div>
                <div className="flex justify-between mt-5">
                  <div className="">
                    <div className="md:text-2xl font-bold font-[Syne]">Baron Mordo</div>
                    <div className="text-sm md:text-base text-[#DF2844] font-[Syne]">
                      CEO Agency
                    </div>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="w-[40px] h-[52px] md:w-[50px] md:h-[62px] my-auto"
                      viewBox="0 0 65 52"
                    >
                      <path
                        stroke=" #DF2844"
                        strokeWidth="3"
                        d="M10.535 49.837c7-12 8.5-15.5 9-22-3.5 0-6.5-.09-9-1-5.5-2-8.077-5.418-8.5-10.5-.5-6 4.5-13 10-14s9.74.24 13 3.5c2.5 2.5 6.5 11 3.5 19.5s-6.5 13-8.5 15.5-10.409 10.557-9.5 9zM43.535 49.837c7-12 8.5-15.5 9-22-3.5 0-6.5-.09-9-1-5.5-2-8.077-5.418-8.5-10.5-.5-6 4.5-13 10-14s9.74.24 13 3.5C60.535 8.337 64.5 17.5 61.5 26s-6.465 12.337-8.465 14.837-10.409 10.557-9.5 9z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-duration="1000"
              className="col-span-2 lg:col-span-1 order-1 lg:order-2 mx-5 md:mx-10 lg:mx-0"
            >
              <div className="   md:mx-0 border border-[#DF2844] h-full w-full  lg:h-[750px] lg:w-[610px] ">
                <div className="relative  top-4 right-2 md:top-14  md:right-10 lg:right-20 h-[300px]  sm:h-[700px]  md:h-[800px] md:w-[700px] lg:h-[700px] lg:w-[650px]">
                  <Image
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680328103/326422101_900104537685989_8771926664559063932_n_1_ivr08h.jpg"
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit "
                    alt=" img"
                  />
                </div>
              </div>
            </div>
        </div> */}
      </div>
    </>
  );
}

export default Testimonial;
