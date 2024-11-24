import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {
  addToCartProductRequest,
  addToWishListProductRequest,
} from "../../redux/Slice/cartAndWishSlice";

const SinglePageProduct = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams(); // Get product ID from the URL

  const dispatch = useDispatch();
  const initialCounts = JSON.parse(localStorage.getItem("productCounts")) || {};
  const [productCounts, setProductCounts] = useState(initialCounts);

  const cartProducts = useSelector(
    (state) => state.cartAndWishList.Cartproducts
  );
  const wishListProducts = useSelector(
    (state) => state.cartAndWishList.WishListproducts
  );

  // Fetch product details from MongoDB using the product ID
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/products/${id}`
        );
        console.log(response.data); // Log the API response to check data
        setProductDetail(response.data); // Set product data
      } catch (error) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetail();
  }, [id]);

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

  const handleAddToCart = (product) => {
    dispatch(addToCartProductRequest(product));
  };

  const handleToWishList = (product) => {
    dispatch(addToWishListProductRequest(product));
  };

  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!productDetail) {
    return <p>No product details available</p>;
  }

  return (
    <>
      <div className="my-10 p-2 py-10 md:px-32 grid md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="ml-5 mb-4 md:mb-0 md:p-10">
            <img
              src={productDetail.imgUrl || "/path-to-default-image.jpg"} // Provide fallback for imgUrl
              alt={productDetail.name || "Product Image"} // Fallback for name
              className="md:w-[90%] md:h-96 h-56 hover:scale-110 transition-all duration-500 rounded"
            />
          </div>
        </div>
        <div className="md:col-span-6">
          <div>
            <p className="text-4xl font-bold">{productDetail.name || "Product Name"}</p>
            <p className="mt-4">{productDetail.description || "No description available."}</p>
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-2xl font-bold text-[#D55B45]">
                  RS. {productDetail.price || "N/A"}
                </p>
              </div>
              <div className="w-[20%] flex border border-1 rounded">
                <button
                  className="w-[33%] bg-[#D55B45] text-white"
                  onClick={() => handleDecrement(productDetail._id)}
                >
                  -
                </button>
                <p className="w-[33%] bg-[#] px-3">
                  {productCounts[productDetail._id] || 1}
                </p>
                <button
                  className="w-[33%] bg-[#D55B45] text-white"
                  onClick={() => handleIncrement(productDetail._id)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="my-14 flex justify-between">
              <button
                className="md:w-[30%] flex border border-1 bg-[#b3b146] rounded-lg p-2"
                onClick={() => handleAddToCart(productDetail)}
              >
                <p className="text-md font-bold text-white">Add To Cart</p>
              </button>

              <button
                className="md:w-[30%] flex border border-1 bg-[#e3963d] rounded-lg p-2"
                onClick={() => handleAddToCart(productDetail)}
              >
                <p className="text-md font-bold text-white">Place Order</p>
              </button>
            </div>

            <div className="mt-14 flex justify-between">
              <div>
                <div className="text-xl font-bold text-[#D55B45] flex">
                  <p>{productDetail.name}</p>
                </div>
                {/* Display the rating */}
                <div className="text-xl font-bold">
                  Rating:{" "}
                  {productDetail.rating?.averageRating
                    ? `${productDetail.rating.averageRating}/5`
                    : "No ratings yet"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePageProduct;
