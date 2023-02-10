import React from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
const headData = [
  <Link key={index} href={"/"}>Home</Link>,
  <Link key={index} href={"/about"}>About Us</Link>,
  <Link key={index} href={"/service"}>Service</Link>,
  <Link key={index} href={"/portfolio"}>Portfolio</Link>,
  <Link key={index} href={"/pages"}>Pages</Link>,
  <Link key={index} href={"/contactUs"}>Contact Us</Link>,
  <BiSearch key={index} size={25} />,
];
function Header() {
  return (
    <>
      <div className="bg-black text-white ">
        <div className="container m-auto">
          <div className="flex justify-between">
            <div className="relative h-20 w-52 ">
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
         
      

            <div className="flex my-auto justify-start gap-10">
              {headData.map((item, index) => (
                <div key={index
                } className="hidden lg:block text-base transition ease-in-out delay-100 font-bold cursor-pointer hover:text-[#D7F205]">
                  {item}
                </div>

              ))}
              <div className=" visible lg:hidden text-base transition ease-in-out delay-100 font-bold cursor-pointer hover:text-[#D7F205] my-auto">
              <div className="relative h-12 w-12 fill-[#D7F205] stroke-[#D7F205]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M80 160h352M80 256h352M80 352h352"
                  ></path>
                </svg>
              </div>
            </div>
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="h-12 w-12 fill-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                >
                  <path
                 
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M80 160h352M80 256h352M80 352h352"
                  ></path>
                </svg>
              </div> */
}

export default Header;
