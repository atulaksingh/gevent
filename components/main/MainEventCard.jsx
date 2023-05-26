// import { data } from "autoprefixer";
import EventCardItem from "components/card/EventCardItem";
import Events from "components/card/Events";
import { FaUserFriends } from "react-icons/fa";
import React from "react";
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
function MainEventCard() {
  return (
    <>
      <div>
        <Events
          title="WHY CHOOSE US"
          titleHead="Very Responsible With Your Event"
          desc="There are several reasons why you should choose Panache Media for your event management needs.
"
          eventNo="1000"
          eventTitle="Event Done"
          img1="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680326893/331359564_726960882411809_5749394837003956188_n_ic78kw.jpg"
          img2="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680326891/331073563_1067810074621347_7381185098567563524_n_s0eego.jpg"
          card=<EventCardItem data={data} />
        />
      </div>
    </>
  );
}

export default MainEventCard;
