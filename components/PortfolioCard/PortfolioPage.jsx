import BgImage3 from "components/card/BgImage3";
import MainHeadingCard from "components/card/MainHeadingCard";
import Portfolio from "components/card/Portfolio";
import React from "react";
import UpComing from "./UpComing";

function PortfolioPage() {
  return (
    <>
      <div className="bg-black overflow-hidden">
        <div>
          <MainHeadingCard title="Our Portfolio" page=" Portfolio" />
        </div>
        <div className=" py-20">
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
        <div>
          <UpComing />
        </div>
      </div>
    </>
  );
}

export default PortfolioPage;
