import ServiceIconCard from "components/card/ServiceIconCard";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
function Service(props) {
  return (
    <div className="bg-black text-white py-20">
      <div className="container m-auto">
        <div>
          <div className="py-10 text-center">
            <div className="text-[#ddf242] font-[Syne] mb-5 m-auto  sm:text-lg font-bold md:space-x-20 md:tracking-widest">
              {props.title}
            </div>
            <h1 className="text-[2.2rem] font-[Syne] leading-[40px] sm:text-[3rem] md:text-[4rem] lg:text-[3.8rem] sm:leading-[65px] md:leading-[80px] lg:leading-[70px] font-[600] mx-1 text-white ">
              {props.titleHead}
            </h1>
            <div className="text-sm text-gray-300 sm:text-lg py-3 lg:text-lg mx-5 sm:mx-14 lg:mx-48 md:py-5 font-[Syne]  ">
          {props.desc}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-10">
          {
            props.card.map((item,index)=>(
              <div key={index} className="col-span-3 lg:col-span-1 mx-5 sm:mx-0"   data-aos="fade-up"  data-aos-once="false"
     data-aos-duration="1000">
            <ServiceIconCard
             icon={
                    item.icon
                  }
                  title={item.cardTitle}
                  desc={item.cardDesc}
            
             />
            </div>
            ))
          }
           
            {/* <div className="col-span-1">
            <ServiceIconCard
             icon={
                    <FaUserFriends
                      size={60}
                      color="#D7F205"
                    />
                  }
                  title="Birthday Partyt"
                  desc="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas."
            
             />
            </div>
            <div className="col-span-1">
            <ServiceIconCard
             icon={
                    <FaUserFriends
                      size={60}
                      color="#D7F205"
                    />
                  }
                  title="Birthday Partyt"
                  desc="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas."
            
             />
            </div>
            <div className="col-span-1">
            <ServiceIconCard
             icon={
                    <FaUserFriends
                      size={60}
                      color="#D7F205"
                    />
                  }
                  title="Birthday Partyt"
                  desc="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas."
            
             />
            </div>
            <div className="col-span-1">
            <ServiceIconCard
             icon={
                    <FaUserFriends
                      size={60}
                      color="#D7F205"
                    />
                  }
                  title="Birthday Partyt"
                  desc="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas."
            
             />
            </div>
            <div className="col-span-1">
            <ServiceIconCard
             icon={
                    <FaUserFriends
                      size={60}
                      color="#D7F205"
                    />
                  }
                  title="Birthday Partyt"
                  desc="Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas."
            
             />
            </div> */}
          </div>

          {/* <div className="flex gap-8 ">
       
              <div className="w-[400px] p-14 border border-white justify-center py-5">
                <div className=" ">
                  <div className="py-3 ">
                    <FaUserFriends size={60} color="#D7F205" />
                  </div>
                  <div className="font-bold text-2xl py-2 ">Birthday Party</div>
                  <div className="text-gray-400 text-lg py-2 ">
                    Nunc lacus odio, hendrerit id hendrerit ut, pretium eget
                    nunc. Mauris dignissim libero elementum egestas.
                  </div>
                  <div className="flex py-7">
                    <div className="my-auto text-bold hover:text-[#D7F205] tracking-[2px]">
                      READ MORE
                    </div>
                    <div className="h-8 w-8 stroke-[#D7F205] my-auto">
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
          

            <div className="w-[400px] p-14 border border-white justify-center py-5">
              <div className=" ">
                <div className="py-3 ">
                  <FaUserFriends size={60} color="#D7F205" />
                </div>
                <div className="font-bold text-2xl py-2 ">Birthday Party</div>
                <div className="text-gray-400 text-lg py-2 ">
                  Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc.
                  Mauris dignissim libero elementum egestas.
                </div>
                <div className="flex py-7">
                  <div className="my-auto text-bold hover:text-[#D7F205] tracking-[2px]">
                    READ MORE
                  </div>
                  <div className="h-8 w-8 stroke-[#D7F205] my-auto">
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

          
              <div className="w-[400px] p-14 border border-white justify-center py-5">
                <div className=" ">
                  <div className="py-3 ">
                    <FaUserFriends size={60} color="#D7F205" />
                  </div>
                  <div className="font-bold text-2xl py-2 ">Birthday Party</div>
                  <div className="text-gray-400 text-lg py-2 ">
                    Nunc lacus odio, hendrerit id hendrerit ut, pretium eget
                    nunc. Mauris dignissim libero elementum egestas.
                  </div>
                  <div className="flex py-7">
                    <div className="my-auto text-bold hover:text-[#D7F205] tracking-[2px]">
                      READ MORE
                    </div>
                    <div className="h-8 w-8 stroke-[#D7F205] my-auto">
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
         
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Service;
