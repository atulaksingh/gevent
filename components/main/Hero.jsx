import React from "react";
import Image from "next/image";
function Hero() {
  return (
    <>
      <div className="">
        <div className="relative h-[100vh] w-[100vw]">
          <Image
            src={
              "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675511612/party-M8J3WXM_rgal2q.webp"
            }
            layout="fill"
            objectFit="cover"
            className=" h-fit w-fit"
            alt="hero img"
          />
          <div className="absolute h-[100vh] w-[100vw] bg-gradient-to-t from-[#131601] to-transparent "></div>
          <div className="absolute w-screen top-28 text-center">
            <div className="py-10">
              <div className="text-[#ddf242] mb-5 m-auto text-lg font-bold md:space-x-20 md:tracking-widest font-[Syne]">
                GEVENT ORGANIZER
              </div>
              <h1 className="text-[2rem] leading-[40px] sm:text-[3rem] md:text-[4.5rem] lg:text-[5rem] sm:leading-[65px] md:leading-[80px] lg:leading-[90px] font-[600] mx-1 text-white font-[Syne]">
                Get An Unforgettable Event Experience With us
              </h1>
              <div className="text-gray-300 font-semibold md:text-lg lg:text-xl mx-5 sm:mx-14 lg:mx-36 md:py-5 lg:py-10 font-[Syne]">
                Duis consectetur urna ac urna sollicitudin, in porta metus
                dignissim. Morbi malesuada nisl ac nibh laoreet, in ultrices est
                elementum. Suspendisse fringilla efficitur risus ac iaculis.
                Mauris neque enim.
              </div>
              <div className="visible md:hidden py-5 sm:py-10 text-center ">
                  <button className=" p-4 text-bold text-white hover:text-[#D7F205] tracking-[2px] border border-[#D7F205]">
                  OUR SERVICE
                  </button>
                </div>
            </div>
          </div>
        </div>
    
      </div>
    </>
  );
}

export default Hero;
