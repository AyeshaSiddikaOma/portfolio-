
import React from "react";
import Container from "./Container";
import Button from "./Button";

import logo from "../assets/logo.png";

import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaGithub, FaDribbble } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-kalo py-4 sm:py-5 xl:py-6.25 z-100 fixed top-0 left-0 w-full">
      <Container>
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="logo"
              className="w-28 sm:w-32 xl:w-auto"
            />
          </div>

          {/* Navigation */}
          <ul className="hidden xl:flex gap-x-5 xxl:gap-x-7.5 text-white text-[15px] opacity-80 cursor-pointer font-sora">
            <li className="navLine">Services</li>
            <li className="navLine">Works</li>
            <li className="navLine">Resume</li>
            <li className="navLine">Skills</li>
            <li className="navLine">Testimonials</li>
            <li className="navLine">Contact</li>
          </ul>

          {/* Social + Button + Menu */}
          <div className="flex items-center gap-x-3 sm:gap-x-5">

            {/* Social Icons */}
            <div className="hidden sm:flex items-center text-white gap-x-3 sm:gap-x-4 xl:gap-x-5 text-xl sm:text-2xl">
              <CiFacebook />
              <FaInstagram />
              <FaGithub />
              <FaDribbble />
            </div>

            {/* Button */}
            <div className="hidden md:block">
              <Button btnName="Let's Talk" />
            </div>

            {/* Hamburger */}
            <div className="flex xl:hidden flex-col gap-y-2 cursor-pointer p-1">
              <div className="w-8 sm:w-10 h-1 bg-grey rounded-full"></div>
              <div className="w-8 sm:w-10 h-1 bg-grey rounded-full"></div>
              <div className="w-8 sm:w-10 h-1 bg-grey rounded-full"></div>
            </div>

          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
