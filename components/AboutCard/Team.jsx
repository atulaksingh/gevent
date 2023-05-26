import React from "react";
import Image from "next/image";
import TeamCard from "components/card/TeamCard";
const teamData = [
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680786442/79305248_2367379976700760_2551490163310067712_n_fjaiiy.jpg",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680786553/67479451_2119724211466339_8501046099165839360_n_clqrg2.jpg",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680526558/87022114_2556896077749148_4166815878593118208_n_jzewjn.jpg",
  },
];
function Team() {
  return (
    <>
      <div className="bg-black py-20 font-[Syne]">
        <div className="container m-auto">
          <div className="py-10 text-center mx-5">
            <div className="text-[#ddf242] mb-5 m-auto text-lg font-bold md:space-x-20 md:tracking-widest">
              OUR TEAM
            </div>
            <h1 className="text-[30px] text-white sm:text-[50px] md:text-[60px] w-full font-bold font-[Syne]">
              Meet Our Expert
            </h1>
            <div className="text-lg text-gray-300 font-semibold py-3">
            Panache Medias impressive portfolio showcases their expertise in creating unforgettable events, collaborating with renowned personalities and delivering top-notch services in the entertainment industry.
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 pb-20">
            {teamData.map((item, index) => (
              <div
                data-aos-offset="120"
                data-aos="fade-up"  data-aos-once="false"
                data-aos-duration="1000"
                key={index}
                className=" col-span-1 border border-[#DF2844] mx-8 sm:mx-10 lg:mx-0"
              >
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
            <button
             
              className=" p-4 text-bold text-white hover:text-[#DF2844] tracking-[2px] border border-[#DF2844]"
            >
              VIEW ALL TEAM
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
