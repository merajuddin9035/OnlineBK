import React from "react";
import imgs from "../../assets/herosection/abohalall3.jpg";
import { Carousel } from "flowbite-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/herosection/abo-halalhero1.jpg";
import image2 from "../../assets/herosection/abohalal2.jpg";
import image3 from "../../assets/herosection/abohalall3.jpg";
import image4 from "../../assets/herosection/abo_halal4.jpg";

const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          <div>
            <img src={image4} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Test;
