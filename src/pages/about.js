import React from 'react';
import  { useState, useEffect } from 'react';
import Exprience from "components/card/Exprience";
import CardAbout from "components/card/About";
import Events from "components/card/Events";
import Logo from "components/main/Logo";
import Service from "components/card/Service";
import MainAboutItemCard from "components/card/MainAboutItemCard";
import EventCardItem from "components/card/EventCardItem";
import { FaUserFriends } from "react-icons/fa";
import TrustedVender from "components/AboutCard/TrustedVender";
import BgImage3 from "components/card/BgImage3";
import Team from "components/AboutCard/Team";
import MainHeadingCard from "components/card/MainHeadingCard";
import Layout from "components/layouts/Layout";
import AOS from 'aos';
const data = [
  {
    cardIcon: <FaUserFriends size={50} color="#DF2844" />,
    cardTitle: "Firstly",
    cardDesc: "we have a team of experienced professionals who are dedicated to delivering exceptional service and creating unforgettable events.",
  },
  {
    cardIcon: <FaUserFriends size={50} color="#DF2844" />,
    cardTitle: "Secondly",
    cardDesc: "our collaborations with celebrities, supermodels, music and sport superstars give us access to exclusive resources and industry insights that we can use to enhance your event.",
  },
  {
    cardIcon: <FaUserFriends size={50} color="#DF2844" />,
    cardTitle: "Thirdly",
    cardDesc: "we are committed to excellence and attention to detail in every aspect of our work, from initial planning to execution, ensuring that your event is flawless and unforgettable.",
  },
  {
    cardIcon: <FaUserFriends size={50} color="#DF2844" />,
    cardTitle: "Lastly",
    cardDesc: "we offer a range of specialist workshops, movie tie-ups, and other event services to meet your specific needs, making us a one-stop-shop for all your event management requirements..",
  },
  
];
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

function About() {
  useEffect(() => {
    AOS.init();
    
  }, [])
  return (
    <>
    <Layout>

      <div >
       <div className="">
       <MainHeadingCard 
        title="About PanacheMedia"
        page="About Us"
       />
       </div>
         
          <div className="">
            <div>
              <CardAbout
                title="ABOUT PanacheMedia"
                titleHead="Make Your Event Idea Come True"
                desc="In a world dominated by brands, everyone is vying for a piece of the consumer's attention and affection. To help our clients succeed in this race, we offer innovative communication solutions that enhance their brand's visibility and engagement with their desired audience."
                img="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680326757/334319325_1308986979679568_3531215051071949229_n_gy6uy2.jpg"
                aboutcard={<MainAboutItemCard />}
                year="15"
                titleyear="Years Of Experience"
                buttonTitle="ReadMore"
              />
            </div>
          </div>
          <div className="">
            <Logo />
            {/* <Events /> */}
          </div>
          <div>
            <Events
              title="WHY CHOOSE US"
              titleHead="Very Responsible With Your Event"
              desc="There are several reasons why you should choose Panache Media for your event management needs."
              eventNo="172"
              eventTitle="Event Done"
              img1="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680326893/331359564_726960882411809_5749394837003956188_n_ic78kw.jpg"
          img2="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680326891/331073563_1067810074621347_7381185098567563524_n_s0eego.jpg"
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
                desc="We specialize in customized entertainment solutions that add an extra zing to your communication. From collaborations with celebrities, supermodels, and sports stars to specialist workshops, movie tie-ups, and events, Panache Media has got you covered."
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
            {/* <Team /> */}
          </div>
    
      </div>
    </Layout>
    </>
  );
}

export default About;
