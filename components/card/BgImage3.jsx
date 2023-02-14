import React from "react";
// const imgstyle = {
//   backgroundImage:
//     "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1675667922/concert-audience-PG2VFZFa_qxrj6o.webp)",
//   height: "50vh",
//   width: "98.7vw",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   backgroundAttachment: "fixed",
//   backgroundPosition: "center",
// };
function BgImage3(props) {
  return (
    <>
      <div
        class=" bg-fixed w-full lg:h-96 bg-no-repeat bg-cover bg-left "
        style={{
          backgroundImage:
            "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1676032137/people-at-the-concert-SKPN7UV_zzbbpd.webp)",
        }}
      >
     
        <div className="container m-auto   ">
          <div className="py-10 text-center">
            <h1 className="text-[2rem] leading-[40px] sm:text-[2.8rem] md:text-[3rem] lg:text-[3.5rem] sm:leading-[65px] md:leading-[80px] lg:leading-[60px] font-[600] mx-1 text-white font-[Syne]">
              {props.title}
            </h1>
            <div className="text-gray-300 font-semibold text-sm md:text-base lg:text-lg mx-3 sm:mx-10 lg:mx-24 py-6 font-[Syne]">{props.desc}</div>
            <div className="pb-20">
              <button className="font-[Syne] p-4 text-bold text-white hover:text-[#D7F205] tracking-[2px] border border-[#D7F205]">
                {props.buttonTitle}
              </button>
            </div>
          </div>
        </div>
        </div>
     
    </>
  );
}

export default BgImage3;
