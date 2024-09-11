import React from "react";
import Snacks from "../../assets/category/snacks.webp";
import Mutton from "../../assets/category/leegota_mutton_625x300_19_February_20.webp";
import Sweet from "../../assets/category/sweet.jpg";
import Chicken from "../../assets/category/chicken-1 (1).jpg";
import { Link } from "react-router-dom";

const CategoryBanner = () => {
  return (
    <>
      <div className="mt-10  px-4">
        <div className=" mb-10 flex items-center justify-center ">
          <p className=" text-center px-2 py-1 w-[75%]  md:w-[20%] bg-[#E95B3E] text-2xl font-bold text-white rounded-tl-xl rounded-br-xl">
            SHOP BY CATEGORY
          </p>
        </div>
        <div className="category-banner w-full mt-2 grid md:grid-cols-12 gap-4 p-5 bg-gray-100 shadow-lg">
          <div className="w-full md:col-span-3  border border-1 border-gray-200 rounded ">
            <div className="p-3 flex items-center justify-center ">
              <p className=" text-center p-2 w-[50%] bg-[#E95B3E] text-sm font-bold text-white rounded-tl-xl rounded-br-xl">
                CHICKEN
              </p>
            </div>
            <Link
              to="/chickenproduct"
              className=" p-5 mt-5 flex items-center justify-center  rounded-full"
            >
              <img
                src={Chicken}
                alt="missing"
                className="w-[75%] hover:scale-125 transition-all duration-500"
              />
            </Link>
          </div>
          <div className="w-full md:col-span-3 border border-1 border-gray-200 rounded ">
            <div className="p-3 flex items-center justify-center ">
              <p className=" text-center p-2 w-[50%] bg-[#E95B3E] text-sm font-bold text-white rounded-tl-xl rounded-br-xl">
                Snacks
              </p>
            </div>
            <Link
              to="/snacksproducts"
              className=" p-5 mt-5 flex items-center justify-center  rounded-full"
            >
              <img
                src={Snacks}
                alt="missing"
                className="w-[75%] hover:scale-125 transition-all duration-500"
              />
            </Link>
          </div>
          <div className="w-full md:col-span-3  border border-1 border-gray-200 rounded">
            <div className=" p-3 flex items-center justify-center ">
              <p className=" text-center p-2 w-[50%] bg-[#E95B3E] text-sm font-bold text-white rounded-tl-xl rounded-br-xl">
                Mutton
              </p>
            </div>
            <Link
              to="/muttonproduct"
              className=" p-5 mt-5 flex items-center justify-center  rounded-full"
            >
              <img
                src={Mutton}
                alt="missing"
                className="w-[75%] hover:scale-125 transition-all duration-500"
              />
            </Link>
          </div>
          <div className="w-full md:col-span-3  border border-1 border-gray-200 rounded">
            <div className="p-3 flex items-center justify-center ">
              <p className=" text-center p-2 w-[50%] bg-[#E95B3E] text-sm font-bold text-white rounded-tl-xl rounded-br-xl">
                Sweet
              </p>
            </div>
            <Link
              to="/sweetproducts"
              className=" p-5 mt-5 flex items-center justify-center  rounded-full"
            >
              <img
                src={Sweet}
                alt="missing"
                className="w-[75%] rounded-lg hover:scale-125 transition-all duration-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryBanner;
