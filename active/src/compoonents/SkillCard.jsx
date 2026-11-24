import React from "react";
const SkillCard = ({ head, percent, icon, description,oma }) => {
  return (
    <>
      <div className="py-10 bg-black px-7 rounded-4xl  box-border  transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl">
        <div className="flex gap-5 items-center  ">
          <img src={icon} alt="" />
          <h3 className="text-white opacity-80 w-31.25  font-sora text-[20px]">
            {head}
          </h3>
        </div>
        <p className=" py-5 w-[237px] tracking-tighter text-grey text-[16px] font-normal mt-5 font-sora">
          {description}
        </p>
        <div className="mb-1 text-sm text-white font-medium text-heading text-right">
          {percent}<b>%</b>
        </div>
        <div className=" bg-white rounded-full h-1.5">
          <div className={`bg-indigo h-1.5  rounded-full  `}    style={{ width: `${oma}%` }}
  ></div>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
