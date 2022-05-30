import React from "react";
import "./Footer.css";
import{BsInstagram,BsGithub,BsLinkedin,BsFacebook}from 'react-icons/bs'

function Footer() {
  return (
    <div>
      <div className="social_media">
        <ul className="social-links">
          <li><a href="https://www.instagram.com/nop.__e_/"><BsInstagram/></a></li>
          <li><a href="https://github.com/majid-nope"><BsGithub/></a></li>
          <li><a href="https://www.facebook.com/majid.nope/"><BsLinkedin/></a></li>
          <li><a href="https://www.facebook.com/majid.nope/"><BsFacebook/></a></li>
        </ul>
      </div>
      <div className="disclaimer">
        <p>
          ©2020-2022 Copyright(For Fun 😜) Designed by
          <a href="https://majid-nope.github.io/NOPE./"> NOPE.</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
