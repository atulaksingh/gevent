import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useAnimation } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";
import { useInView } from "react-hook-inview";
// import required modules
import AOS from "aos";
import "aos/dist/aos.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import { InfoBox } from "@react-google-maps/api";
import { motion, useAnimationControls } from "framer-motion";
function Hero() {
  const controls = useAnimationControls();
  useEffect(() => {
    controls.start({
      // x: 200,
      // scale: 1.3,
      // initial: 0,
      // transition: { duration: 8, repeat: Infinity },

      // transitionEnd: { display: "none" },
    });
  }, []);
  return (
    <>
      <div className=" text-white bg-black mt-10">
        <div className="relative  overflow-hidden  w-full overflow-x-hidden z-0">
          {/* <Image
            src={
              "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675511612/party-M8J3WXM_rgal2q.webp"
            }
            layout="fill"
            objectFit="cover"
            className=" h-fit w-fit"
            alt="hero img"
          /> */}
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <motion.div
            
                animate={{ x: 200, scale: 1.5 }}
                initial={{x:0 ,scale:0.9}}
                transition={{ duration: 9, delay: 0, repeat: Infinity }}
                className="owl-img sm:block hidden"
                style={{ opacity: 1, visibility: "inherit" }}
              >
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089313/02_1_fxhwlf.jpg"
                  alt="img"
                  className="Dj "
                />
              
              </motion.div>
              <motion.div
                animate={{ x: 50, scale: 1.5 }}
                // initial={{x:0 ,s}}
                transition={{ duration: 9, delay: 0, repeat: Infinity }}
                className="owl-img sm:hidden block"
                style={{ opacity: 1, visibility: "inherit" }}
              >
               
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089313/02_1_fxhwlf.jpg"
                  alt="img"
                  className="jd w-full h-40"
                />
              </motion.div>
              <div
                className="owl-caption"
                style={{
                  // inset: "auto auto 10% 10%",
                  // visibility: "inherit",
                  // opacity: 1,
                  transform: "translate3d(27.9179px, 0px, 1.00804415px  )",
                }}
              >
                <motion.div
                  animate={{ x: 150 }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="caption sm:block hidden"
                  data-pos="bottom-left"
                >
                  <span className="sub-title ">
                    Celebrate any event with us
                  </span>

                  <span className="title">we are here for your happiness</span>
                </motion.div>
                <div className="caption sm:hidden block" data-pos="bottom-left">
                  <span className="sub-title ">
                    Celebrate any event with us
                  </span>

                  <span className="title">we are here for your happiness</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                animate={{ x: 10, scale: 1.5 }}
                transition={{ duration: 9, delay: 2, repeat: Infinity }}
                className="owl-img"
                style={{ opacity: 1, visibility: "inherit" }}
              >
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089314/04_xckzgx.jpg"
                  alt="img"
                  className="Dj  sm:block hidden"
                />
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089314/04_xckzgx.jpg"
                  alt="img"
                  className="jd sm:hidden block"
                />
              </motion.div>
              <div
                className="owl-caption"
                style={{
                  // inset: "auto auto 10% 10%",
                  // visibility: "inherit",
                  // opacity: 1,
                  transform: "translate3d(27.9179px, 0px, 0.00804415px)",
                }}
              >
                <motion.div
                  animate={{ x: 150 }}
                  transition={{ duration: 4, delay: 2, repeat: Infinity }}
                  className="caption sm:block hidden"
                  data-pos="bottom-left"
                >
                  <span className="sub-title ">One of the leading</span>

                  <span className="title">Event Company of India</span>
                </motion.div>
                <div className="caption sm:hidden block" data-pos="">
                  <span className="sub-title ">One of the leading</span>

                  <span className="title">Event Company of India</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                animate={{ y: -10, scale: 1.5 }}
                transition={{ duration: 9, delay: 5.5, repeat: Infinity }}
                className="owl-img"
                style={{ opacity: 1, visibility: "inherit" }}
              >
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089317/05_twr5sf.jpg"
                  alt="img"
                  className="Dj sm:block hidden"
                />
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089317/05_twr5sf.jpg"
                  alt="img"
                  className="jd sm:hidden block"
                />
              </motion.div>
              <div
                className="owl-caption"
                style={{
                  transform: "translate3d(27.9179px, 0px, 0.00804415px)",
                }}
              >
                <motion.div
                  animate={{ x: 150 }}
                  transition={{ duration: 4, delay: 5.5, repeat: Infinity }}
                  className="caption sm:block hidden"
                  data-pos="bottom-left"
                >
                  <span className="sub-title ">
                    First Time Ghulam ALi & Son
                  </span>

                  <span className="title">
                    performing together for EK Ehsaas
                  </span>
                </motion.div>
                <div className="caption sm:hidden block" data-pos="bottom-left">
                  <span className="sub-title ">
                    First Time Ghulam ALi & Son
                  </span>

                  <span className="title">
                    performing together for EK Ehsaas
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                animate={{ y: 48, scale: 1 }}
                initial={{ scale: 1.5 }}
                transition={{
                  duration: 9,
                  delay: 8,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="owl-img"
                style={{ opacity: 1, visibility: "inherit" }}
              >
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089316/06_tbyhq2.jpg"
                  alt="img"
                  className="Dj sm:block hidden"
                />
                    <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089316/06_tbyhq2.jpg"
                  alt="img"
                  className="jd sm:hidden block"
                />
              </motion.div>
              <div
                className="owl-caption"
                style={{
                  transform: "translate3d(27.9179px, 0px, 0.00804415px)",
                }}
              >
                <motion.div
                  animate={{ x: 20 }}
                  initial={{ x: 700 }}
                  transition={{ duration: 7, delay: 8, repeat: Infinity }}
                  className="caption sm:block hidden"
                  data-pos="bottom-left"
                >
                  <span className="sub-title">Main Tera Hero</span>

                  <span className="title">Promotions</span>
                </motion.div>
                <div className="caption sm:hidden block" data-pos="bottom-left">
                  <span className="sub-title">Main Tera Hero</span>

                  <span className="title">Promotions</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                animate={{ y: 44, scale: 1 }}
                initial={{ scale: 1.5 }}
                transition={{ duration: 9, delay: 8, repeat: Infinity }}
                className="owl-img"
                style={{ opacity: 1, visibility: "inherit" }}
              >
                <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089315/01_1_k7oaba.jpg"
                  alt="img"
                  className="Dj sm:block hidden"
                />
                        <img
                  src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089315/01_1_k7oaba.jpg"
                  alt="img"
                  className="jd sm:hidden block"
                />
                
              </motion.div>
              <div
                className="owl-caption"
                style={{
                  transform: "translate3d(27.9179px, 0px, 0.00804415px)",
                }}
              >
                <motion.div
                  animate={{ x: 200 }}
                  transition={{ duration: 8, delay: 8, repeat: Infinity }}
                  className="caption sm:block hidden"
                  data-pos="bottom-left"
                >
                  <span className="sub-title">Brand Activation</span>

                  <span className="title">& Promotional Events</span>
                </motion.div>
                <div className="caption sm:hidden block" data-pos="bottom-left">
                  <span className="sub-title">Brand Activation</span>

                  <span className="title">& Promotional Events</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div id="main-content abs">
        	
			<div class="kb-slider">
				<div class="item">	
					<img src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089316/06_tbyhq2.jpg" alt="img" />
					<div class="caption" data-pos="bottom-left">
							<span class="sub-title">Welcome</span>
							<span class="title">To The World Of Panache Media</span>
					</div>
				</div>
				<div class="item">
					<img src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1680089317/05_twr5sf.jpg" alt="img" />
					<div class="caption" data-pos="bottom-right">
						<span class="sub-title">Celebrate any event with us</span>
						<span class="title">we are here for your happiness</span>
					</div>
				</div>
				<div class="item">
					<img src="assets/img/home/04.jpg" alt="img" />
					<div class="caption" data-pos="bottom-left">
						<span class="sub-title">One of the leading</span>
						<span class="title">Event Company of India</span>
					</div>
				</div>
				<div class="item">
					<img src="assets/img/home/01.jpg" alt="img" />
					<div class="caption" data-pos="bottom-right">
						<span class="sub-title">Brand Activation</span>
						<span class="title">& Promotional Events</span>
					</div>
				</div>
                <div class="item">
					<img src="assets/img/home/05.jpg" alt="img" />
					<div class="caption" data-pos="bottom-left">
						<span class="sub-title">First Time Ghulam ALi & Son</span>
						<span class="title">performing together for EK Ehsaas</span>
					</div>
				</div>
                <div class="item">
					<img src="assets/img/home/06.jpg" alt="img" />
					<div class="caption" data-pos="bottom-left">
						<span class="sub-title">Main Tera Hero</span>
						<span class="title">Promotions</span>
					</div>
				</div>
				<div class="item">
					<img src="assets/img/home/07.jpg" alt="img" />
					<div class="caption" data-pos="bottom-left">
						<span class="sub-title">Reel Life</span>
						<span class="title">Mary Kom</span>
					</div>
				</div>
                <div class="item">
					<img src="assets/img/home/08.jpg" alt="img" />
					<div class="caption" data-pos="bottom-left">
						<span class="sub-title">One of Panache Media</span>
						<span class="title">Full House Show</span>
					</div>
				</div>
				
				
			</div>
					
		</div> */}
          <div className="absolute  w-[100vw] bg-gradient-to-t from-[#131601] to-transparent  z-10"></div>
          {/* <div className="absolute w-screen top-28 text-center">
            <div className="py-10">
              <div className="text-[#ddf242] mb-5 m-auto text-lg font-bold md:space-x-20 md:tracking-widest font-[Syne] uppercase">
                panache media
              </div>
              <h1 className="text-[2rem] leading-[40px] sm:text-[3rem] md:text-[4.5rem] lg:text-[5rem] sm:leading-[65px] md:leading-[80px] lg:leading-[90px] font-[600] mx-1 text-white font-[Syne]">
                Welcome To The World Of Panache Media
              </h1>
              <div className="text-gray-300 font-semibold md:text-lg lg:text-xl mx-5 sm:mx-14 lg:mx-36 md:py-5 lg:py-10 font-[Syne]">
                Duis consectetur urna ac urna sollicitudin, in porta metus
                dignissim. Morbi malesuada nisl ac nibh laoreet, in ultrices est
                elementum. Suspendisse fringilla efficitur risus ac iaculis.
                Mauris neque enim.
              </div>
              <div className="visible md:hidden py-5 sm:py-10 text-center ">
                <button className=" p-4 text-bold text-white hover:text-[#DF2844] tracking-[2px] border border-[#DF2844]">
                  OUR SERVICE
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Hero;
