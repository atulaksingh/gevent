import React from "react";
import AboutIconCard from "./AboutIconCard";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FaUserFriends } from "react-icons/fa";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";

function AboutTeamCard() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="bg-black text-white py-20   md:py-0 ">
        <div className=" relative md:border-t-2 border-white">
          <div className=" container m-auto ">
       
            <div className="-mt-32   grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center mx-5 md:mx-10">
              <div
                data-aos="fade-up"  data-aos-once="false"
                data-aos-duration="1000"
                className="col-span-1"
              >
                <div className=" bg-black border border-white justify-center lg:py-5">
                  <div className="text-center ">
                    <div className="py-3 ">
                      <FaUserFriends
                        size={50}
                        style={{ margin: "auto" }}
                        color="#DF2844"
                      />
                    </div>
                    <div className="font-bold text-xl py-2 ">Awesome Event</div>
                    <div className="text-gray-400 text-lg py-2 mx-10">
                      Aenean pharetra erat in nisl blandit hendrerit.
                    </div>
                  </div>
                </div>
              </div>
              <div  data-aos="fade-up"  data-aos-once="false"
                data-aos-duration="1000" className="col-span-1">
                <div className=" bg-black border border-white justify-center lg:py-5">
                  <div className="text-center ">
                    <div className="py-3 ">
                      <FaUserFriends
                        size={50}
                        style={{ margin: "auto" }}
                        color="#DF2844"
                      />
                    </div>
                    <div className="font-bold text-xl py-2 ">Awesome Event</div>
                    <div className="text-gray-400 text-lg py-2 mx-10">
                      Aenean pharetra erat in nisl blandit hendrerit.
                    </div>
                  </div>
                </div>
              </div>
              <div  data-aos="fade-up"  data-aos-once="false"
                data-aos-duration="1000" className="col-span-1">
                <div className=" bg-black border border-white justify-center lg:py-5">
                  <div className="text-center ">
                    <div className="py-3 ">
                      <FaUserFriends
                        size={50}
                        style={{ margin: "auto" }}
                        color="#DF2844"
                      />
                    </div>
                    <div className="font-bold text-xl py-2 ">Awesome Event</div>
                    <div className="text-gray-400 text-lg py-2 mx-10">
                      Aenean pharetra erat in nisl blandit hendrerit.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTeamCard;
