import React from 'react'
import { FaUserFriends } from "react-icons/fa";
function ServiceIconCard(props) {
  return (
    <div>
       <div className=" p-5 md:p-10 border hover:border-[#D7F205] border-white justify-center py-5">
                <div className=" ">
                  <div className="md:py-3 ">
                    {props.icon}
                  </div>
                  <div className="font-bold md:text-2xl py-2 ">{props.title}</div>
                  <div className="text-gray-400 text-sm md:text-lg py-2 ">
              {props.desc}
                  </div>
                  <div className="flex md:py-7 cursor-pointer">
                    <div className="my-auto text-bold hover:text-[#D7F205] tracking-[2px]">
                      READ MORE
                    </div>
                    <div className="w-6 h-6 md:h-8 md:w-8 stroke-[#D7F205] my-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ionicon"
                        viewBox="0 0 512 512"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="48"
                          d="M184 112l144 144-144 144"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default ServiceIconCard
