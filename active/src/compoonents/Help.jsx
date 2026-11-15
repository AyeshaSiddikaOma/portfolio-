import React from "react";
import Container from "../compoonents/Container";
import Button from "../compoonents/Button";

import Headline from "../compoonents/Headline";

import HelpCart from "../compoonents/HelpCart";
const Help = () => {
  return (
    <>
      <div className="bg-back py-15">
        <Container>
          <div className="text-center">
            <h3 className="text-indigo font-sora font-semibold text-[12px]">
              my services
            </h3>
            <Headline head="Here's how I can help!" />
          </div>
          <div className="flex justify-between py-20">
            <HelpCart />
            <HelpCart />
            <HelpCart />
          </div>
          <Button
            btnName="Let’s Contact with Me"
            className="w-full justify-center"
          />
        </Container>
      </div>
    </>
  );
};

export default Help;
