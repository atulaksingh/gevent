import React from 'react'
import { FaUserFriends } from "react-icons/fa";
function AboutIconCard(props) {
  return (
    <>
         <div className="w-[350px] sm:w-[600px] md:w-[210px] lg:w-[280px] xl:w-[350px] bg-black border border-white justify-center lg:py-5">
            <div className="text-center ">
              <div className="py-3 ">
               {props.icon}
              </div>
              <div className="font-bold text-xl py-2 ">{props.title}</div>
              <div className="text-gray-400 text-lg py-2 ">{props.desc}</div>
            </div>
          </div>
    </>
  )
}

export default AboutIconCard
