import React from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import footer from "../assets/Footer.png";

// All React Icons Link Start
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

// All React Icons Link End
const Footer = () => {
  return (
    <>
      <div  style={{ backgroundImage: `url(${footer})` }}
              className="bg-cover bg-center py-30 font-sora">
        <Container>
          <div className="flex justify-between items-center text-white ">
            <div className="">
              <img src={logo} alt="" />
              <p className="w-85 py-5">
                I break down complex user the experience problems the create
                integrity focused to solutions that’s connect.
              </p>
              <div className="flex    gap-x-5 items-center text-[25px]">
                <CiFacebook />
                <FaInstagram />
                <FaGithub />
                <FaDribbble />
              </div>
            </div>
            <div className="">
              <h2 className="font-semibold text-[20px] py-4 uppercase">Legal Details</h2>
              <ul >
                <li  className="leading-10" >Policy Privacy</li>
                <li  className="leading-10" >Term & Conditions</li>
                <li  className="leading-10" >Refund and Cancellation</li>
                <li  className="leading-10" >Disclaimer</li>
              </ul>
            </div>

            <div className="">
              <h2 className="font-semibold text-[20px] py-4 uppercase">Contact</h2>
              <ul >
                <li  className="leading-10">hello-designer@gerold.com</li>
                <li  className="leading-10">+01 123 654 8096</li>
                <li  className="leading-10">+01 123 654 8096</li>
              </ul>
            </div>

            <div className="">
              <h2 className="font-semibold text-[20px] py-4 w-45 uppercase" >Subscribe to My Newsletter!</h2>

              <input type="text" className="bg-white text-black h-15 w-60 rounded-4xl pl-5" />
            </div>
          </div>
<br></br>
<br></br>
          <hr className="text-[white]"/>
          <br></br>

          <div className="flex justify-between text-white mt-5 ">
            <h2>AVAILABLE FOR FREELANCE</h2>
            <ul className="flex gap-x-5 text-[16px]">
                <li  >Work.</li>
                <li  >Services.</li>
                <li  >About.</li>
                <li  >Contact.</li>
            </ul>
            <h2>©All rights reserved by ThemeJunction</h2>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
