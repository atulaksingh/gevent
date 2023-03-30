import React from "react";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import SmNavbar from "components/card/SmNavbar";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const headData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Service",
    link: "/service",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact Us",
    link: "/contactUs",
  },
  {
    name: <BiSearch size={25} />,
    link: "/",
  },
];
function Header() {
  const [open, setOpen] = useState(false);
  const isOpen = ()=>{
    setOpen(true);
  }
  const closeManu = ()=>{
    setOpen(false);
  }
  return (
    <>
      <div className="bg-black text-white ">
        <div className="z-500 container m-auto">
          <div className="flex justify-between  my-auto">
            <div className="relative h-20 w-52 ">
              <Image
                src={
                  "https://res.cloudinary.com/dt0j68vdr/image/upload/v1676439624/logo-mini_3_kb6qrm.png"
                }
                fill="layout"
                objectFit="contain"
                className="h-fit w-fit"
                alt="logo img"
              />
            </div>

            <div className="flex my-auto justify-start gap-12 align-baseline">
              {headData.map((item, index) => (
                <div
                  key={index}
                  className="hidden lg:block text-base transition ease-in-out delay-100 font-bold cursor-pointer hover:text-[#D7F205] font-[Syne]"
                >
                  <Link href={item.link}>{item.name}</Link>
                </div>
              ))}
              <div className=" visible lg:hidden text-base transition ease-in-out delay-100 font-bold cursor-pointer hover:text-[#D7F205] my-auto" onClick={isOpen}>
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
       <div> 
       {open &&(
        <SmNavbar close={closeManu}  />
       )}
      </div>
      </div>
    </>
  );
}

export default Header;
