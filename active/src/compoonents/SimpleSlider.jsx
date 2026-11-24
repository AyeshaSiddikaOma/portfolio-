import React from "react";
import oma from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mobile from "../assets/grey2.png";
import BlogCard from "./BlogCard";

const Slider = oma?.default || oma;

const slides = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  pic: mobile,
  pera: "New Age",
  text: "Project was about precision and information...",
}));

function NextArrow({ onClick }) {
  return (
    <button
      type="button"
      aria-label="Next slide"
      onClick={onClick}
      className="absolute right-1 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 sm:h-10 sm:w-10 lg:-right-4"
    >
      ❯
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      type="button"
      aria-label="Previous slide"
      onClick={onClick}
      className="absolute left-1 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20 sm:h-10 sm:w-10 lg:-left-4"
    >
      ❮
    </button>
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // react-slick uses max-width breakpoints (desktop-first)
    responsive: [
      {
        breakpoint: 1280, // < 1280px
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024, // < 1024px
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640, // < 640px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="bg-back py-8 sm:py-12 lg:py-16 overflow-hidden">
      <div className="relative w-full px-4 sm:px-6 lg:px-10">
        <Slider {...settings} className="w-full">
          {slides.map((s) => (
            <div key={s.id} className="px-2 py-4 sm:px-3 sm:py-5">
              <BlogCard
                pic={s.pic}
                pera={s.pera}
                text={s.text}
                classs="font-bold text-white font-sora"
                classname="text-[16px] text-grey"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}