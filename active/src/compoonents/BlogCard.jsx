import React from "react";
const BlogCard = ({pic}) => {
  return (
    <div className="p-5 w-full max-w-[400px] lg:flex-1 bg-black text-white w-[30%] rounded-4xl transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
      <img src={pic} alt="" className="w-full rounded-4xl" />
      <p className="w-82.75 text-[16px] font-sora text-grey py-1 mt-6">
        <span>business</span>
        <span>Nov 01, 2025</span>
      </p>
      <h2 className="text-[30px] font-bold text-white font-sora mt-3">
        The Role of Technology in Modern Log
      </h2>
    </div>
  );
};

export default BlogCard;
