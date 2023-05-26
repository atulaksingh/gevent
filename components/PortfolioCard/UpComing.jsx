import React from "react";
import Image from "next/image";
import { MdDateRange, MdModeComment } from "react-icons/md";
const UpComingData=[
    {
        img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327803/337880692_584817700256499_6722698848955823234_n_mpfhso.jpg",
        title:"And another legend is with us for the Pune City.",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam auctor, pharetra magna ultrices, imperdiet…",
        date:"22",
        month:"April"
    },
    {
        img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327862/333790480_125114907162192_8391326631875087038_n_vw6rgw.jpg",
        title:"Indore Ready to witness this Amazing performance   ",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam auctor, pharetra magna ultrices, imperdiet…",
        date:"03",
        month:"March"
    },
    {
        img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680326757/334319325_1308986979679568_3531215051071949229_n_gy6uy2.jpg",
        title:"  An event of its own kind...",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam auctor, pharetra magna ultrices, imperdiet…",
        date:"04",
        month:"March"
    },
    {
        img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680787416/319683585_712102756906936_2272432995655553836_n_qoc6qj.jpg",
        title:"It’s all for good music !!!! We are all set and ready to...                         ",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac diam auctor, pharetra magna ultrices, imperdiet…",
        date:"31",
        month:"Dec"
    },
    {
        img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680787482/317327975_5352576338181094_8094816627505789927_n_sizlrk.jpg",
        title:"Talented Papon performing live",
        desc:"Pune are you ready for this beautiful evening with the super talented Papon Live in Concert !!! Tickets available at BookMyShow",
        date:"27",
        month:"Nov"
    },
]
function UpComing() {
  return (
    <>
      <div className="py-20 font-[Syne]">
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
            } className="relative col-span-1 border border-[#DF2844] bg-black mx-10 lg:mx-0">
              <div className="relative w-[93%] right-2 top-5 border border-white bg-black h-[100%]">
                <div className="">
                  <img
                    src={
                   item.img
                    }
                  
                    className="w-full h-48  lg:h-52 bg-contain "
                    alt="logo img"
                  />
                </div>
                <div className="mx-5">
                  <div className="text-2xl hover:text-[#DF2844] py-5 text-white line-clamp-2">
                    {item.title}
                  </div>

                  <div className="text-base text-[ Syne] text-gray-300 line-clamp-3">
                  {item.desc}
                  </div>
                  <div className="py-10 ">
                    <button className=" p-4 text-bold text-white hover:text-[#DF2844] tracking-[2px] border border-[#DF2844]">
                      EVENT DETAILS
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute  -right-10 top-10 bg-black border border-white text-white ">
                <div className="w-32 text-center">
                  <div className="text-[#DF2844] text-[40px] leading-[50px] pt-3">{item.date}</div>
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
