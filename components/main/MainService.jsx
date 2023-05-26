import Service from "components/card/Service";
import { FaUserFriends } from "react-icons/fa";
import React from "react";
import ServiceIconCard from "components/card/ServiceIconCard";
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
function MainService() {
  return (
    <>
      <div className="">
        <Service
          title="SERVICES"
          titleHead="Event Service We Profide"
          desc="We specialize in customized entertainment solutions that add an extra zing to your communication. From collaborations with celebrities, supermodels, and sports stars to specialist workshops, movie tie-ups, and events, Panache Media has got you covered."
          card={serviceCardData}
        />
      </div>
    </>
  );
}

export default MainService;
