
import React from "react";
import Container from "./Container";
import Headline from "./Headline";
import VerticalSwipeToSlide from "./VerticalSwipeToSlide";

const Client = () => {
  return (
    <section className="bg-back   pt-20 px-4 ">
      <Container>
        <div className="flex flex-col  lg:flex-row items-start gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-[35%]">
                <h3 className="text-indigo font-sora font-semibold uppercase mb-4 text-[12px]">
Behind the Pixels            </h3>

            <Headline
              head="Let’s Hear From Dear Clients."
              className="tracking-tight w-full text-3xl sm:text-4xl lg:text-[45px] font-bold"
            />
          </div>

          {/* Right Slider */}
          <div className="w-full lg:w-[65%]  min-w-0 overflow-hidden">
            <VerticalSwipeToSlide />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Client;
