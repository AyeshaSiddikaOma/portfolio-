import React from "react";
import Container from "./Container";
import Headline from "./Headline";
const Arrows = () => {
  return (
    <>
      <div className="bg-back py-10">
        <Container>
          <div className="flex">
            <div className="text">
              <h3 className="text-indigo font-sora font-semibold text-[12px]">
                My Recent Work
              </h3>
              <Headline
                head="Recent work for
MY clients!"
                className="uppercase w-[442px] text-[45px] font-semibold tracking-tighter"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Arrows;
