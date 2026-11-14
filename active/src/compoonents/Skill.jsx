import React from "react";
import Headline from "./Headline";
import Button from "./Button";
import Container from "../compoonents/Container";
const Skill = () => {
  return (
    <>
      <div className=" bg-back">
        <Container>
          <div className="flex justify-between items-center">
            <div className="">
              {" "}
              <Headline />
            </div>
            <div className="">
              {" "}
              <Button btnName="Learn More" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skill;
