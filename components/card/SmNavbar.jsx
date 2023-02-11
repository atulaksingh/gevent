import React from "react";
import { useState } from "react";
function SmNavbar() {
    const [open, setopen] = useState(false)
    const closeManu =()=>{
        
    }
  return (
    <>
      <div className="container">
        <header>
          <div className="menu">
            <i className="fa fa-bars"></i>
          </div>
        </header>
        <div className="manu_container">
        <div className="btn_close" onClick={closeManu}>x</div>
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a>
        </div>
      </div>
    </>
  );
}

export default SmNavbar;
