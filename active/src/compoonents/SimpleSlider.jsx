import React from "react";
import oma from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laptop from "../assets/laptop.png";
import bura from "../assets/bura.png";
import Container from "./Container";


const Slider = oma?.default || oma



export default function SimpleSlider() {
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
  return (
    <>
    <div className="bg-back">
    <div className="max-w-6xl mx-auto bg-back">

      <Slider {...settings}>


        
     <div className="px-5">
        <img  className="w-6xl mx-auto" src={laptop} alt="" />
     </div>
     <div className="px-5">
        <img className="w-6xl mx-auto" src={laptop} alt="" />
     </div>
     <div className="px-5">
        <img className="w-6xl mx-auto" src={laptop} alt="" />
     </div>
     <div className="px-5">
        <img className="w-6xl mx-auto" src={bura} alt="" />
     </div>
     <div className="px-5">
        <img className="w-6xl mx-auto" src={bura} alt="" />
     </div>
     <div className="px-5">
        <img className="w-6xl mx-auto" src={bura} alt="" />
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