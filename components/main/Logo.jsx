import React from "react";
import Image from "next/image";
function Logo() {
  return (
    <div className="bg-black text-white py-10  lg:pt-52">
      <div className="relative  lg:border-t-2 border-white">
        <div className="container m-auto">
        <div className="relative lg:bottom-[70px]">

          <div className=" border-2 border-white py-5 lg:py-8 mx-5 lg:mx-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-2 bg-black ">
              <div className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675679251/lipsum3_hhfial.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              <div className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675679252/lipsum5_trjqoj.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              <div className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675679251/lipsum3_hhfial.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              <div className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675679252/lipsum5_trjqoj.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              <div className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675679251/lipsum3_hhfial.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              <div className="col-span-1 m-auto">
                <div className="relative h-10 w-52 lg:h-16 ">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675679252/lipsum5_trjqoj.png"
                    }
                    layout="fill"
                    objectFit="cover"
                    className=" h-fit w-fit"
                    alt="logo img"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
