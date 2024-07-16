"use client";
import React from "react";
import "./Footer.css";
import Instgramlogo from "../assets/Instgramlogo";
import FacebookLogo from "../assets/Facebooklogo";
import Pinterestlogo from "../assets/Pinterestlogo";
import Location from "../assets/Location"
import Mobile from "../assets/Mobile"
import Email from "../assets/Email"

export default function Footer() {
    const handleClick = () => {
      
        window.open('https://wa.me/+201129833816', '_blank'); 
      };
      const FacebookClick = () => {
      
        window.open('https://www.facebook.com/profile.php?id=100005745734953', '_blank'); 
      };
      const InstagramClick = () => {
      
        window.open('https://www.instagram.com/cvriim?igsh=MTB2cjZuNzIwMG1lbw%3D%3D&utm_source=qr', '_blank'); 
      };
      const PinterestClick = () => {
      
        window.open('https://www.pinterest.com/', '_blank'); 
      };
    
  return (
    <div className="container-fluid col_footer">
      <div className="row">
        
        <div className="UserInfo">
          <div className="DetailedUserInfo">
            <Location />
            <div className="numbers">New York, NY 10012, US</div>
          </div>
          <div className="DetailedUserInfo">
            <Email />
            <div className="numbers">info@example.com</div>
          </div>
          <div className="DetailedUserInfo">
            <Mobile />
            <div className="numbers">+ 01 234 567 88</div>
          </div>
          
        </div>
        

        <div className="col-md-4 col-sm-12 text-center align-self-center">
          <button className="conbtn"  onClick={handleClick}>
            CONTACT US
          </button>
        </div>

        <div >
          <div className="Platformes">
           <div onClick={FacebookClick}> < FacebookLogo /></div>
           <div onClick={PinterestClick}> <Pinterestlogo /></div>
           <div onClick={InstagramClick}> <Instgramlogo /></div>
            
          </div>
          <div className="CopyRight">Copyright: &copy; {new Date().getFullYear()}</div>
        </div>
      </div>
    </div>
  );
}
