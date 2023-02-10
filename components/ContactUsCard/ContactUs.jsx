import MainHeadingCard from "components/card/MainHeadingCard";
import React from "react";
import ContactCard from "./ContactCard";

function ContactUs() {
  return (
    <div className="bg-black">
      <div>
        <MainHeadingCard title="Contact Us" page=" Contact Us" />
      </div>
      <div>
        <ContactCard />
      </div>
    </div>
  );
}

export default ContactUs;
