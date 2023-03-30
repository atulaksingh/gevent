import React from "react";
import { FaUserFriends } from "react-icons/fa";
function ServiceIconCard(props) {
  return (
    <div>
      <div className=" p-5 md:p-10 border hover:border-[#D7F205] border-white justify-center py-5">
        <div className=" ">
          <div className="md:py-3 font-[Syne] ">{props.icon}</div>
          <div className="font-bold md:text-2xl py-2 font-[Syne]">
            {props.title}
          </div>
          <div className="text-gray-400 text-sm md:text-lg py-2 font-[Syne] line-clamp-4">
            {props.desc}
          </div>
          <div className="flex  md:py-3 gap-3 cursor-pointer hover:text-[#D7F205] hover:stroke-[#D7F205]">
            <div className="my-auto text-lg text-bold  tracking-[2px] font-[Syne]">
              READ MORE
            </div>
            <div className="w-4 h-4 md:h-5 md:w-5 hover:stroke-[#D7F205] stroke-white  my-auto">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 13">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 11.5l5-5-5-5M1 11.5l5-5-5-5"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceIconCard;
