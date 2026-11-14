import React from "react";
const SkillCard = ({ head, percent, icon, description }) => {
  return (
    <>
      <div className="py-10 bg-black px-7 rounded-4xl box-border">
        <div className="flex gap-10 items-center  ">
          <img src={icon} alt="" />
          <h3 className="text-white opacity-80 w-31.25 font-sora text-[20px]">
            {head}
          </h3>
        </div>
        <p className=" py-5 text-grey font-[15px] mt-5 font-sora">
          {description}
        </p>
        <div className="mb-1 text-sm text-white font-medium text-heading text-right">
          {percent}<b>%</b>
        </div>
        <div className="w-full bg-white rounded-full h-1.5">
          <div className="bg-indigo h-1.5 rounded-full w-[45%]"></div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
