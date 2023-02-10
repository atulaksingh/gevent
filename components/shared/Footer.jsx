import React from "react";
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { BsInstagram } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { AiFillYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div

      >
        <div className="absolute  w-full bg-black">
          <div className=" border-t-2 border-white  text-white">
            <div className="container m-auto  ">
              <div className="text-center py-20">
                <div className="text-2xl my-10">
                  Subscribe to Our Newsletter
                </div>
                <div className="">
                  <input
                    className="w-[80%] sm:w-[550px] bg-transparent p-4 border decoration-white"
                    placeholder="Email"
                    type="text"
                  />
                  {/* <br className="visible md:hidden" /> */}
                  <button className="my-10 md:my-0 mx-5 px-6 py-4 text-bold hover:text-[#D7F205] tracking-[2px] border border-[#D7F205]">
                    SUBSCRIBE
                  </button>
                </div>
                <div className="relative h-32 w-64 m-auto">
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675750518/Gevent-Logo_abdaie.png"
                    }
                    fill="layout"
                    objectFit="contain"
                    className="h-fit w-fit"
                    alt="logo img"
                  />
                </div>
                <div className="text-lg text-gray-300 w-80 m-auto">
                  Aenean pharetra erat in nisl blandit. Nullam gravida enim
                  curae elementum.
                </div>
                <div className="flex gap-4 justify-center my-5">
                  <div className="relative border border-[#D7F205] p-1 h-8 w-8 fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                      <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                    </svg>
                  </div>
                  <div className="relative border border-[#D7F205] p-1 h-8 w-8 fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                    >
                      <path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9zM207 353.89v-196.5l145 98.2z"></path>
                    </svg>
                  </div>
                  <div className="relative border border-[#D7F205] p-1 h-8 w-8 fill-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fillRule="evenodd"
                        d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                      ></path>
                    </svg>
                  </div>
                  <div className="relative border border-[#D7F205] p-1 h-8 w-8 fill-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                      <path d="M28 6.937c-.957.425-1.985.711-3.064.84a5.343 5.343 0 002.345-2.951 10.696 10.696 0 01-3.388 1.295 5.334 5.334 0 00-9.089 4.864A15.143 15.143 0 013.809 5.411a5.321 5.321 0 00-.721 2.683 5.33 5.33 0 002.372 4.439 5.323 5.323 0 01-2.416-.667v.067a5.335 5.335 0 004.279 5.23 5.336 5.336 0 01-2.409.092 5.34 5.34 0 004.983 3.705 10.699 10.699 0 01-6.625 2.284c-.43 0-.855-.025-1.273-.075a15.102 15.102 0 008.177 2.396c9.812 0 15.176-8.128 15.176-15.177 0-.231-.005-.461-.015-.69A10.855 10.855 0 0028 6.937z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container m-auto border-t-2 border-white  text-white">
            <div className="text-[Inter] py-5 text-lg text-gray-300 text-center">
              Copyright 2022 © All Right Reserved Design by Rometheme
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
