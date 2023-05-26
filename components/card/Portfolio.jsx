import React from "react";
import Image from "next/image";
import Link from "next/link";
function Portfolio(props) {
  return (
    <div className="bg-black pb-20">
      <div className="container m-auto">
        <div>
          <div className="py-10 text-center">
            <div className="text-[#DF2844] mb-5 m-auto  sm:text-lg font-bold md:space-x-20 md:tracking-widest font-[Syne]">
              {props.title}
            </div>
            <h1 className="text-[1.9rem] leading-[40px] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] sm:leading-[65px] md:leading-[80px] lg:leading-[70px] font-[600] mx-1 text-white  font-[Syne]">
              {props.titleHead}
            </h1>
            <div className="text-sm text-gray-300 sm:text-lg py-3 lg:text-xl mx-5 sm:mx-14 lg:mx-32 md:py-5 font-[Syne] ">
              {props.desc}
            </div>
          </div>
        </div>
        <div className="grid  lg:grid-cols-12 mx-5 gap-5 my-8">
          <div
            data-aos-offset="100"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
            className="col-span-12 lg:col-span-4 border border-white p-2"
          >
            <Link href={"/multipage"} className="h-full w-full">
              <div className="w-full hover:bg-gray-600 hover:opacity-25 cursor-pointer ease-in-out duration-300">
                <img
                  src={props.img1}
                  alt="Movie"
                  className="relative w-full   lg:h-[350px] bg-contain  "
                />
                <h1 className="text-white py-1 mt-1 text-center">
                  Ghulam Ali Delhi
                </h1>
              </div>
            </Link>
          </div>
          <div
            data-aos-offset="100"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
            className="col-span-12 lg:col-span-4 border border-white p-2"
          >
            <Link href={"/multipage"} className="h-full w-full">
              <div className="w-full hover:bg-gray-600 hover:opacity-25 cursor-pointer ease-in-out duration-300">
                <img
                  src={props.img2}
                  alt="Movie"
                  className="relative w-full   lg:h-[350px] bg-contain  "
                />
                <h1 className="text-white py-1 mt-1 text-center">
                  Ghulam Ali Delhi
                </h1>
              </div>
            </Link>
          </div>
          <div
            data-aos-offset="100"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
            className="col-span-12 lg:col-span-4  border border-white p-2"
          >
            <Link href={"/multipage"} className="h-full w-full">
              <div className="w-full hover:bg-gray-600 hover:opacity-25 cursor-pointer ease-in-out duration-300">
                <img
                  src={props.img3}
                  alt="Movie"
                  className="relative w-full   lg:h-[350px] bg-contain  "
                />
                <h1 className="text-white py-1 mt-1 text-center">
                  Ghulam Ali Delhi
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid  lg:grid-cols-12 mx-5 gap-5 my-8">
          <div
            data-aos-offset="100"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
            className="col-span-12 lg:col-span-4 border border-white p-2"
          >
            <Link href={"/multipage"} className="h-full w-full">
              <div className="w-full hover:bg-gray-600 hover:opacity-25 cursor-pointer ease-in-out duration-300">
                <img
                  src={props.img1}
                  alt="Movie"
                  className="relative w-full   lg:h-[350px] bg-contain  "
                />
                <h1 className="text-white py-1 mt-1 text-center">
                  Ghulam Ali Delhi
                </h1>
              </div>
            </Link>
          </div>
          <div
            data-aos-offset="100"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
            className="col-span-12 lg:col-span-4 border border-white p-2"
          >
            <Link href={"/multipage"} className="h-full w-full">
              <div className="w-full hover:bg-gray-600 hover:opacity-25 cursor-pointer ease-in-out duration-300">
                <img
                  src={props.img2}
                  alt="Movie"
                  className="relative w-full   lg:h-[350px] bg-contain  "
                />
                <h1 className="text-white py-1 mt-1 text-center">
                  Ghulam Ali Delhi
                </h1>
              </div>
            </Link>
          </div>
          <div
            data-aos-offset="100"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
            className="col-span-12 lg:col-span-4  border border-white p-2"
          >
            <Link href={"/multipage"} className="h-full w-full">
              <div className="w-full hover:bg-gray-600 hover:opacity-25 cursor-pointer ease-in-out duration-300">
                <img
                  src={props.img3}
                  alt="Movie"
                  className="relative w-full   lg:h-[350px] bg-contain  "
                />
                <h1 className="text-white py-1 mt-1 text-center">
                  Ghulam Ali Delhi
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 mx-5">
          <div
            data-aos-offset="100"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
            className="col-span-1  p-2"
          >
            <Link href={"/multipage"} className="h-full w-full">
              <div className="w-full hover:bg-gray-600 hover:opacity-25 cursor-pointer ease-in-out duration-300">
                <img
                  src={props.img4}
                  alt="Movie"
                  className="relative w-full   lg:h-[350px] bg-contain  "
                />
                <h1 className="text-white py-1 mt-1 text-center">
                  Ghulam Ali Delhi
                </h1>
              </div>
            </Link>
          </div>
          <div
            data-aos-offset="100"
            data-aos="fade-up"
            data-aos-once="false"
            data-aos-duration="1000"
            className="col-span-1 border border-white p-2"
          >
            <Link href={"/multipage"} className="h-full w-full">
              <div className="w-full hover:bg-gray-600 hover:opacity-25 cursor-pointer ease-in-out duration-300">
                <img
                  src={props.img5}
                  alt="Movie"
                  className="relative w-full   lg:h-[350px] bg-contain  "
                />
                <h1 className="text-white py-1 mt-1 text-center">
                  Ghulam Ali Delhi
                </h1>
              </div>
            </Link>
          </div>
        </div> */}
    </div>
  );
}

export default Portfolio;
