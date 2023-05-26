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
    icon: <FaUserFriends size={60} color="#DF2844" />,
    cardTitle: "BRAND ACTIVATION",
    cardDesc:"Panache Media offers top-notch brand activation services that create unforgettable experiences for customers. Their expertise in event management and collaboration with celebrities make them a go-to choice for brands looking to make a splash"
  },
  {
    icon: <FaUserFriends size={60} color="#DF2844" />,
    cardTitle: "SPECIAL EVENT MANAGEMENT",
    cardDesc:"Panache Media offers specialized event management services, collaborating with celebrities, singers, and stars to make your event a truly unforgettable experience.",
  },
  {
    icon: <FaUserFriends size={60} color="#DF2844" />,
    cardTitle: "MARKETING TIE-UPS",
    cardDesc:"Panache Media offers top-notch marketing tie-up services by collaborating with prominent celebrities, supermodels, music and sport superstars, organizing specialist workshops and movie tie-ups, and managing events to elevate your brand's recognition..",
  },
  {
    icon: <FaUserFriends size={60} color="#DF2844" />,
    cardTitle: "LIVE CONCERTS",
    cardDesc:"Experience the thrill of live music and entertainment like never before with Panache Media's expertly managed and star-studded concerts and events.",
  },
  {
    icon: <FaUserFriends size={60} color="#DF2844" />,
    cardTitle: "Brand Ad Films",
    cardDesc:"Panache Media's brand ad films services elevate event management and collaborations with celebrities, supermodels, and sports superstars for a touch of glamour and expertise.",
  },
  {
    icon: <FaUserFriends size={60} color="#DF2844" />,
    cardTitle: "Panache Production",
    cardDesc:"Panache Media offers top-notch production services that exude elegance and style..",
  },
  
];
const serviceData = [
  {
    cardIcon: <FaUserFriends size={60} color="#DF2844" />,
    cardTitle: "Specialist Workshops",
    cardDesc: "These workshops are designed to provide valuable insights and skills to professionals in their respective fields.",
  },
  {
    cardIcon: <FaUserFriends size={60} color="#DF2844" />,
    cardTitle: "Movie Tie-ups",
    cardDesc: "We specialize in movie tie-ups, where we collaborate with film production companies to promote their movies through events, brand endorsements, and other marketing initiatives.",
  },
  {
    cardIcon: <FaUserFriends size={60} color="#DF2844" />,
    cardTitle: "Brand Collaborations",
    cardDesc: "We collaborate with brands to create unique and engaging marketing campaigns that leverage our expertise in event management and celebrity collaborations.",
  },
  {
    cardIcon: <FaUserFriends size={60} color="#DF2844" />,
    cardTitle: "Sports Events",
    cardDesc: "We organize sports events, such as charity tournaments, celebrity matches, and other sports-related events, that bring together sports enthusiasts, celebrities, and athletes for a memorable experience.",
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
            desc="We specialize in customized entertainment solutions that add an extra zing to your communication. From collaborations with celebrities, supermodels, and sports stars to specialist workshops, movie tie-ups, and events, Panache Media has got you covered."
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
            img="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680786840/78794503_2367400653365359_500717530864680960_n_1_up4o3h.jpg"
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
            desc="Panache Media's impressive portfolio showcases their expertise in creating unforgettable events, collaborating with renowned personalities and delivering top-notch services in the entertainment industry."
            img1="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327442/48260275_1767710546667709_6424977874578571264_n_1_vnyfqx.jpg"
    img2="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327258/320748600_3355567158025032_5482328413241159719_n_xwcx2a.jpg"
    img3="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327241/315451400_5314992335272828_8956863650012412118_n_wtbfyu.jpg"
    img4="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680327239/98130104_2718505794921508_5155036395399544832_n_zjek6m.jpg"
    img5="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680526820/79228408_2367379320034159_4327316590241513472_n_lnwooh.jpg"
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
