import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Comment from "./Comment"
import mini from "../assets/mini.png";

import Hi from "react-slick";
const Slider = Hi?.default || Hi

function VerticalSwipeToSlide() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>

        <div>
          <Comment mini={mini}/>
        </div>
        <div>
          <Comment/>
        </div>
        <div>
          <Comment/>
        </div>
        <div>
          <Comment/>
        </div>
        <div>
          <Comment/>
        </div>


        


      </Slider>
    </div>
  );
}

export default VerticalSwipeToSlide;
