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
            <h3 className="text-indigo font-sora font-semibold text-[12px]">
              my services
            </h3>
            <Headline head="Here's how I can help!" />
          </div>
          <div className="mt-20 flex flex-col items-center justify-center gap-8 sm:gap-10 lg:flex-row lg:gap-8 xl:gap-12">
            <BlogCard pic={laptop} />
            <BlogCard pic={bura} />
            <BlogCard pic={laptop} />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog;
