import React from 'react'
import Headline from "../compoonents/Headline";
import Container from "../compoonents/Container";
import BlogCard from "../compoonents/BlogCard";
import laptop from "../assets/laptop.png";
import bura from "../assets/bura.png";

const Blog = () => {
  return (
    <>
    <Container>
 <div className='py-30 bg-back '>
     <div className="text-center">
            <h3 className="text-indigo font-sora font-semibold text-[12px]">
              my services
            </h3>
            <Headline head="Here's how I can help!" />
          </div>
          <div className="flex justify-between mt-20">
<BlogCard pic={laptop}/>
<BlogCard  pic={bura}/>
<BlogCard  pic={laptop}/>
          </div>
    </div>
    </Container>
   
    </>
  )
}

export default Blog