import About from "components/card/About";
import MainAboutItemCard from "components/card/MainAboutItemCard";
import React from "react";

function MainAbout() {
  return (
    <>
      <About
        title="ABOUT GEVENT"
        titleHead="Make Your Event Idea Come True"
        desc="In a world dominated by brands, everyone is vying for a piece of the consumer's attention and affection. To help our clients succeed in this race, we offer innovative communication solutions that enhance their brand's visibility and engagement with their desired audience.t."
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
