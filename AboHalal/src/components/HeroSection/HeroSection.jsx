import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/herosection/grill.avif";
import image2 from "../../assets/herosection/chickenshwarma.jpg";
import image3 from "../../assets/herosection/biryani.webp";
import image4 from "../../assets/herosection/apricot.jpg";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="rounded mt-5">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="Grill" className="rounded w-96 h-96 object-cover" />
          </div>
          <div>
            <img src={image2} alt="Chicken Shawarma" className="rounded w-96 h-96 object-cover" />
          </div>
          <div>
            <img src={image3} alt="Biryani" className="rounded w-96 h-96 object-cover" />
          </div>
          <div>
            <img src={image4} alt="Apricot" className="rounded w-96 h-96 object-cover" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HeroSection;
