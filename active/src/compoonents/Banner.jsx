
import React from "react";

// Components
import Container from "./Container";
import CircularText from "./CircularText";

// Images
import man from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-back mt-15">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24 xl:py-30">

          {/* Heading */}
          <h1 className="text-white flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-4 text-[35px] sm:text-[50px] md:text-[65px] lg:text-[90px] xxl:text-[203px] font-sora font-semibold text-center">

            <span>Hello</span>

            <span>
              <CircularText
                text="REACT*BITS*COMPONENTS*"
                onHover="speedUp"
                direction="clockwise"
                spinDuration={20}
                size={200}
                fontSize={24}
                draggable
                hoverTilt={20}
                className="custom-class hidden lg:block"
                tilt={0}
                fontWeight={900}
                letterSpacing={0}
                startAngle={0}
                repeat={1}
                fill
                ring={false}
              />
            </span>

            <span>Motion</span>
          </h1>

          {/* Banner Content */}
          <div className="mt-8 lg:mt-5 flex flex-col lg:flex-row items-center">

            {/* Image */}
            <div className="w-full lg:w-[70%] flex justify-center lg:justify-start items-center">

              <div className="hidden lg:block w-[25%]"></div>

              <div className="w-full sm:w-[85%] lg:w-[80%]">
                <img
                  src={man}
                  alt="man"
                  className="w-full h-auto object-contain"
                />
              </div>

            </div>

            {/* Experience Content */}
            <div className="w-full lg:w-[30%] flex flex-col justify-center py-8 lg:py-10 px-4 sm:px-8 lg:px-0 lg:ml-10">

              <p className="w-full xl:w-75.5 text-grey text-[14px] sm:text-[15px] font-sora leading-7">
                My role as a amplify tha story through my careful [Video Editor]
                selection of footages, pacing, and visual style. My keen
                attention to detail allows me to enhance the mood.
              </p>

              <div className="relative">

                <div className="w-full sm:w-75 h-1 bg-grey mt-5"></div>

                <h3 className="text-[75px] sm:text-[90px] lg:text-[110px] text-white font-bold">
                  12+
                </h3>

                <span className="text-grey text-[13px] sm:text-[15px] font-sora absolute top-25 sm:top-30 lg:top-35 left-24 sm:left-30 lg:left-30">
                  Years of Experience
                </span>

                <div className="w-full sm:w-75 h-1 bg-grey mt-5"></div>

              </div>
            </div>
          </div>

          {/* Trusted Clients */}
          <div className="flex justify-center items-center text-white gap-x-2 sm:gap-x-4 mt-8">

            <div className="w-[15%] sm:w-[30%] h-1 bg-grey"></div>

            <span className="text-center text-[12px] sm:text-[15px] whitespace-nowrap">
              <b className="text-indigo">100+</b> Trusted Clients Over the world
            </span>

            <div className="w-[15%] sm:w-[30%] h-1 bg-grey"></div>

          </div>

        </div>
      </Container>
    </div>
  );
};

export default Banner;
