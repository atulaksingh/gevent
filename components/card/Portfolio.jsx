import React from "react";
import Image from "next/image";
function Portfolio(props) {
  return (
    <div className="bg-black pb-20">
      <div className="container m-auto">
        <div>
          <div className="py-10 text-center">
            <div className="text-[#ddf242] mb-5 m-auto text-lg font-bold md:space-x-20 md:tracking-widest">
             {props.title}
            </div>
            <h1 className="text-[2rem] leading-[40px] sm:text-[3rem] md:text-[3.5rem] lg:text-[4.2rem] sm:leading-[65px] md:leading-[80px] lg:leading-[70px] font-[600] mx-1 text-white ">
            {props.titleHead}
            </h1>
            <div className="text-gray-300 font-semibold md:text-lg lg:text-xl mx-3 sm:mx-10 lg:mx-24 md:py-5 lg:py-10">
             {props.desc}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-white p-2">
            <div className="relative h-[350px]">
              <Image
                src={
                 props.img1
                }
                layout="fill"
                objectFit="cover"
                className=" h-fit w-fit"
                alt="portfolio img"
              />
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 border border-white p-2">
            <div className="relative h-[350px]">
              <Image
                src={
                  props.img2
                }
                layout="fill"
                objectFit="cover"
                className=" h-fit w-fit"
                alt="protfolio img"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4  p-2">
            <div className="relative h-[350px]">
              <Image
                src={
                props.img3
                }
                layout="fill"
                objectFit="cover"
                className=" h-fit w-fit"
                alt="portfolio img"
              />
            </div>
          </div>
          {/* <div className="colspan-1"></div> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="col-span-1  p-2">
            <div className="relative h-[350px]">
              <Image
                src={
                props.img4
                }
                layout="fill"
                objectFit="cover"
                className=" h-fit w-fit"
                alt="portfolio img"
              />
            </div>
          </div>
          <div className="col-span-1 border border-white p-2">
            <div className="relative h-[350px]">
              <Image
                src={
                 props.img5
                }
                layout="fill"
                objectFit="cover"
                className=" h-fit w-fit"
                alt="portfolio img"
              />
            </div>
          </div>
         
         
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
