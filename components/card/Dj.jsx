import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

function Dj() {
  return (
  <>
     <div className="">
      <div className="kb-slider">
  {/* <div className="owl-slide">
    <div className="owl-img" 
    style={{opacity:1, visibility:"inherit"}}
    // style="opacity: 1; visibility: inherit;"
    >
      <img
        src="http://www.panachemedia.in/assets/img/home/03.jpg"
        alt="img"
        // style="transform: matrix(1.05577, 0, 0, 1.05577, 0, 0); width: 1440px; height: auto; top: -307px; left: 0px; transform-origin: 23% 14%;"
        style={{transform:"matrix(1.05577, 0, 0, 1.05577, 0, 0)" , width:"1440px",height:"auto",top:"-307px",left:"0px",transformOrigin:"23% 14%"}}
      />
    </div>
    <div
      className="owl-caption"
    //   style="inset: auto auto 10% 10%; visibility: inherit; opacity: 1; transform: translate3d(57.9179px, 0px, 0.00804415px);"
    style={{inset:"auto auto 10% 10%", visibility:'inherit',opacity:1,}}
    >
      <div className="caption" data-pos="bottom-left">
        <span className="sub-title">Welcome</span>
        <span className="title">To The World Of Panache Media</span>
      </div>
    </div>
  </div>
  <div className="owl-slide">
    <div className="owl-img" 
   style={{opacity:1, visibility:"inherit"}}
    >
      <img
        src="http://www.panachemedia.in/assets/img/home/02.jpg"
        alt="img"
        style={{transform:"matrix(1.05577, 0, 0, 1.05577, 0, 0)" , width:"1440px",height:"auto",top:"-307px",left:"0px",transformOrigin:"23% 14%"}}
      />
    </div>
    <div
      className="owl-caption"
      style={{inset:"auto auto 10% 10%", visibility:'inherit',opacity:1, transform:"translate3d(-72px, 0px, 0.01px)"}}
    >
      <div className="caption" data-pos="bottom-right">
        <span className="sub-title">Celebrate any event with us</span>
        <span className="title">we are here for your happiness</span>
      </div>
    </div>
  </div> */}
  {/* <div className="owl-slide">
    <div className="owl-img" style="opacity: 0; visibility: hidden;">
      <img
        src="http://www.panachemedia.in/assets/img/home/04.jpg"
        alt="img"
        style="transform: matrix(1, 0, 0, 1, 0, 0); width: 1440px; height: auto; top: -307px; left: 0px; transform-origin: 11% 96%;"
      />
    </div>
    <div
      className="owl-caption"
      style="inset: auto auto 10% 10%; visibility: hidden; opacity: 0; transform: translate3d(72px, 0px, 0.01px);"
    >
      <div className="caption" data-pos="bottom-left">
        <span className="sub-title">One of the leading</span>
        <span className="title">Event Company of India</span>
      </div>
    </div>
  </div>
  <div id="kb-loader" style="display: none;">
    <div id="followingBallsG">
      <div id="followingBallsG_1" className="followingBallsG"></div>
      <div id="followingBallsG_2" className="followingBallsG"></div>
      <div id="followingBallsG_3" className="followingBallsG"></div>
      <div id="followingBallsG_4" className="followingBallsG"></div>
    </div>
  </div>
  <div className="owl-slide">
    <div className="owl-img" style="opacity: 0; visibility: hidden;">
      <img
        src="assets/img/home/01.jpg"
        alt="img"
        style="transform: matrix(1, 0, 0, 1, 0, 0); width: 1440px; height: auto; top: -307px; left: 0px; transform-origin: 84% 84%;"
      />
    </div>
    <div
      className="owl-caption"
      style="inset: auto 10% 10% auto; visibility: hidden; opacity: 0; transform: translate3d(-72px, 0px, 0.01px);"
    >
      <div className="caption" data-pos="bottom-right">
        <span className="sub-title">Brand Activation</span>
        <span className="title">&amp; Promotional Events</span>
      </div>
    </div>
  </div>
  <div className="owl-slide">
    <div className="owl-img" style="opacity: 0; visibility: hidden;">
      <img
        src="assets/img/home/05.jpg"
        alt="img"
        style="transform: matrix(1, 0, 0, 1, 0, 0); width: 1440px; height: auto; top: -307px; left: 0px; transform-origin: 22% 100%;"
      />
    </div>
    <div
      className="owl-caption"
      style="inset: auto auto 10% 10%; visibility: hidden; opacity: 0; transform: translate3d(72px, 0px, 0.01px);"
    >
      <div className="caption" data-pos="bottom-left">
        <span className="sub-title">First Time Ghulam ALi &amp; Son</span>
        <span className="title">performing together for EK Ehsaas</span>
      </div>
    </div>
  </div>
  <div className="owl-slide">
    <div className="owl-img" style="opacity: 0; visibility: hidden;">
      <img
        src="assets/img/home/06.jpg"
        alt="img"
        style="transform: matrix(1, 0, 0, 1, 0, 0); width: 1440px; height: auto; top: -307px; left: 0px; transform-origin: 87% 86%;"
      />
    </div>
    <div
      className="owl-caption"
      style="inset: auto auto 10% 10%; visibility: hidden; opacity: 0; transform: translate3d(72px, 0px, 0.01px);"
    >
      <div className="caption" data-pos="bottom-left">
        <span className="sub-title">Main Tera Hero</span>
        <span className="title">Promotions</span>
      </div>
    </div>
  </div>
  <div className="owl-slide">
    <div className="owl-img" style="opacity: 0; visibility: hidden;">
      <img
        src="assets/img/home/07.jpg"
        alt="img"
        style="transform: matrix(1, 0, 0, 1, 0, 0); width: 1440px; height: auto; top: -307px; left: 0px; transform-origin: 98% 3%;"
      />
    </div>
    <div
      className="owl-caption"
      style="inset: auto auto 10% 10%; visibility: hidden; opacity: 0; transform: translate3d(72px, 0px, 0.01px);"
    >
      <div className="caption" data-pos="bottom-left">
        <span className="sub-title">Reel Life</span>
        <span className="title">Mary Kom</span>
      </div>
    </div>
  </div>
  <div className="owl-slide">
    <div className="owl-img" style="opacity: 0; visibility: hidden;">
      <img
        src="assets/img/home/08.jpg"
        alt="img"
        style="transform: matrix(1, 0, 0, 1, 0, 0); width: 1440px; height: auto; top: -307px; left: 0px; transform-origin: 15% 5%;"
      />
    </div>
    <div
      className="owl-caption"
      style="inset: auto auto 10% 10%; visibility: hidden; opacity: 0; transform: translate3d(72px, 0px, 0.01px);"
    >
      <div className="caption" data-pos="bottom-left">
        <span className="sub-title">One of Panache Media</span>
        <span className="title">Full House Show</span>
      </div>
    </div>
  </div> */}
</div>;

<Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="owl-img" 
    style={{opacity:1, visibility:"inherit"}}
    >
      <img
        src="http://www.panachemedia.in/assets/img/home/03.jpg"
        alt="img"
      
        style={{transform:"matrix(1.05577, 0, 0, 1.05577, 0, 0)" , width:"1440px",height:"auto",top:"-307px",left:"0px",transformOrigin:"23% 14%"}}
      />
    </div>
    <div
      className="owl-caption"
    style={{inset:"auto auto 10% 10%", visibility:'inherit',opacity:1, transform:"translate3d(57.9179px, 0px, 0.00804415px)"}}
    >
      <div className="caption" data-pos="bottom-left">
        <span className="sub-title">Welcome</span>
        <span className="title">To The World Of Panache Media</span>
      </div>
    </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="owl-img" 
    style={{opacity:1, visibility:"inherit"}}
    >
      <img
        src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089317/05_twr5sf.jpg"
        alt="img"
      
        style={{transform:"matrix(1.05577, 0, 0, 1.05577, 0, 0)" , width:"1440px",height:"auto",top:"-307px",left:"0px",transformOrigin:"23% 14%"}}
      />
    </div>
    <div
      className="owl-caption"
    style={{inset:"auto auto 10% 10%", visibility:'inherit',opacity:1, transform:"translate3d(57.9179px, 0px, 0.00804415px)"}}
    >
      <div className="caption" data-pos="bottom-left">
        <span className="sub-title">Welcome</span>
        <span className="title">To The World Of Panache Media</span>
      </div>
    </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="owl-img" 
    style={{opacity:1, visibility:"inherit"}}
    >
      <img
        src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089316/06_tbyhq2.jpg"
        alt="img"
      
        style={{transform:"matrix(1.05577, 0, 0, 1.05577, 0, 0)" , width:"1440px",height:"auto",top:"-307px",left:"0px",transformOrigin:"23% 14%"}}
      />
    </div>
    <div
      className="owl-caption"
    style={{inset:"auto auto 10% 10%", visibility:'inherit',opacity:1, transform:"translate3d(57.9179px, 0px, 0.00804415px)"}}
    >
      <div className="caption" data-pos="bottom-left">
        <span className="sub-title">Welcome</span>
        <span className="title">To The World Of Panache Media</span>
      </div>
    </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="owl-img" 
    style={{opacity:1, visibility:"inherit"}}
    >
      <img
        src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089315/01_1_k7oaba.jpg"
        alt="img"
      
        style={{transform:"matrix(1.05577, 0, 0, 1.05577, 0, 0)" , width:"1440px",height:"auto",top:"-307px",left:"0px",transformOrigin:"23% 14%"}}
      />
    </div>
    <div
      className="owl-caption"
    style={{inset:"auto auto 10% 10%", visibility:'inherit',opacity:1, transform:"translate3d(57.9179px, 0px, 0.00804415px)"}}
    >
      <div className="caption" data-pos="bottom-left">
        <span className="sub-title">Welcome</span>
        <span className="title">To The World Of Panache Media</span>
      </div>
    </div>
          
        </SwiperSlide>
      </Swiper>

    </div>
  </>
  )
}

export default Dj
