import React from "react";
import Image from "next/image";
import TeamCard from "components/card/TeamCard";
const teamData = [
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675836966/portrait-man-wearing-glasses-DCG3R79_bwpwwf.jpg",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675836966/portrait-man-wearing-glasses-DCG3R79_bwpwwf.jpg",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675836966/portrait-man-wearing-glasses-DCG3R79_bwpwwf.jpg",
  },
];
function Team() {
  return (
    <>
      <div className="bg-black py-20">
        <div className="container m-auto">
          <div className="py-10 text-center">
            <div className="text-[#ddf242] mb-5 m-auto text-lg font-bold md:space-x-20 md:tracking-widest">
              OUR TEAM
            </div>
            <h1 className="text-[30px] text-white sm:text-[50px] md:text-[60px] w-full font-bold font-[Syne]">
              Meet Our Expert
            </h1>
            <div className="text-lg text-gray-300 font-semibold py-3">
              Cras porttitor urna eu metus efficitur, a tempus ligula vehicula.
              Donec ornare pharetra metus nec vehicula. Etiam mauris dolor,
              interdum id vestibulum et pharetra ac libero. Etiam vestibulum in
              mi sit amet.
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 pb-20">
            {teamData.map((item, index) => (
              <div key={index} className=" col-span-1 border border-[#D7F205] mx-8 sm:mx-10 lg:mx-0">
                <div className="relative right-4 md:right-7 top-5 md:top-10 h-96 w-full border border-white">
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="cover"
                    className="h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
            ))}
          </div>

          
          <div className="py-10 text-center">
                  <button className=" p-4 text-bold text-white hover:text-[#D7F205] tracking-[2px] border border-[#D7F205]">
                  VIEW ALL TEAM
                  </button>
                </div>



        </div>
      </div>
    </>
  );
}

export default Team;
