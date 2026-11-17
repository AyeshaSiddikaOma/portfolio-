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
          <div className="flex gap-x-17.5 flex-col  lg:flex-row ms-10">
            <div className="w-[50%] ">
              <img src={bigimg} alt="" className="" />
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
              <div className=" my-5 flex flex-wrap   rounded-3xl ">
                
                <div className="  px-10 py-5 bg-back rounded-tl-2xl rounded-bl-2xl border-r-grey border-r " >
                  <h2 className="text-[48px] text-indigo font-bold font-sora" >30+</h2>
                  <h3 className=" text-grey font-[15px] font-sora">Years of Experience</h3>
                </div>
                <div className=" px-10 py-5 bg-back    border-r-grey border-r " >
                  <h2 className="text-[48px] text-indigo font-bold font-sora" >100+</h2>
                  <h3 className=" text-grey font-[15px] font-sora">Years of Experience</h3>
                </div>
                <div className=" px-10 py-5 bg-back  rounded-tr-2xl rounded-br-2xl " >
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
