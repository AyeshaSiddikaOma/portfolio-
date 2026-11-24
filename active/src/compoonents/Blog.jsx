import React from "react";
import Headline from "../compoonents/Headline";
import Container from "../compoonents/Container";
import BlogCard from "../compoonents/BlogCard";
import laptop from "../assets/laptop.png";
import bura from "../assets/bura.png";

const Blog = () => {
  return (
    <>
      <div className="py-30 bg-back ">
        <Container>
          <div className="text-center">
    <h3 className="text-indigo font-sora font-semibold uppercase text-center text-[12px]">
Behind the Pixels            </h3>
            <Headline head="Here's how I can help!" />
          </div>
          <div className="mt-20 flex flex-col items-center justify-center gap-8 sm:gap-10 lg:flex-row lg:gap-8 xl:gap-12">
            <BlogCard pic={laptop} classs="font-[16px] text-grey" pera="New Age" text="The Role of Technology
in Modern Log" classname="font-bold text-white text-[20px] font-sora uppercase" />
            <BlogCard pic={bura}  classs="font-[16px] text-grey" pera="New Age" text="The Role of Technology
in Modern Log" classname="font-bold text-white text-[20px] font-sora uppercase" />
            <BlogCard pic={laptop} classs="font-[16px] text-grey" pera="New Age" text="The Role of Technology
in Modern Log" classname="font-bold text-white text-[20px] font-sora uppercase" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog;
