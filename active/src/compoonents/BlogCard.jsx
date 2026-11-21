import React from "react";
const BlogCard = ({pic,text,classname,pera,classs}) => {
  return (
    <div className="p-5 w-full  lg:flex-1 bg-black text-white rounded-4xl transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
      <img src={pic} alt="" className="w-full rounded-4xl" />
      <p className={`w-82.75 text-[16px] font-sora text-grey py-1 mt-6 ${classs}`}>
       {pera}
      </p>
      <h2 className={`${classname}`}>
        {text}
      </h2>
    </div>
  );
};

export default BlogCard;
