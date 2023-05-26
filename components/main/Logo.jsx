import Image from "next/image";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
const Logodata = [
  // {img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680516957/62-removebg-preview_mwc48x.png"},

  // {img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517063/63-removebg-preview_gfujyt.png"},

  // {img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517110/64-removebg-preview_mebbxp.png"},

  // {img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517158/65-removebg-preview_fevgvk.png"},

  // {img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517203/66-removebg-preview_zjb9vb.png"},

  // {img:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517256/67-removebg-preview_sbqbik.png"},

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680852260/unnamed_1_jlbvlt.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680857480/623dd76470712bdafc63c387_lirqci.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680857572/61fc00073cf0e70004222069_yvthrq.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680857714/godrej-logo_rcddqd.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680858356/93-931406_png-logos_p40x03.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680859228/IIFL-Finance_gwnej9.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680859697/SeekPng.com_new-logo-png_2468404_a4oihu.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680869215/Group_12971_rve33y.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680869219/Group_12973_nutkmi.png",
  },




  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680869391/Mask_group_1_1_xqjjcr.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680869392/Mask_group_5_hut3sj.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680871228/Group_12975_hhu0hq.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680874268/Group_12982_1_hsjgir.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680928761/Group_12980_1_rqpooe.png",
  },


  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680861008/PngItem_1270089_sagi3v.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680861789/32188-2-pepsi-logo-image_rzhmh3.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680861979/Parle-Products_bzhchi.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680862386/Blenders-Pride-removebg-preview_vve4il.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680863506/images-removebg-preview_qekp8e.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680864558/640px-Rajasthan_Royals_Logo.svg_dcwhab.png",
  },

  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680864832/images__1___1_-removebg-preview_ckymxo.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680865161/Indian_Express_Logo_gzydsr.png",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680865468/images__1_-removebg-preview_iufwhw.png",
  },
];
function Logo() {
  return (
    <div className="bg-black text-white py-10  lg:pt-52">
      <div className="relative  lg:border-t-2 border-white">
        <div className="container m-auto">
          <div className="relative lg:bottom-[90px]">
            <div className=" border-2 border-white py-5 lg:py-8 mx-5 lg:mx-0">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-2 bg-black ">
              <div data-aos="zoom-in" className="col-span-1 m-auto">
                <div className="relative h-14 w-56 lg:h-16 fill-black">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680516957/62-removebg-preview_mwc48x.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit bg-black"
                    alt="logo img"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517063/63-removebg-preview_gfujyt.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517110/64-removebg-preview_mebbxp.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517158/65-removebg-preview_fevgvk.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517203/66-removebg-preview_zjb9vb.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517256/67-removebg-preview_sbqbik.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              <div data-aos="zoom-in" className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1680517256/67-removebg-preview_sbqbik.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              
            </div> */}
              <div className="bg-black">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={2}
                  freeMode={true}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 2,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 4,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 5,
                    },
                  }}
                >
                  {Logodata.map((item, index) => (
                    <SwiperSlide key={index}>
                      {" "}
                      <div className="relative h-20 w-24 sm:w-28 lg:h-28 fill-white stroke-white mx-3">
                        <Image
                          src={item.img}
                          layout="fill"
                          objectFit="contain"
                          className=" h-fit w-fit bg-black stroke-white fill-white"
                          alt="logo img"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
