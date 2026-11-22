import React from "react";

const Lines = ({ pic, hline, sline, pera, vector, date }) => {
  return (
    <div className="mt-5 ">
      <div className="flex flex-col lg:flex-row text-white justify-between gap-5 lg:gap-0 mt-5">
        {/* Left: image + text */}
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-x-10">
          <div className="shrink-0">
            <img src={pic} alt="" className="w-full max-w-[200px] sm:max-w-none h-auto" />
          </div>

          <div>
            <h4 className="font-sora text-[18px] sm:text-[20px] mb-3">
              {hline}
            </h4>

            <span className="uppercase font-sora text-[13px] sm:text-[15px]">
              {sline}
            </span>

            <p className="text-[15px] sm:text-[18px] font-sora w-full max-w-[623px] text-grey mt-4">
              {pera}
            </p>
          </div>
        </div>

        {/* Right: date */}
        <div className="flex items-start gap-x-3 shrink-0">
          <div>
            <img src={vector} className="d-block" alt="" />
          </div>
          <span className="text-[15px] text-grey font-sora">{date}</span>
        </div>
      </div>

      <div className="w-full h-0.5 my-6 sm:my-10 bg-grey"></div>
    </div>
  );
};

export default Lines;