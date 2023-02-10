import Service from "components/card/Service";
import { FaUserFriends } from "react-icons/fa";
import React from "react";
import ServiceIconCard from "components/card/ServiceIconCard";
const serviceCardData = [
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:"Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:"Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:"Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:"Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:"Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:"Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  
];
function MainService() {
  return (
    <>
      <div className="">
        <Service
          title="SERVICES"
          titleHead="Event Service We Profide"
          desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet."
          card={serviceCardData}
        />
      </div>
    </>
  );
}

export default MainService;
