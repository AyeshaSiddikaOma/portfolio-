
import React from "react";
import Container from "../compoonents/Container";
import bigimg from "../assets/big.png";
import Headline from "./Headline";
import Button from "./Button";

function Pixel() {
  return (
    <div className="bg-black py-16 sm:py-20 lg:py-30">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-17.5 mx-5">

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src={bigimg}
              alt="Digital Marketing"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">

              <h3 className="text-indigo font-sora font-semibold uppercase mb-4 text-[12px]">
Behind the Pixels            </h3>

            <Headline
              head="Passionate On Digital Marketer Focused on Driving Results."
            />

            <p className="w-full xl:w-120 text-grey text-[14px] sm:text-[15px] font-sora leading-7">
              This encompasses a variety of strategies, including search
              engine optimization (SEO), content marketing, social media
              marketing, email marketing.
            </p>

            {/* Statistics Boxes */}
            <div className="my-5 grid grid-cols-1 sm:grid-cols-3 rounded-2xl overflow-hidden">

              <div className="px-4 sm:px-3 md:px-5 lg:px-3 xl:px-5 py-5 bg-back border-b sm:border-b-0 sm:border-r border-grey">
                <h2 className="text-[38px] sm:text-[32px] md:text-[38px] text-indigo font-bold font-sora">
                  30+
                </h2>
                <h3 className="text-grey text-[12px] sm:text-[11px] xl:text-[13px] font-sora">
                  Years of Experience
                </h3>
              </div>

              <div className="px-4 sm:px-3 md:px-5 lg:px-3 xl:px-5 py-5 bg-back border-b sm:border-b-0 sm:border-r border-grey">
                <h2 className="text-[38px] sm:text-[32px] md:text-[38px] text-indigo font-bold font-sora">
                  100+
                </h2>
                <h3 className="text-grey text-[12px] sm:text-[11px] xl:text-[13px] font-sora">
                  Years of Experience
                </h3>
              </div>

              <div className="px-4 sm:px-3 md:px-5 lg:px-3 xl:px-5 py-5 bg-back">
                <h2 className="text-[38px] sm:text-[32px] md:text-[38px] text-indigo font-bold font-sora">
                  300+
                </h2>
                <h3 className="text-grey text-[12px] sm:text-[11px] xl:text-[13px] font-sora">
                  Years of Experience
                </h3>
              </div>

            </div>

            <Button btnName="Learn More" />

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Pixel;
