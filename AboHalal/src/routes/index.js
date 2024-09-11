import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import CheckOut from "../pages/CheckOut";
import {
  Home,
  AllProductsList,
  Certificte,
  AboutUS,
  Registration,
  Login,
  Mutton,
  Sweet,
  Chicken,
  Snacks,
  SinglePageProduct,
  Profile
} from "../pages";
import Carousel from "../pages/Test/Test";


// Mock Logout Component (Logic to remove authentication and redirect to login)
const Logout = () => {
  // Clear the user's authentication token or session
  localStorage.removeItem("authToken"); // Example using localStorage
  // Redirect to login page
  window.location.href = "/login"; 
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allproducts",
        element: <AllProductsList />,
      },
      {
        path: "/certificate",
        element: <Certificte />,
      },
      {
        path: "/aboutus",
        element: <AboutUS />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Registration />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        path: "/snacksproducts",
        element: <Snacks />,
      },
      {
        path: "/sweetproducts",
        element: <Sweet />,
      },
      {
        path: "/chickenproduct",
        element: <Chicken />,
      },
      {
        path: "/muttonproduct",
        element: <Mutton />,
      },
      {
        path: "/productdetail/:id",
        element: <SinglePageProduct />,
      },
      {
        path: "/cars",
        element: <Carousel />,
      },
      // Add Profile Route
      {
        path: "/profile",
        element: <Profile />,
      },
      // Add Logout Route
      {
        path: "/logout",
        element: <Logout />,
      },
    ],
  },
]);

export default router;
