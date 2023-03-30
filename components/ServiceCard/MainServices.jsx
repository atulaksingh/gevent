import About from "components/card/About";
import BgImage3 from "components/card/BgImage3";
import EventCardItem from "components/card/EventCardItem";
import Exprience from "components/card/Exprience";
import MainHeadingCard from "components/card/MainHeadingCard";
import Portfolio from "components/card/Portfolio";
import Service from "components/card/Service";
import MainAbout from "components/main/MainAbout";
import React from "react";
import { FaUserFriends } from "react-icons/fa";
// import { FaUserFriends } from "react-icons/fa";
const serviceCardData = [
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:
      "Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:
      "Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:
      "Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:
      "Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:
      "Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
  {
    icon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Birthday Partyt",
    cardDesc:
      "Nunc lacus odio, hendrerit id hendrerit ut, pretium eget nunc. Mauris dignissim libero elementum egestas.",
  },
];
const serviceData = [
  {
    cardIcon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Friendly Team",
    cardDesc: "Aenean pharetra erat in nisl blandit hendrerit integer.",
  },
  {
    cardIcon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Friendly Team",
    cardDesc: "Aenean pharetra erat in nisl blandit hendrerit integer.",
  },
  {
    cardIcon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Friendly Team",
    cardDesc: "Aenean pharetra erat in nisl blandit hendrerit integer.",
  },
  {
    cardIcon: <FaUserFriends size={60} color="#D7F205" />,
    cardTitle: "Friendly Team",
    cardDesc: "Aenean pharetra erat in nisl blandit hendrerit integer.",
  },
];
function MainServices() {
  return (
    <>
      <div className="bg-black">
        <div>
          <MainHeadingCard title="Our Service" page=" Services" />
        </div>
        <div>
          <Service
            title="SERVICES"
            titleHead="Event Service We Profide"
            desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet."
            card={serviceCardData}
          />
        </div>
        <div className="">
          <Exprience />
        </div>
        <div>
          <About
            title="OTHER SERVICE"
            titleHead="We Also Help In"
            desc="Panache Media offers top-notch production services that deliver high-quality content for various media platforms. With a focus on creativity and innovation, Panache Production services are designed to captivate audiences and elevate brands.
"
            img="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675841116/couple-standing-in-crowd-at-music-festival-2FGMHQ8a_holfbn.jpg"
            // aboutcard={<MainAboutItemCard />}
            aboutcard=<EventCardItem data={serviceData} />
            year="15"
            titleyear="Years Of service"
            buttonTitle="READ MORE"
          />
        </div>
        <div className=" pb-20">
          <Portfolio
            title="PORTFOLIO"
            titleHead="Some of Our Event"
            desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet."
            img1="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675511612/party-M8J3WXM_rgal2q.webp"
            img2="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675684545/group-of-friends-drinking-beers-enjoying-music-fes-PLYH7QA_vihdw5.jpg"
            img3="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675684545/group-of-friends-drinking-beers-enjoying-music-fes-PLYH7QA_vihdw5.jpg"
            img4="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675511612/party-M8J3WXM_rgal2q.webp"
            img5="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675684545/group-of-friends-drinking-beers-enjoying-music-fes-PLYH7QA_vihdw5.jpg"
          />
        </div>
        <div className="py-20">
        <BgImage3 
              title="Let's Talk About Your Event Idea With Us"
            desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet."
            buttonTitle="CONTACT US"
          />
        </div>
      </div>
    </>
  );
}

export default MainServices;
