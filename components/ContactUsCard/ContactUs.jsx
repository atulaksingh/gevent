import MainHeadingCard from "components/card/MainHeadingCard";
import React from "react";
import ContactCard from "./ContactCard";
import GMap from "./GMap";
import GoogleMap from "./GMap";

function ContactUs() {
  return (
    <div className="bg-black">
      <div>
        <MainHeadingCard title="Contact Us" page=" Contact Us" />
      </div>
      <div>
        <ContactCard />
      </div>
      <div>
        <GMap />
      </div>
    </div>
  );
}

export default ContactUs;
