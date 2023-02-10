import About from "components/card/About";
import MainAboutItemCard from "components/card/MainAboutItemCard";
import React from "react";

function MainAbout() {
  return (
    <>
      <About
        title="ABOUT GEVENT"
        titleHead="Make Your Event Idea Come True"
        desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor, interdum id vestibulum et pharetra ac libero. Etiam vestibulum in mi sit amet."
        img="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675666264/business-people-party-celebration-success-concept-XGXN6PU_rn0kpf.webp"
        aboutcard={<MainAboutItemCard />}
        year="15"
        titleyear="Years Of Experience"
        buttonTitle="READ MORE"

      />
    </>
  );
}

export default MainAbout;
