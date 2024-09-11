import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom"; // useNavigate for navigation
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UseSelector } from "react-redux";
import { Dropdown } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";

import EmptyCart from "../../assets/AboutUS/emptycart.png";
import Emptywishlist from "../../assets/AboutUS/CartIm.png";
import {
  addToCartProductRequest,
  removeToCartProductRequest,
  addToWishListProductRequest,
} from "../../redux/Slice/cartAndWishSlice";
const TopBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For navigation
  const [loading, setLoading] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const cartProducts = useSelector(
    (state) => state.cartAndWishList.Cartproducts
  );
  console.log("The data is available :", cartProducts);
  const wishListProducts = useSelector(
    (state) => state.cartAndWishList.WishListproducts
  );

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/login"); // Redirect to login page
  };

  const initialCounts = JSON.parse(localStorage.getItem("productCounts")) || {};
  const [productCounts, setProductCounts] = useState(initialCounts);

  useEffect(() => {
    // Save counts to localStorage whenever they change
    localStorage.setItem("productCounts", JSON.stringify(productCounts));
  }, [productCounts]);
  const handleIncrement = (itemId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 1) + 1,
    }));
  };

  const handleDecrement = (itemId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: Math.max((prevCounts[itemId] || 1) - 1, 0),
    }));
  };

  const handleAddToCart = (itemId) => {
    console.log("clicked");
    console.log("Id is :", itemId);
    const selectedItem = cartProducts.find((item) => item.id === itemId);

    if (selectedItem) {
      dispatch(addToCartProductRequest(selectedItem));
    } else {
      console.error("Item not found");
    }
  };
  const handleRemove = (itemId) => {
    debugger;
    const selectedItem = cartProducts.find((item) => item.id === itemId);

    if (selectedItem) {
      dispatch(removeToCartProductRequest(selectedItem));
    } else {
      console.error("Item not found");
    }
  };
  const handleToWishList = (itemId) => {
    const selectedProduct = wishListProducts.find((item) => item.id === itemId);

    dispatch(addToWishListProductRequest(selectedProduct));
  };
  const totalCartPrice = cartProducts.reduce((accumulator, currentItem) => {
    const count = productCounts[currentItem.id] || 1;
    return accumulator + count * currentItem.price;
  }, 0);
  const handleSelect = (values) => {
    if (values.length > 0) {
      const route = values[0].route;

      window.location.href = route;
    }
  };

  const [active, setActive] = useState(false);
  const [cart, setCart] = useState(false);
  const [wishList, setWishlist] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };

  const toggleCart = () => {
    setCart(!cart);
  };
  const toggleWishList = () => {
    setWishlist(!wishList);
  };

  return (
    <>
      {/* --------------------------Desktop ---------------------- */}
      <div className="bg-white sticky top-0 z-30 transition-all duration-300 shadow-md">
        <div className="  items-center hidden lg:flex">
          <div className="logo  ml-10 flex items-center">
            <Link to="/">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                zoomAndPan="magnify"
                viewBox="0 0 600 112.499997"
                height="100"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
              >
                <defs>
                  <g />
                </defs>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(14.791682, 71.446088)">
                    <g>
                      <path d="M 28.46875 -7.09375 L 13.859375 -7.09375 L 11.046875 0 L -0.21875 0 L 15.484375 -40.8125 L 27.0625 -40.8125 L 42.4375 0 L 31.125 0 Z M 25.59375 -15.203125 L 21.265625 -28.203125 L 21.15625 -28.203125 L 16.78125 -15.203125 Z M 25.59375 -15.203125 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(57.049632, 71.446088)">
                    <g>
                      <path d="M 19.8125 0 L 3.46875 0 L 3.46875 -40.8125 L 18.625 -40.8125 C 22.257812 -40.769531 25.1875 -39.957031 27.40625 -38.375 C 29.632812 -36.789062 30.75 -34.046875 30.75 -30.140625 C 30.75 -28.304688 30.410156 -26.664062 29.734375 -25.21875 C 29.066406 -23.78125 27.90625 -22.644531 26.25 -21.8125 L 26.25 -21.765625 C 29.175781 -21.359375 31.296875 -20.226562 32.609375 -18.375 C 33.921875 -16.519531 34.578125 -14.164062 34.578125 -11.3125 C 34.578125 -7.050781 33.050781 -4.097656 30 -2.453125 C 26.957031 -0.816406 23.5625 0 19.8125 0 Z M 14.078125 -16.890625 L 14.078125 -8.125 L 15.421875 -8.125 C 15.460938 -8.082031 15.507812 -8.0625 15.5625 -8.0625 C 15.613281 -8.0625 15.675781 -8.0625 15.75 -8.0625 C 16.1875 -8.0625 16.640625 -8.0625 17.109375 -8.0625 C 17.578125 -8.0625 18.046875 -8.082031 18.515625 -8.125 C 19.847656 -8.226562 21.070312 -8.566406 22.1875 -9.140625 C 23.3125 -9.722656 23.875 -10.804688 23.875 -12.390625 C 23.875 -14.234375 23.257812 -15.425781 22.03125 -15.96875 C 20.800781 -16.507812 19.46875 -16.796875 18.03125 -16.828125 C 17.695312 -16.828125 17.359375 -16.828125 17.015625 -16.828125 C 16.679688 -16.828125 16.347656 -16.828125 16.015625 -16.828125 C 15.867188 -16.828125 15.722656 -16.828125 15.578125 -16.828125 C 15.441406 -16.828125 15.300781 -16.828125 15.15625 -16.828125 Z M 14.078125 -32.6875 L 14.078125 -24.796875 L 15.265625 -24.796875 C 15.296875 -24.753906 15.335938 -24.734375 15.390625 -24.734375 C 15.453125 -24.734375 15.519531 -24.734375 15.59375 -24.734375 C 16.925781 -24.773438 18.160156 -25.03125 19.296875 -25.5 C 20.429688 -25.96875 21 -27.03125 21 -28.6875 C 21 -30.34375 20.457031 -31.40625 19.375 -31.875 C 18.289062 -32.34375 17.117188 -32.597656 15.859375 -32.640625 C 15.679688 -32.640625 15.507812 -32.640625 15.34375 -32.640625 C 15.175781 -32.640625 15.003906 -32.640625 14.828125 -32.640625 Z M 14.078125 -32.6875 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(93.680407, 71.446088)">
                    <g>
                      <path d="M 23.984375 -42.15625 C 29.859375 -42.125 35.085938 -40.148438 39.671875 -36.234375 C 44.253906 -32.316406 46.546875 -27.273438 46.546875 -21.109375 C 46.546875 -14.503906 44.425781 -9.109375 40.1875 -4.921875 C 35.945312 -0.734375 30.546875 1.359375 23.984375 1.359375 C 17.453125 1.359375 12.054688 -0.734375 7.796875 -4.921875 C 3.535156 -9.109375 1.40625 -14.503906 1.40625 -21.109375 C 1.40625 -27.273438 3.695312 -32.316406 8.28125 -36.234375 C 12.863281 -40.148438 18.097656 -42.109375 23.984375 -42.109375 Z M 23.984375 -31.875 C 20.804688 -31.84375 18.085938 -30.734375 15.828125 -28.546875 C 13.578125 -26.367188 12.453125 -23.867188 12.453125 -21.046875 C 12.453125 -17.546875 13.578125 -14.640625 15.828125 -12.328125 C 18.085938 -10.023438 20.804688 -8.875 23.984375 -8.875 C 27.148438 -8.875 29.859375 -10.023438 32.109375 -12.328125 C 34.367188 -14.640625 35.5 -17.546875 35.5 -21.046875 C 35.5 -23.867188 34.367188 -26.367188 32.109375 -28.546875 C 29.859375 -30.734375 27.148438 -31.828125 23.984375 -31.828125 Z M 23.984375 -31.875 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(141.673763, 71.446088)">
                    <g />
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(160.23264, 71.446088)">
                    <g>
                      <path d="M 14.078125 -25.0625 L 29.390625 -25.0625 L 29.390625 -40.8125 L 40 -40.8125 L 40 0 L 29.390625 0 L 29.390625 -16.71875 L 14.078125 -16.71875 L 14.078125 0 L 3.46875 0 L 3.46875 -40.8125 L 14.078125 -40.8125 Z M 14.078125 -25.0625 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(203.68096, 71.446088)">
                    <g>
                      <path d="M 28.46875 -7.09375 L 13.859375 -7.09375 L 11.046875 0 L -0.21875 0 L 15.484375 -40.8125 L 27.0625 -40.8125 L 42.4375 0 L 31.125 0 Z M 25.59375 -15.203125 L 21.265625 -28.203125 L 21.15625 -28.203125 L 16.78125 -15.203125 Z M 25.59375 -15.203125 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(245.93891, 71.446088)">
                    <g>
                      <path d="M 14.078125 -40.8125 L 14.078125 -8.984375 L 26.796875 -8.984375 L 26.796875 0 L 3.46875 0 L 3.46875 -40.8125 Z M 14.078125 -40.8125 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(272.722115, 71.446088)">
                    <g>
                      <path d="M 28.46875 -7.09375 L 13.859375 -7.09375 L 11.046875 0 L -0.21875 0 L 15.484375 -40.8125 L 27.0625 -40.8125 L 42.4375 0 L 31.125 0 Z M 25.59375 -15.203125 L 21.265625 -28.203125 L 21.15625 -28.203125 L 16.78125 -15.203125 Z M 25.59375 -15.203125 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(314.980066, 71.446088)">
                    <g>
                      <path d="M 14.078125 -40.8125 L 14.078125 -8.984375 L 26.796875 -8.984375 L 26.796875 0 L 3.46875 0 L 3.46875 -40.8125 Z M 14.078125 -40.8125 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(341.76327, 71.446088)">
                    <g />
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(360.322147, 71.446088)">
                    <g>
                      <path d="M 1.03125 0 L 7.953125 -40.8125 L 18.40625 -40.8125 L 26.6875 -19 L 35.453125 -40.8125 L 46 -40.8125 L 52.171875 0 L 41.5625 0 L 38.59375 -23.484375 L 38.484375 -23.484375 L 28.6875 0 L 24.46875 0 L 15.09375 -23.484375 L 15 -23.484375 L 11.578125 0 Z M 1.03125 0 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(413.509822, 71.446088)">
                    <g>
                      <path d="M 28.46875 -7.09375 L 13.859375 -7.09375 L 11.046875 0 L -0.21875 0 L 15.484375 -40.8125 L 27.0625 -40.8125 L 42.4375 0 L 31.125 0 Z M 25.59375 -15.203125 L 21.265625 -28.203125 L 21.15625 -28.203125 L 16.78125 -15.203125 Z M 25.59375 -15.203125 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(455.767789, 71.446088)">
                    <g>
                      <path d="M 24.578125 -16.71875 L 37.40625 0 L 24.1875 0 L 14.1875 -15.703125 L 14.078125 -15.703125 L 14.078125 0 L 3.46875 0 L 3.46875 -40.8125 L 19.328125 -40.8125 C 23.367188 -40.769531 26.738281 -39.75 29.4375 -37.75 C 32.144531 -35.75 33.5 -32.566406 33.5 -28.203125 C 33.5 -25.390625 32.734375 -22.890625 31.203125 -20.703125 C 29.671875 -18.515625 27.460938 -17.171875 24.578125 -16.671875 Z M 14.078125 -32.6875 L 14.078125 -22.515625 L 15.09375 -22.515625 C 15.28125 -22.484375 15.460938 -22.46875 15.640625 -22.46875 C 15.816406 -22.46875 15.976562 -22.46875 16.125 -22.46875 C 17.71875 -22.53125 19.171875 -22.894531 20.484375 -23.5625 C 21.804688 -24.238281 22.46875 -25.566406 22.46875 -27.546875 C 22.46875 -29.535156 21.804688 -30.863281 20.484375 -31.53125 C 19.171875 -32.195312 17.71875 -32.566406 16.125 -32.640625 C 15.976562 -32.640625 15.816406 -32.640625 15.640625 -32.640625 C 15.460938 -32.640625 15.28125 -32.640625 15.09375 -32.640625 Z M 14.078125 -32.6875 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(492.560868, 71.446088)">
                    <g>
                      <path d="M 14.1875 -23.984375 L 27.015625 -40.8125 L 40.15625 -40.8125 L 23.921875 -21.484375 L 41.625 0 L 27.875 0 L 14.1875 -17.703125 L 14.078125 -17.703125 L 14.078125 0 L 3.46875 0 L 3.46875 -40.8125 L 14.078125 -40.8125 L 14.078125 -23.984375 Z M 14.1875 -23.984375 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(533.574357, 71.446088)">
                    <g>
                      <path d="M 26.6875 -31.828125 L 14.078125 -31.828125 L 14.078125 -25 L 26.03125 -25 L 26.03125 -16.015625 L 14.078125 -16.015625 L 14.078125 -8.984375 L 26.6875 -8.984375 L 26.6875 0 L 3.46875 0 L 3.46875 -40.8125 L 26.6875 -40.8125 Z M 26.6875 -31.828125 " />
                    </g>
                  </g>
                </g>
                <g fill="#ff0033" fill-opacity="1">
                  <g transform="translate(563.333462, 71.446088)">
                    <g>
                      <path d="M 19.703125 -31.828125 L 19.703125 0 L 9.09375 0 L 9.09375 -31.828125 L 0.328125 -31.828125 L 0.328125 -40.8125 L 28.46875 -40.8125 L 28.46875 -31.828125 Z M 19.703125 -31.828125 " />
                    </g>
                  </g>
                </g>
              </svg> */}
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
          <div className=" ml-10 py-5  ">
            <div className=" flex justify-between">
              <Link
                to="/"
                className=" text-lg flex mr-8 hover:text-[#D55B45] hover:font-bold"
              >
                Home
              </Link>{" "}
              {/* <Link
                to="/allproducts"
                className=" text-lg flex mr-8 hover:text-[#D55B45] hover:font-bold"
              >
                Categories
              </Link>{" "} */}
              <div className="group relative cursor-pointer ">
                <div className=" bg-white mr-8">
                  <div
                    className="menu-hover text-lg hover:text-[#D55B45] hover:font-bold  "
                    onclick
                  >
                    Categories
                  </div>
                </div>
                <div
                  className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4  shadow-xl group-hover:visible rounded"
                  onclick
                >
                  <Link
                    to="/chickenproduct"
                    className="  py-1 font-semibold text-gray-500 hover:text-black "
                  >
                    Chicken
                  </Link>
                  <Link
                    to="/sweetproducts"
                    className=" py-1 font-semibold text-gray-500 hover:text-black"
                  >
                    Sweet
                  </Link>
                  <Link
                    to="/muttonproduct"
                    className=" py-1 font-semibold text-gray-500 hover:text-black "
                  >
                    Mutton
                  </Link>
                  <Link
                    to="/snacksproducts"
                    className=" block  py-1 font-semibold text-gray-500 hover:text-black "
                  >
                    Snacks
                  </Link>
                </div>
              </div>
              <Link
                to="/allproducts"
                className=" text-lg flex mr-8 hover:text-[#D55B45] hover:font-bold"
              >
                Products
              </Link>{" "}
              <Link
                to="/aboutus"
                className=" text-lg flex mr-8 hover:text-[#D55B45] hover:font-bold"
              >
                About Us
              </Link>
              <Link
                to="/certificate"
                className=" mr-8 text-lg  hover:text-[#D55B45] hover:font-bold"
              >
                Hotels
              </Link>
              <div className="  rounded border border-red-600 mr-8">
                <form>
                  <label
                    for="default-search"
                    className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="flex items-center bg-white pr-3 rounded">
                    <input
                      type="search"
                      id="default-search"
                      className="block mr-1 w-full  ps-2 text-sm text-gray-900 rounded-lg bg-gray-50 outline-none"
                      placeholder="Search product..."
                      required
                    />
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* ----------------- ------------ ------------ ------- */}
          <div className=" flex items-center ml-auto mr-10">
            {/* 1st */}
            <div
              class="mt-3 relative cursor-pointer mr-[15px]"
              onClick={toggleWishList}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                className="text-gray-500 hover:text-[#d55b45]"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-[#d55b45] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                {wishListProducts.length}
              </span>
            </div>

            <div className="mt-2 flex items-center">
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={toggleCart}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  class="text-gray-500 hover:text-[#d55b45]"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
                </svg>
                <span class="absolute right-0 top-0 rounded-full bg-[#d55b45] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cartProducts.length}
                </span>
              </div>
            </div>
            {/* 4th */}
            <div class="flex items-center">
  <div class="relative cursor-pointer mr-[15px]">
    {/* Profile SVG Icon */}
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="0"
      viewBox="0 0 24 24"
      class="text-gray-500 hover:text-[#d55b45] cursor-pointer"
      height="30"
      width="30"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleDropdown}  // Toggle the dropdown on click
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
        fill="currentColor"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
        fill="currentColor"
      ></path>
    </svg>

    {/* Profile Dropdown */}
   {isDropdownOpen && (
  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
    <Link
      to="/profile"
      className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
    >
      Your Profile
    </Link>
    <button
      onClick={handleLogout}
      className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
    >
      Logout
    </button>
  </div>
)}
  </div>
</div>

          </div>
        </div>
      </div>
      {/* --------------------------------Mobile------------------------- */}
      <div className="bg-white  sticky -top-1 z-20 lg:hidden shadow-md">
        <div className="w-[90%] mx-auto flex items-center">
          <div className="flex">
            <div>
              <button
                is="toggle-button"
                onClick={toggleNavbar}
                type="button"
                className="header__icon-wrapper tap-area hidden-desk"
                aria-controls="mobile-menu-drawer"
                aria-expanded="false"
              >
                <span className="visually-hidden"></span>
                <svg
                  focusable="false"
                  width="18"
                  height="14"
                  className="icon icon--header-hamburger   "
                  viewBox="0 0 18 14"
                >
                  <path
                    d="M0 1h18M0 13h18H0zm0-6h18H0z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="ml-4 md:ml-6 mt-2">
              {/* <Link to="/search">
                <svg
                  focusable="false"
                  width="18"
                  height="18"
                  className="icon icon--header-search   "
                  viewBox="0 0 18 18"
                >
                  <path
                    d="M12.336 12.336c2.634-2.635 2.682-6.859.106-9.435-2.576-2.576-6.8-2.528-9.435.106C.373 5.642.325 9.866 2.901 12.442c2.576 2.576 6.8 2.528 9.435-.106zm0 0L17 17"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  ></path>
                </svg>
              </Link> */}
            </div>
          </div>
          <div className="mx-auto mt-2">
            <Link to="/">
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
          <div className="flex items-center">
            <div className="relative ml-2" onClick={toggleWishList}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="text-gray-500 hover:text-[#d55b45]"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
              </svg>
              <span class="absolute right-0 top-0 rounded-full bg-[#d55b45] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                {wishListProducts.length}
              </span>
            </div>
            <div className="relative ml-2" onClick={toggleCart}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                class="text-gray-500 hover:text-[#d55b45]"
                height="30"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
              </svg>
              <span class="absolute right-0 top-0 rounded-full bg-[#d55b45] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                {cartProducts.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Side Bar */}
      <div
        className={`${
          active === true ? "" : " -translate-x-full"
        } fixed top-0 left-0 z-40 h-screen p-2 pl-6 overflow-y-auto duration-700 bg-white w-[75%] text-gray-900 transition-all shadow-lg border border-1 border-gray-200`}
      >
        <div className="logo  ">
          <Link to="/">
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
        <button
          type="button"
          onClick={(e) => setActive(false)}
          className="bg-transparent text-black rounded-lg w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="mt-8 py-4 overflow-y-auto">
          <div className="my-4  rounded border border-red-600 mr-8">
            <form>
              <label
                for="default-search"
                className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div className="flex items-center bg-white pr-3 rounded">
                <input
                  type="search"
                  id="default-search"
                  className="block mr-1 w-full  ps-2 text-sm text-gray-900 rounded-lg bg-gray-50 outline-none"
                  placeholder="Search product..."
                  required
                />
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
            </form>
          </div>
          <ul className="space-y-4 font-medium">
            <Link to="/" onClick={(e) => setActive(false)}>
              <li className="w-full pb-4 pt-2 border-b">
                <h4 className=" font-semibold">Home</h4>
              </li>
            </Link>
            <div className="w-full pb-4 pt-2 border-b">
              <div className=" flex justify-between" onClick={toggleDropdown}>
                <h4 className=" font-semibold">Categories</h4>
                <div className="mr-3">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-down"
                    class="svg-inline--fa fa-chevron-down "
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="20"
                    height="20"
                  >
                    <path
                      fill="currentColor"
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    ></path>
                  </svg>
                </div>
              </div>

              {isDropdownOpen && (
                <div className="py-5 bg-[#F0F0F0]">
                  <ul>
                    <li className="mt-2 border-t">
                      <Link
                        to="/chickenproduct"
                        onClick={(e) => {
                          setActive(false);
                          toggleDropdown();
                        }}
                      >
                        Chicken
                      </Link>
                    </li>
                    <li className="mt-2 border-t">
                      <Link
                        to="/sweetproducts"
                        onClick={(e) => {
                          setActive(false);
                          toggleDropdown();
                        }}
                      >
                        Sweet
                      </Link>
                    </li>
                    <li className="mt-2 border-t">
                      <Link
                        to="/muttonproduct"
                        onClick={(e) => {
                          setActive(false);
                          toggleDropdown();
                        }}
                      >
                        Mutton
                      </Link>
                    </li>
                    <li className="mt-2 border-t">
                      <Link
                        to="/snacksproducts"
                        onClick={(e) => {
                          setActive(false);
                          toggleDropdown();
                        }}
                      >
                        Snacks
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Link to="/allproducts" onClick={(e) => setActive(false)}>
              <li className="w-full pb-4 pt-2 border-b">
                <h4 className=" font-semibold">Products</h4>
              </li>
            </Link>
            <Link to="/aboutus" onClick={(e) => setActive(false)}>
              <li className="w-full pb-4 pt-2 border-b">
                <h4 className=" font-semibold">About Us</h4>
              </li>
            </Link>
            <Link to="/certificate">
              <li className="w-full pb-4 pt-2 border-b">
                <h4 className=" font-semibold">Hotels</h4>
              </li>
            </Link>
          </ul>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            to="/login"
            className="bg-[#DC3A37] rounded-lg text-white text-lg font-bold p-2"
            onClick={(e) => setActive(false)}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#DC3A37] rounded-lg text-white text-lg font-bold ml-5 p-2"
            onClick={(e) => setActive(false)}
          >
            Sign up
          </Link>
        </div>
      </div>
      {/* Cart Slide Left */}

      <div
        className={`${
          cart ? "" : "translate-x-full"
        } fixed top-0 right-0 z-40 h-screen p-4 px-6 overflow-y-auto duration-700 flex flex-col bg-white w-[90%] lg:w-[35%] text-gray-900 transition-all border border-1 border-gray-300 shadow-lg ml-[-25px]`}
      >
        <div className="flex mt-2 lg:mt-5 items-center bg-white">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              className="text-gray-500 hover:text-[#d55b45]"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
            </svg>
          </div>
          <h4 className="text-base lg:text-lg font-bold ml-5">
            {cartProducts && cartProducts?.length
              ? `${cartProducts?.length} Products`
              : "Warenkorb"}
          </h4>
          <button
            type="button"
            onClick={(e) => setCart(false)}
            className="bg-transparent text-black rounded-lg w-8 h-8 ml-auto"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <hr className="mt-5" />
        {cartProducts && cartProducts?.length > 0 ? (
          <>
            {cartProducts.map((item) => (
              <div key={item?.id}>
                <div className="mt-4 grid grid-cols-12 gap-4">
                  <div className="col-span-4 my-2">
                    <img src={item.img} alt="miss" className="rounded-md" />
                  </div>
                  <div className="mx-3 col-span-5 my-auto">
                    <h5 className="font-bold text-gray-600">{item?.title}</h5>
                    <div className="col-span-2 my-auto font-semibold">
                      <div className="w-[60%] mt-2 border-solid border-2 border-gray flex justify-between    ">
                        <button
                          className="ml-2 text-md font-bold"
                          onClick={() => handleDecrement(item.id)}
                        >
                          -
                        </button>
                        <p>{productCounts[item.id] || 1}</p>
                        <button
                          className="mr-2"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <p
                        onClick={() => handleRemove(item.id)}
                        className={`underline cursor-pointer text-gray-500 mt-2 transition-colors duration-300 hover:text-black`}
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                  <div className="col-span-3 my-auto font-bold">
                    {item?.price * (productCounts[item.id] || 1)} $
                  </div>
                  <div>
                    <hr />
                  </div>
                </div>
              </div>
            ))}
            <Link to='checkout'>
            <div className="mt-auto mb-4 flex items-center justify-center">
              <button className="w-[60%] h-14 bg-[#E44343] text-white text-xl font-bold rounded-lg">
                CheckOut (Rs. {totalCartPrice})
              </button>
            </div>
            </Link>
          </>
        ) : (
          <div className=" flex items-center justify-center flex-col mt-[60%]">
            <img src={EmptyCart} alt="" className="w-[50%]" />
            <p className="text-xl font-bold">Cart is empty!</p>
          </div>
        )}
      </div>

      {/* WishList Slide Left */}

      <div
        className={`${
          wishList ? "" : "translate-x-full"
        } fixed top-0 right-0 z-40 h-screen p-4 px-6 overflow-y-auto duration-700 flex flex-col bg-white w-[60%] lg:w-[35%] text-gray-900 transition-all`}
      >
        <div className="flex mt-2 lg:mt-5 items-center bg-white">
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              class="text-gray-500 hover:text-[#d55b45]"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
            </svg>
          </div>
          <h4 className="text-base lg:text-lg font-bold ml-5">
            {wishListProducts && wishListProducts?.length
              ? `${wishListProducts?.length} products`
              : "products"}
          </h4>
          <button
            type="button"
            onClick={(e) => setWishlist(false)}
            className="bg-transparent text-black rounded-lg w-8 h-8 ml-auto"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <hr className="mt-5" />
        {wishListProducts && wishListProducts?.length > 0 ? (
          <>
            {wishListProducts.map((item) => (
              <div key={item?.id}>
                <svg
                  className="w-3 h-3 ml-auto mt-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  onClick={() => handleToWishList(item.id)}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <div className="mt-1 grid grid-cols-12 gap-4">
                  <div className="col-span-4 my-2">
                    <img src={item.img} alt="" className="rounded-md" />
                  </div>
                  <div className="mx-4 col-span-5 my-auto">
                    <h5 className="font-bold text-gray-600">{item?.title}</h5>
                  </div>
                  <div className="col-span-3 my-auto font-bold">
                    {item?.price} $
                    <div className="ml-10 mt-5 font-bold">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        className="cursor-pointer mt-auto"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleAddToCart(item.id)}
                      >
                        <title>Add to cart</title>
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"></path>
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <hr />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </>
        ) : (
          <div className="flex items-center justify-center flex-col mt-[60%]">
            <img src={Emptywishlist} alt="" className="w-[40%]" />
            <p className="text-xl font-bold">Wishlist is empty!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default TopBar;

{
  /* <Sidebar aria-label="Sidebar">
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <Sidebar.Collapse
                    label="Categories"
                    className="m-0 p-0 py-0 px-0"
                  >
                    <Sidebar.Item href="#" style={{ margin: 0, padding: 0 }}>
                      Chicken
                    </Sidebar.Item>
                    <Sidebar.Item href="#" style={{ margin: 0, padding: 0 }}>
                      Beef
                    </Sidebar.Item>
                    <Sidebar.Item href="#" style={{ margin: 0, padding: 0 }}>
                      Mutton
                    </Sidebar.Item>
                    <Sidebar.Item href="#" style={{ margin: 0, padding: 0 }}>
                      Hot Food
                    </Sidebar.Item>
                  </Sidebar.Collapse>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar> */
}
