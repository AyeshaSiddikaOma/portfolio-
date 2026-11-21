import React from "react";
import mini from "../assets/mini.png";
const Comment = () => {
  return (
    <>
      <div className="max-w-90% mt-5 px-5 mb-5 text-grey mx-auto border-2 py-10 rounded-3xl border-indigo ">
        <div className="flex  items-center gap-x-5 px-10">
          <img src={mini} alt="" />
          <div className="">
            <h2>Tim Bailey</h2>
            <div className="flex">
              <p>SEO Specialist, Theme Junction</p>
            </div>
            <br />
            <br />
          </div>
        </div>
        <div className="h-0.5 max-w-175   bg-grey mx-auto"></div>
        <p className="lg:w-182.75 w-full  mx-auto text-[20px] font-sora mt-5">
          “Taylor is a professional Designer really helps my business by
          providing value to my business. Taylor is a professional Designer he
          really helps my business by providing value to my business. Taylor is
          a professional. Helps business providing value to my business.
          professional Designer he really helps my business
        </p>
      </div>
    </>
  );
};

export default Comment;
