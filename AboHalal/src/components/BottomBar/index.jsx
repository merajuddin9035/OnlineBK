import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function BottomBar() {
  return (
    <>
      <div className="footerContainer w-full py-10 pb-[50px] border-box">
        <div className="twoFields md:flex w-full gap-5 bg-[#D44E37]">
          <div className="firstField md:flex flex-col md:w-[50%] w-full md:py-14">
            <p className="p-4 text-3xl font-bold mr-12 w-full">
              <span className="md:text-3xl font-bold text-white">
                Subscribe
              </span>{" "}
              to get news, events, and offers
            </p>
          </div>
          <div className="px-3 py-4 secondField md:flex flex-col w-full md:w-[50%] md:py-14">
            <form className="w-full">
              <div className="md:flex mx-6 md:mx-2">
                <input
                  type="email"
                  id="email"
                  className="w-[90%] md:w-1/2 mr-12 bg-white border border-gray-400 rounded-lg p-2.5"
                  placeholder="Enter your email"
                />
                <button className="mt-5 md:mt-0 p-2 w-[90%] md:w-[100px] rounded-lg bg-white border border-gray-400">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center grid md:grid-cols-12 p-2">
          <div className="w-full md:col-span-8">
            <div className="grid md:grid-cols-12 p-2">
              <div className="text-center md:ml-10 w-full md:col-span-4">
                <div className="logo ml-2">
                  <Link to="/" className="flex justify-center md:justify-start">
                  <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
  <text x="0" y="40" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="bold" fill="#D55B45">
    Online
  </text>
  <text x="130" y="40" font-family="Arial, Helvetica, sans-serif" font-size="40" font-weight="bold" fill="#000000">
    BK
  </text>
</svg>

                  </Link>
                </div>
                <p className="mt-7">
                  We offer high-quality foods and the best delivery service, and
                  the food market you can blindly trust.
                </p>
                <div className="flex justify-center mt-3 md:mr-10 space-x-4">
                  <FaFacebookF className="text-blue-600 cursor-pointer" size={25} />
                  <BsInstagram className="text-pink-600 cursor-pointer" size={25} />
                  <FaLinkedinIn className="text-blue-700 cursor-pointer" size={25} />
                  <FaTwitter className="text-blue-400 cursor-pointer" size={25} />
                  <FaYoutube className="text-red-600 cursor-pointer" size={25} />
                </div>
              </div>
              <div className="mt-12 md:mt-0 text-center w-full md:col-span-4">
                <p className="font-bold">Company</p>
                <div>
                  <ul className="flex flex-col space-y-2">
                    <Link to="/aboutus" className="hover:text-[#D55B45]">
                      About Us
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-12 md:mt-0 w-full md:col-span-4">
                <p className="font-bold">Support</p>
                <div>
                  <ul className="flex flex-col space-y-2">
                    <Link to="/faq" className="hover:text-[#D55B45]">
                      FAQ
                    </Link>
                    <Link to="/contactus" className="hover:text-[#D55B45]">
                      Contact Us
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-12 py-5 flex flex-col-reverse md:flex-row text-gray-500">
          <p className="text-center mb-3 md:mb-0">
            © 2024 OnlineBk. All rights reserved.
          </p>
          <p className="text-center md:ml-auto">Terms. Privacy Policy</p>
        </div>
      </div>
    </>
  );
}

export default BottomBar;

