import React from "react";
import box from "../assets/box.png";
const HelpCart = () => {
  return (
    <>
      <div className="p-10 bg-black text-white w-[30%] rounded-4xl">
        <img src={box} alt="" />
        <h2 className="text-[30px] font-bold text-white font-sora mt-3">Web Development</h2>
        <p className="w-82.75 text-[16px] font-sora text-grey py-5" >
          Conducting qualitative and quantitative research to understand user
          needs, behaviors, and pain points. Utilizing methods such as surveys,
          interviews, and usability testing to actionable insights.
        </p>
        <ul className="list-disc ms-3" >
          <li>UI/UX Design</li>
          <li>Research</li>
          <li> Mobile & Web App</li>
        </ul>
      </div>
    </>
  );
};

export default HelpCart;
