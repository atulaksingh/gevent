import About from "components/card/About";
import MainAboutItemCard from "components/card/MainAboutItemCard";
import React from "react";

function MainAbout() {
  return (
    <>
      <About
        title="ABOUT PanacheMedia"
        titleHead="Make Your Event Idea Come True"
        desc="In a world dominated by brands, everyone is vying for a piece of the consumer's attention and affection. To help our clients succeed in this race, we offer innovative communication solutions that enhance their brand's visibility and engagement with their desired audience.t."
        img="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680326757/334319325_1308986979679568_3531215051071949229_n_gy6uy2.jpg"
        aboutcard={<MainAboutItemCard />}
        year="10"
        titleyear="Years Of Experience"
        buttonTitle="READ MORE"

      />
    </>
  );
}

export default MainAbout;
