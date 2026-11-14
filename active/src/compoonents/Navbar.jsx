import React from "react";
// All Component Start
import Container from "./Container";
import Button from "./Button";
// All Component End
// All Images Start
import logo from "../assets/logo.png";
// All Images End
// All React Icons Link Start
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

// All React Icons Link End

function Navbar() {
  return (
    <>
      <nav className="bg-kalo py-6.25 z-100 fixed top-0 left-0 w-full">
        <Container>
          <div className="  flex   justify-between items-center    ">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <ul className="  hidden  xl:flex gap-x-7.5 text-white text-[15px] opacity-80 cursor-pointer font-sora">
              <li className="navLine">Services</li>
              <li className="navLine">Works</li>
              <li className="navLine">Resume</li>
              <li className="navLine">Skills</li>
              <li className="navLine">Testimonials</li>
              <li className="navLine">Contact</li>
            </ul>
            <div className="flex items-center gap-x-3.75">
              <div className="flex text-white   gap-x-5 items-center text-[25px]">
                <CiFacebook />
                <FaInstagram />
                <FaGithub />
                <FaDribbble />
              </div>
              <Button btnName="Let's Talk" />
            </div>

            <div className=" block xl:hidden mx-4 ">
                <div className="w-12.5 h-1 bg-grey mt-5"></div>
                <div className="w-12.5 h-1 bg-grey mt-5"></div>
                <div className="w-12.5 h-1 bg-grey mt-5"></div>
            </div>
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
