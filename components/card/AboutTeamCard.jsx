import React from 'react'
import AboutIconCard from './AboutIconCard'
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
function AboutTeamCard() {
  return (
  <>
        <div className="bg-black text-white    py-14 ">
    <div className=" relative md:border-t-2 border-white">
          <div className=" container m-auto ">
            {/* <div className="relative -mt-32">
              <div className="flex flex-col md:flex-row justify-center m-auto gap-10 mx-5 sm:mx-5 md:mx-10  lg:mx-16 xl:mx-20 ">
                <AboutIconCard
                  icon={
                    <FaUserFriends
                      size={50}
                      style={{ margin: "auto" }}
                      color="#D7F205"
                    />
                  }
                  title="Friendly Team"
                  desc="Aenean pharetra erat in nisl blandit hendrerit."
                />
                <AboutIconCard
                  icon={
                    <FaUserFriends
                      size={50}
                      style={{ margin: "auto" }}
                      color="#D7F205"
                    />
                  }
                  title="The Best Venues"
                  desc="Aenean pharetra erat in nisl blandit hendrerit."
                />
                <AboutIconCard
                  icon={
                    <FaUserFriends
                      size={50}
                      style={{ margin: "auto" }}
                      color="#D7F205"
                    />
                  }
                  title="Awesome Event"
                  desc="Aenean pharetra erat in nisl blandit hendrerit."
                />
              </div>
            </div> */}
        <div className='-mt-32  grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center mx-5'>
        <div className='col-span-1'>
        <div className=" bg-black border border-white justify-center lg:py-5">
            <div className="text-center ">
              <div className="py-3 ">
              <FaUserFriends
                      size={50}
                      style={{ margin: "auto" }}
                      color="#D7F205"
                    />
              </div>
              <div className="font-bold text-xl py-2 ">Awesome Event</div>
              <div className="text-gray-400 text-lg py-2 mx-10">Aenean pharetra erat in nisl blandit hendrerit.</div>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
        <div className=" bg-black border border-white justify-center lg:py-5">
            <div className="text-center ">
              <div className="py-3 ">
              <FaUserFriends
                      size={50}
                      style={{ margin: "auto" }}
                      color="#D7F205"
                    />
              </div>
              <div className="font-bold text-xl py-2 ">Awesome Event</div>
              <div className="text-gray-400 text-lg py-2 mx-10">Aenean pharetra erat in nisl blandit hendrerit.</div>
            </div>
          </div>
        </div>
        <div className='col-span-1'>
        <div className=" bg-black border border-white justify-center lg:py-5">
            <div className="text-center ">
              <div className="py-3 ">
              <FaUserFriends
                      size={50}
                      style={{ margin: "auto" }}
                      color="#D7F205"
                    />
              </div>
              <div className="font-bold text-xl py-2 ">Awesome Event</div>
              <div className="text-gray-400 text-lg py-2 mx-10">Aenean pharetra erat in nisl blandit hendrerit.</div>
            </div>
          </div>
        </div>

        </div>
           
          </div>
        </div>
    </div>
  </>
  )
}

export default AboutTeamCard
