import React from "react";
import Container from "../compoonents/Container";
import bigimg from "../assets/big.png";
import Headline from "./Headline";
import Button from "./Button";
function Pixel() {
  return (
    <>
      <div className="bg-black py-30">
        <Container>
          <div className="flex gap-x-17.5">
            <div className="w-[50%] ">
              <img src={bigimg} alt="" />
            </div>
            <div className="w-[50%]">
             <h3 className="text-indigo font-sora font-semibold text-[12px]">
                My  Recent Work
              </h3>

              <Headline
                head="Passionate On Digital
                Marketer Focused on
                Driving Results."
              />
              <p className="xl:w-120 sm:w-full md:w-full lg-w-fuli text-grey font-[15px] font-sora">
                This encompasses a variety of strategies, including search
                engine optimization (SEO), content marketing, social media
                marketing, email marketing,.
              </p>
              {/* box */}
              <div className=" my-5 flex justify-between bg-back rounded-3xl ">
                <div className="py-5 px-10  border-r-grey border-r " >
                  <h2 className="text-[48px] text-indigo font-bold font-sora" >30+</h2>
                  <h3 className=" text-grey font-[15px] font-sora">Years of Experience</h3>
                </div>
                <div className="py-5 px-10 bg-back    border-r-grey border-r " >
                  <h2 className="text-[48px] text-indigo font-bold font-sora" >100+</h2>
                  <h3 className=" text-grey font-[15px] font-sora">Years of Experience</h3>
                </div>
                <div className="py-5 px-10 bg-back  " >
                  <h2 className="text-[48px] text-indigo font-bold font-sora" >300+</h2>
                  <h3 className=" text-grey font-[15px] font-sora">Years of Experience</h3>
                </div>
                
              </div>
              {/* box */}

              <Button btnName="Learn More" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Pixel;
