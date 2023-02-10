// import { data } from "autoprefixer";
import EventCardItem from "components/card/EventCardItem";
import Events from "components/card/Events";
import { FaUserFriends } from "react-icons/fa";
import React from "react";
const data = [
  {
    cardIcon: <FaUserFriends size={50} color="#D7F205" />,
    cardTitle: "Friendly Team",
    cardDesc: "Aenean pharetra erat in nisl blandit hendrerit integer.",
  },
  {
    cardIcon: <FaUserFriends size={50} color="#D7F205" />,
    cardTitle: "Friendly Team",
    cardDesc: "Aenean pharetra erat in nisl blandit hendrerit integer.",
  },
  {
    cardIcon: <FaUserFriends size={50} color="#D7F205" />,
    cardTitle: "Friendly Team",
    cardDesc: "Aenean pharetra erat in nisl blandit hendrerit integer.",
  },
  {
    cardIcon: <FaUserFriends size={50} color="#D7F205" />,
    cardTitle: "Friendly Team",
    cardDesc: "Aenean pharetra erat in nisl blandit hendrerit integer.",
  },
  
];
function MainEventCard() {
  return (
    <>
      <div>
        <Events
          title="WHY CHOOSE US"
          titleHead="Very Responsible With Your Event"
          desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet."
          eventNo="172"
          eventTitle="Event Done"
          img1="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675666264/business-people-party-celebration-success-concept-XGXN6PU_rn0kpf.webp"
          img2="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675666264/business-people-party-celebration-success-concept-XGXN6PU_rn0kpf.webp"
          card=<EventCardItem data={data} />
        />
      </div>
    </>
  );
}

export default MainEventCard;
