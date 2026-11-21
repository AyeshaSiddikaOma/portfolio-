import React from "react";
import Container from "./Container";
import Headline from "./Headline";
const Client = () => {
  return (
    <>
      <div className="bg-back py-20">
        <Container>
          <div className="flex  justify-between">
            <div className="">
              <h3 className="text-indigo font-sora font-semibold text-[12px]">
                My Recent Work
              </h3>
              <Headline
                head="Let’s Hear From
Dear Clients."
                className="tracking-tight w-97.5 text-[45px] font-bold"
              />
            </div>
            <div className="">
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Client;
