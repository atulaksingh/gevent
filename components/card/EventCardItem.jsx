import React from "react";
import { FaUserFriends } from "react-icons/fa";
function EventCardItem(props) {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 overflow-x-hidden">
          {props.data.map((item, index) => (
            <div
              key={index}
              className="col-span-2 md:col-span-1"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-offset="100"
            >
              <div className="flex gap-4 md:gap-5 py-1">
                <div>{item.cardIcon}</div>
                <div className="">
                  <div className="md:text-xl text-white font-bold py-2">
                    {item.cardTitle}
                  </div>
                  <div className="text-sm md:text-base text-gray-300 font-normal ">
                    {item.cardDesc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EventCardItem;
