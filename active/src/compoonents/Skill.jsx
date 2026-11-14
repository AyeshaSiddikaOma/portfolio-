import React from "react";
import Headline from "./Headline";
import Button from "./Button";
import Container from "../compoonents/Container";
import SkillCard from "./SkillCard";
import icon from "../assets/icon.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const Skill = () => {
  return (
    <>
      <div className=" bg-back">
        <Container>
          <div className="flex sm:flex-col lg:flex-row  justify-between items-center">
            <div className="">
              <h3 className="text-indigo font-sora font-semibold text-[12px]">My Recent Work</h3>
              {" "}
              <Headline className="sm:max-w-full"/>
            </div>
            <div className="">
              {" "}
              <Button btnName="Learn More" />
            </div>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 mt-20">
            {/* Card One */}
            <SkillCard
              icon={icon}
              description="Adobe After Effects is a
              powerful software application
             used motion graphics."
              percent="50"
              head="Adobe AfterEffect"
                            oma="50"

            />
                        {/* Card One */}

            <SkillCard
              icon={icon2}
              description="Adobe After Effects is a
              powerful software application
             used motion graphics."
              percent="70"
              head="Adobe AfterEffect"
                            oma="70"

            />
                        {/* Card One */}

            <SkillCard
              icon={icon3}
              description="Adobe After Effects is a
              powerful software application
             used motion graphics."
              percent="60"
              head="Adobe AfterEffect"
              oma="w-10%"
            />
                        {/* Card One */}

            <SkillCard
              icon={icon4}
              description="Adobe After Effects is a
              powerful software application
             used motion graphics."
              percent="100"
              head="Adobe AfterEffect"
                            oma="w-100%"

            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skill;
