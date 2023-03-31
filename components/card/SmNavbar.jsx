import React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MdOpacity } from "react-icons/md";
function SmNavbar(props) {
  const [open, setopen] = useState(false);
  const item = {
    exit: {
      MdOpacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };
  return (
    <>
      <div className="container">
        <AnimatePresence>
          <header>
            <div className="menu ">
              <div className="relative h-20 w-52  z-30 -top-20 ">
                <Image
                  src={
                    "https://res.cloudinary.com/dt0j68vdr/image/upload/v1675750518/Gevent-Logo_abdaie.png"
                  }
                  fill="layout"
                  objectFit="contain"
                  className="h-fit w-fit"
                  alt="logo img"
                />
              </div>
              {/* <i className="fa fa-bars"></i> */}
            </div>
          </header>
          <motion.div
            className="manu_container"
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit="exit"
          >
            <div className="btn_close my-auto mb-2 justify-center align-middle" onClick={props.close}>
              x
            </div>
            <div className="manu_container">
              {props?.head?.map((item, index) => (
                <motion.a key={index} href={item.link}
                
                initial={{ y: 90, opacity: 0 }}
            animate={{ y:0, opacity: 1 }}
            transition={{ delay:.4 }}
                exit={{
                  opacity:0,
                  y:90,
                  transition:{
                    ease:"easeInOut",
                    // duration:0.3,
                    delay:.5
                  }
                }}
                
                >
                  {item.name}
                </motion.a>
              ))}
              {/* <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a> */}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default SmNavbar;
