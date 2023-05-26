import About from "components/card/About";
import React from "react";
import TrustedVenderCard from "./TrustedVenderCard";
const trustedVenderCardData=[
    {
        number:"01",
        title:"Understanding the Client's Vision",
        desc:"We start by listening to our clients' requirements, understanding their vision, and identifying their goals for the event."
    },
    {
        number:"02",
        title:"Planning and Execution",
        desc:"We meticulously plan and execute every aspect of the event, from selecting the venue to coordinating with the celebrities and performers, ensuring that every detail is taken care of."
    },
    {
        number:"03",
        title:"Collaborations",
        desc:"Nunc quis consequat urna, a rhoncus lectus. Ut aliquam id sem quis rutrum. Donec lacinia id lectus quis posuere."
    },
    {
        number:"04",
        title:"Post-Event Analysis",
        desc:"We conduct a post-event analysis to evaluate the success of the event, identify areas for improvement, and gather feedback from the clients to ensure that we continuously deliver exceptional events."
    },
]
function TrustedVender() {
  return (
    <div>
      <About
        title="HOW WE WORK"
        titleHead="The Movement"
        desc="Choosing Panache Media means choosing quality, creativity, and a commitment to excellence in every aspect of your event."
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
