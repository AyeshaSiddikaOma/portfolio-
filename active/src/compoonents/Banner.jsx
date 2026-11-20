
import React from "react";
import img1 from "../assets/chakka.png";

// Components
import Container from "./Container";
import CircularText from "./CircularText";

// Images
import man from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-back mt-8 sm:mt-12 lg:mt-15 overflow-hidden">
      <Container>
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-30">

          {/* Heading */}
          <h1 className="text-white flex justify-center items-center text-[38px] sm:text-[55px] md:text-[85px] lg:text-[115px] xl:text-[180px] font-sora font-semibold tracking-tighter whitespace-nowrap">

            <span>Hello</span>

            {/* Circular Text */}
            <span className="relative hidden lg:block shrink-0">
              <CircularText
                text="REACT*BITS*COMPONENTS*"
                onHover="speedUp"
                direction="clockwise"
                spinDuration={20}
                size={200}
                fontSize={24}
                draggable
                hoverTilt={20}
                className="custom-class"
                tilt={0}
                fontWeight={900}
                letterSpacing={0}
                startAngle={0}
                repeat={1}
                fill
                ring={false}
              />

              <div className="absolute top-7 left-7 w-35 h-35">
                <img
                  src={img1}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </span>

            <span>Motion</span>
          </h1>

          {/* Banner Content */}
          <div className="mt-8 md:mt-12 lg:mt-5 flex flex-col lg:flex-row items-center">

            {/* Image */}
            <div className="w-full lg:w-[70%] flex justify-center items-center">

              <div className="hidden sm:block w-[10%] lg:w-[25%]"></div>

              <div className="w-full sm:w-[85%] lg:w-[80%]">
                <img
                  src={man}
                  alt="man"
                  className="w-full h-auto object-contain"
                />
              </div>

            </div>

            {/* Experience Content */}
            <div className="w-full lg:w-[30%] flex flex-col justify-center py-8 sm:py-10 lg:py-0 px-4 sm:px-8 lg:px-0 lg:ml-8 xl:ml-10">

              <p className="w-full xl:w-75 text-grey text-[13px] sm:text-[15px] font-sora leading-6 sm:leading-7">
                My role as a amplify tha story through my careful
                [Video Editor] selection of footages, pacing, and
                visual style. My keen attention to detail allows
                me to enhance the mood.
              </p>

              <div className="relative">

                <div className="w-full sm:w-75 h-1 bg-grey mt-5"></div>

                <h3 className="text-[65px] sm:text-[80px] md:text-[90px] lg:text-[100px] xl:text-[110px] relative text-white font-bold">

                  12+

                  <span className="text-grey text-[11px] sm:text-[13px] lg:text-[15px] font-sora absolute left-36 sm:left-44 lg:left-40 xl:left-50 top-20 sm:top-24 lg:top-28 whitespace-nowrap">
                    Years of Experience
                  </span>

                </h3>

                <div className="w-full sm:w-75 h-1 bg-grey mt-5"></div>

              </div>
            </div>
          </div>

          {/* Trusted Clients */}
          <div className="flex justify-center items-center text-white gap-x-2 sm:gap-x-4 mt-8 sm:mt-12">

            <div className="w-[15%] sm:w-[25%] lg:w-[30%] h-1 bg-grey"></div>

            <span className="text-center text-[10px] sm:text-[13px] md:text-[15px] whitespace-nowrap">
              <b className="text-indigo">100+</b> Trusted Clients Over the world
            </span>

            <div className="w-[15%] sm:w-[25%] lg:w-[30%] h-1 bg-grey"></div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default Banner;
