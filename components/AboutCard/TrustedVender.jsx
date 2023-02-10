import About from "components/card/About";
import React from "react";
import TrustedVenderCard from "./TrustedVenderCard";
const trustedVenderCardData=[
    {
        number:"01",
        title:"Explain The Concept",
        desc:"Nunc quis consequat urna, a rhoncus lectus. Ut aliquam id sem quis rutrum. Donec lacinia id lectus quis posuere."
    },
    {
        number:"01",
        title:"Explain The Concept",
        desc:"Nunc quis consequat urna, a rhoncus lectus. Ut aliquam id sem quis rutrum. Donec lacinia id lectus quis posuere."
    },
    {
        number:"01",
        title:"Explain The Concept",
        desc:"Nunc quis consequat urna, a rhoncus lectus. Ut aliquam id sem quis rutrum. Donec lacinia id lectus quis posuere."
    },
    {
        number:"01",
        title:"Explain The Concept",
        desc:"Nunc quis consequat urna, a rhoncus lectus. Ut aliquam id sem quis rutrum. Donec lacinia id lectus quis posuere."
    },
]
function TrustedVender() {
  return (
    <div>
      <About
        title="HOW WE WORK"
        titleHead="The Movement"
        desc="Cras porttitor urna eu metus efficitur, a tempus ligula vehicula. Donec ornare pharetra metus nec vehicula. Etiam mauris dolor interdum id."
        img="https://res.cloudinary.com/dt0j68vdr/image/upload/v1675772298/musicians-on-stage-at-a-live-rock-concert-F2CZRAW_tpinnd.jpg"
        aboutcard={<TrustedVenderCard data={trustedVenderCardData} />}
        year="80"
        titleyear="Trusted Vendor"
        buttonTitle="CONTACT US"
      />
    </div>
  );
}

export default TrustedVender;
