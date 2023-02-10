import Exprience from "components/card/Exprience";
import About from "components/card/About";
import Events from "components/card/Events";
import Logo from "components/main/Logo";
import Service from "components/card/Service";
import React from "react";
import MainAboutItemCard from "components/card/MainAboutItemCard";
import EventCardItem from "components/card/EventCardItem";
import { FaUserFriends } from "react-icons/fa";
import TrustedVender from "components/AboutCard/TrustedVender";
import BgImage3 from "components/card/BgImage3";
import Team from "components/AboutCard/Team";
import MainHeadingCard from "components/card/MainHeadingCard";
import Layout from "components/layouts/Layout";
const data = [
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
const imgstyle = {
  backgroundImage:
    "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1675667922/concert-audience-PG2VFZFa_qxrj6o.webp)",
  height: "100vh",
  width: "100vw",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
};
function about() {
  return (
    <>
    <Layout>

      <div >
       <div className="">
       <MainHeadingCard 
        title="About Gevent"
        page="About Us"
       />
       </div>
         
          <div className="">
            <div>
              <About
                title="ABOUT GEVENT"
                titleHead="Make Your Event Idea Come True"
                desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet."
                img="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675666264/business-people-party-celebration-success-concept-XGXN6PU_rn0kpf.webp"
                aboutcard={<MainAboutItemCard />}
                year="15"
                titleyear="Years Of Experience"
                buttonTitle="ReadMore"
              />
            </div>
          </div>
          <div>
            <Logo />
            {/* <Events /> */}
          </div>
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
          <div className="">
            <Exprience   
             />
          </div>
          <div>
            <div>
              <Service
                title="SERVICES"
                titleHead="Event Service We Profide"
                desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet."
                card={serviceCardData}
              />
            </div>
            <TrustedVender />
          </div>
          <div>
          <BgImage3 
              title="Let's Talk About Your Event Idea With Us"
            desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet."
            buttonTitle="CONTACT US"
          />
          </div>
          <div>
            <Team />
          </div>
    
      </div>
    </Layout>
    </>
  );
}

export default about;
