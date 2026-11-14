import React from "react";
import Headline from "./Headline";
import Button from "./Button";
import Container from "../compoonents/Container";
import SkillCard from "./SkillCard";
import icon from "../assets/icon.png";

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
              percent="70"
              head="Adobe AfterEffect"
            />
                        {/* Card One */}

            <SkillCard
              icon={icon}
              description="Adobe After Effects is a
              powerful software application
             used motion graphics."
              percent="70"
              head="Adobe AfterEffect"
            />
                        {/* Card One */}

            <SkillCard
              icon={icon}
              description="Adobe After Effects is a
              powerful software application
             used motion graphics."
              percent="70"
              head="Adobe AfterEffect"
            />
                        {/* Card One */}

            <SkillCard
              icon={icon}
              description="Adobe After Effects is a
              powerful software application
             used motion graphics."
              percent="70"
              head="Adobe AfterEffect"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Skill;
