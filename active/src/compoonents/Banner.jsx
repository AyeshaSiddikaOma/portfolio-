import React from "react";
// All Component Start
import Container from "./Container";
import CircularText from "./CircularText";

// All Component End
import man from "../assets/banner.png";
const Banner = () => {
  return (
    <>
            <div className=" bg-back">

      <Container>
        <div className="py-30 ">
          <h1 className="text-white justify-center items-center text-[70px]    xxl:text-[203px]  font-sora flex font-semibold">
            <span>Hello </span>
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
                className="custom-class   hidden lg:block"
                tilt={0}
                fontWeight={900}
                letterSpacing={0}
                startAngle={0}
                repeat={1}
                fill
                ring={false}
              />
            </span>{" "}
            <span> Motion</span>
          </h1>

          <div className=" mt-5   flex flex-col  lg:flex-row  ">
            <div className="w-[70%]  flex  ">
              <div className="w-[25%] hiddn  lg:block"></div>
              <div className="w-[80%] ">
                <img src={man} alt="man" />
              </div>
            </div>

            <div className="w-full max-w-[30%] sm:mx-auto py-10 ms-20">
              <p className="xl:w-75.5 w-full text-grey font-[15px] font-sora">
                My role as a amplify tha story through my careful [Video Editor]
                selection of footages, pacing, and visual style. My keen
                attention to detail allows me to enhance the mood.
              </p>
              <div className="relative">
                <div className="w-75 h-1 bg-grey mt-5 "></div>
                <h3 className="text-[110px]  text-white font-bold">12+</h3>
                <span className=" text-grey  font-[15px] font-sora absolute top-35 ms-30">
                  Years of Experience
                </span>
                <div className="w-75 h-1 bg-grey mt-5"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-center text-white gap-x-2 ">
            <div className="w-[30%] h-1 bg-grey mt-5"></div>
            <span className="mt-2">
              <b className="text-indigo">100+</b> Trusted Clients Over the world
            </span>
            <div className="w-[30%] h-1 bg-grey mt-5"></div>
          </div>
        </div>
      </Container>
      </div>
    </>
  );
};

export default Banner;
