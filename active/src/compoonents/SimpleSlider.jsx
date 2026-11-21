import React from "react";
import oma from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mobile from "../assets/grey2.png";
import Container from "./Container";
import BlogCard from "./BlogCard";

const Slider = oma?.default || oma



export default function SimpleSlider() {
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
  return (
    <>
    <div className="bg-back ">
    <div className="  mx-auto bg-back">

      <Slider {...settings} className="w-full ">





     <div className=" px-3 py-5">
      <BlogCard pic={mobile}   classs="font-bold text-white font-sora"  pera="New Age" text="Project was about precision and information..." classname="font-[16px] text-grey" />
     </div>

     <div className=" px-3 py-5">
      <BlogCard pic={mobile}   classs="font-bold text-white font-sora" pera="New Age" text="Project was about precision and information..." classname="font-[16px] text-grey" />
     </div>

     <div className="px-3  py-5">
      <BlogCard pic={mobile}   classs="font-bold text-white font-sora" pera="New Age" text="Project was about precision and information..." classname="font-[16px] text-grey" />
     </div>


     <div className=" px-3 py-5">
      <BlogCard pic={mobile}  classs="font-bold text-white font-sora"  pera="New Age" text="Project was about precision and information..." classname="font-[16px] text-grey" />
     </div>

     <div className=" px-3 py-5">
      <BlogCard pic={mobile} pera="New Age" text="Project was about precision and information..." classname="font-[16px] text-grey" />
     </div>

     <div className="px-3  py-5">
      <BlogCard pic={mobile}   classs="font-bold text-white font-sora" pera="New Age" text="Project was about precision and information..." classname="font-[16px] text-grey" />
     </div>






    </Slider>

</div>
    </div>


        </>

  );


  
}



function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className="next-arrow" onClick={onClick}>
      ❯
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className="prev-arrow" onClick={onClick}>
      ❮
    </button>
  );
}