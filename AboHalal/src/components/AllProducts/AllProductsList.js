import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartProductRequest, addToWishListProductRequest } from "../../redux/Slice/cartAndWishSlice";
import { Link } from "react-router-dom";
import axios from "axios"; // Axios for API calls

const AllProductsList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]); // State to store fetched products
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to manage error

  const wishListProducts = useSelector(
    (state) => state.cartAndWishList.WishListproducts
  );

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://online-bk-merajuddins-projects.vercel.app/api/products"); // Replace with your API endpoint
        setProducts(response.data.products); // Extract and set the products in state
        setLoading(false);
      } catch (error) {
        console.error(error); // Log actual error for debugging
        setError("Failed to fetch products");
        setLoading(false);
      }
    };
    fetchProducts();
  
    // Optional: cleanup function to prevent memory leaks
    return () => {
      setProducts([]);
      setError(null);
      setLoading(false);
    };
  }, []);
  

  const handleAddToCart = (itemId) => {
    const selectedItem = products.find((item) => item._id === itemId); // Use _id for MongoDB IDs

    if (selectedItem) {
      dispatch(addToCartProductRequest(selectedItem));
    } else {
      console.error("Item not found");
    }
  };

  const handleAddToWishList = (itemId) => {
    const selectedProduct = products.find((item) => item._id === itemId);
    dispatch(addToWishListProductRequest(selectedProduct));
  };

  if (loading) {
    return <p>Loading products...</p>; // Show loading state
  }

  if (error) {
    return <p className="text-red-500">{error}</p>; // Show error message
  }

  return (
    <>
      <div className="text-center px-4 mt-10">
        <p className="text-3xl font-bold mb-10">ALL Products List</p>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {products?.map((item) => (
            <div
              key={item._id} // Use MongoDB _id
              className="border border-1 border-gray-200 bg-gray-100 rounded-lg"
            >
              <div className="p-4">
                <p className="px-1 w-[72%] md:w-[30%] text-white font-bold bg-[#E95B3E] rounded">
                  Discount
                </p>
              </div>

              <div className="flex">
                <div className="md:w-[80%] w-[80%]">
                  <div className="border border-1 border-gray-200 rounded-lg mx-4">
                    <Link to={`/productdetail/${item._id}`} state={{ item }}>
                      <img
                        src={item.imgUrl} // Ensure imgUrl is stored in MongoDB
                        alt={item.name}
                        className="rounded-lg w-full h-28 md:h-56 hover:scale-110 transition-all duration-500"
                      />
                    </Link>
                  </div>
                  <div className="ml-5">
                    <p className="mt-3 text-blue-400">OnlineBK</p>
                    <p className="text-md font-bold">{item.name}</p>
                    <div className="flex mt-2">
                      <svg
                        className="w-4 h-4 ms-1 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="w-4 h-4 ms-1 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    </div>
                    <p className="text-xl font-bold">Rs. {item.price}</p>
                  </div>
                </div>
                <div className="md:w-[20%] mt-4 md:mt-24 md:px-4">
                  <div>
                    <svg
                      stroke="currentColor"
                      fill={
                        wishListProducts.some(
                          (product) => product._id === item._id
                        )
                          ? "red"
                          : "currentColor"
                      }
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleAddToWishList(item._id)}
                      className={`w-6 h-6 ms-1 text-gray-500 hover:text-[#d55b45]" `}
                    >
                      <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
                    </svg>
                  </div>
                  <button
                    className="mt-2 w-7 h-7 flex items-center justify-center bg-[#D55B45] text-white rounded-full"
                    onClick={() => handleAddToCart(item._id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProductsList;
