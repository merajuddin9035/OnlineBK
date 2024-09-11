import React, { useEffect, useState } from "react";
import img1 from "../../assets/Services/delivery.png";
import img2 from "../../assets/Services/pickup.png";
import img3 from "../../assets/Services/parcel-delivery-services-500x500.webp"; // Updated image
import img4 from "../../assets/Services/secure.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OfferService = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const desktopContent = (
    <div className="grid md:grid-cols-12 my-10 shadow-lg">
      <div className="w-full md:col-span-3">
        <div className="grid md:grid-cols-12">
          <div className="w-[120px] md:col-span-6">
            <div>
              <img src={img1} alt="Local Delivery" />
            </div>
          </div>
          <div className="w-[10px] md:col-span-6">
            <div className="pt-10">
              <p className="text-md font-bold">LOCAL DELIVERY</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:col-span-3">
        <div className="grid md:grid-cols-12">
          <div className="w-[120px] md:col-span-6">
            <div>
              <img src={img2} alt="Curbside Pickup" />
            </div>
          </div>
          <div className="w-[150px] md:col-span-6">
            <div>
              <p className="text-xl font-bold">Service available in </p>
              <p className="mt-2">Basavakalyan karnataka 5853287</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:col-span-3">
        <div className="grid md:grid-cols-12">
          <div className="w-[120px] md:col-span-6">
            <div>
              <img src={img3} alt="Fresh Ingredients" />
            </div>
          </div>
          <div className="w-[130px] md:col-span-6">
            <div className="pt-10">
              <p className="text-xl font-bold">Secure delivery</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:col-span-3">
        <div className="grid md:grid-cols-12">
          <div className="w-[120px] md:col-span-6">
            <div>
              <img src={img4} alt="Secure Payment" />
            </div>
          </div>
          <div className="w-[120px] md:col-span-6">
            <div className="pt-10">
              <p className="text-xl font-bold">SECURE PAYMENT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const mobileContent = (
    <div className="rounded mt-10">
      <Slider {...settings}>
        <div>
          <div className="flex">
            <div className="w-[150px] ml-5">
              <div>
                <img src={img1} alt="Local Delivery" />
              </div>
            </div>
            <div className="pt-14">
              <p className="text-xl ml-2">LOCAL DELIVERY</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="w-[200px]">
              <div>
                <img src={img2} alt="Curbside Pickup" />
              </div>
            </div>
            <div>
              <p className="mt-8 font-bold">FREE CURBSIDE PICKUP</p>
              <p className="mt-2 ml-2">
                Basavakalyan karnataka 585327
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="w-[150px]">
              <div>
                <img src={img3} alt="Fresh Ingredients" />
              </div>
            </div>
            <div className="pt-14">
              <p className="text-xl font-bold">FRESH INGREDIENTS</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="w-[150px]">
              <div>
                <img src={img4} alt="Secure Payment" />
              </div>
            </div>
            <div className="pt-14">
              <p className="font-bold">SECURE PAYMENT</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );

  return isDesktop ? desktopContent : mobileContent;
};

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
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default OfferService;
