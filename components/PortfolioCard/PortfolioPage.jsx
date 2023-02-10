import BgImage3 from "components/card/BgImage3";
import MainHeadingCard from "components/card/MainHeadingCard";
import Portfolio from "components/card/Portfolio";
import React from "react";
import UpComing from "./UpComing";

function PortfolioPage() {
  return (
    <>
      <div className="bg-black">
        <div>
          <MainHeadingCard title="Our Portfolio" page=" Portfolio" />
        </div>
        <div className=" py-20">
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
        <div>
            <UpComing />
        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
