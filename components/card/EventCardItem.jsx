import React from 'react'
import { FaUserFriends } from "react-icons/fa";
function EventCardItem(props) {
  return (
    <>
        <div>
        <div className="grid grid-cols-2 ">
        {
            props.data.map((item,index)=>(
                <div key={index
                } className="col-span-2 md:col-span-1">
                <div className="flex gap-5 py-1">
                  <div>
                   {item.cardIcon}
                  </div>
                  <div className="">
                    <div className="text-xl text-white font-bold py-2">{item.cardTitle}</div>
                    <div className="text-lg text-gray-300 font-semibold">
                      {item.cardDesc}
                    </div>
                  </div>
                </div>
                
              </div>
            ))
        }
           
              {/* <div className="col-span-1">
                <div className="flex gap-5 py-1">
                  <div>
                    <FaUserFriends size={60} color="#D7F205" />
                  </div>
                  <div className="">
                    <div className="text-xl text-white font-bold my-3">Friendly Team</div>
                    <div className="text-lg text-gray-400">
                      Aenean pharetra erat in nisl blandit hendrerit integer.
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="col-span-1">
                <div className="flex gap-5 py-1">
                  <div>
                    <FaUserFriends size={60} color="#D7F205" />
                  </div>
                  <div className="">
                    <div className="text-xl text-white font-bold my-3">Friendly Team</div>
                    <div className="text-lg text-gray-400">
                      Aenean pharetra erat in nisl blandit hendrerit integer.
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="col-span-1">
                <div className="flex gap-5 py-1">
                  <div>
                    <FaUserFriends size={60} color="#D7F205" />
                  </div>
                  <div className="">
                    <div className="text-xl text-white font-bold my-3">Friendly Team</div>
                    <div className="text-lg text-gray-400">
                      Aenean pharetra erat in nisl blandit hendrerit integer.
                    </div>
                  </div>
                </div>
                
              </div> */}
            </div>
        </div>
    </>
  )
}

export default EventCardItem
