import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartProductRequest, addToWishListProductRequest } from "../../../redux/Slice/cartAndWishSlice";
import { Link } from "react-router-dom";
import axios from "axios";

const Snacks = () => {
  const dispatch = useDispatch();
  const wishListProducts = useSelector(
    (state) => state.cartAndWishList.WishListproducts
  );

  const [snackProducts, setSnackProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch snack products from the backend
  useEffect(() => {
    const fetchSnackProducts = async () => {
      try {
        const response = await axios.get('https://online-bk-merajuddins-projects.vercel.app/category/snacks');
        setSnackProducts(response.data);
      } catch (error) {
        console.error('Error fetching snack products:', error);
        setError('Failed to fetch snack products');
      } finally {
        setLoading(false);
      }
    };
    fetchSnackProducts();
  }, []);

  const handleAddToCart = (itemId) => {
    const selectedItem = snackProducts.find((item) => item._id === itemId);

    if (selectedItem) {
      dispatch(addToCartProductRequest(selectedItem));
    } else {
      console.error('Item not found');
    }
  };

  const handleAddToWishList = (itemId) => {
    const selectedProduct = snackProducts.find((item) => item._id === itemId);
    dispatch(addToWishListProductRequest(selectedProduct));
  };

  if (loading) {
    return <p>Loading snack products...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <div className="text-center mt-10 p-5">
        <p className="text-3xl font-bold mb-10">ALL Snack Products List</p>

        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {snackProducts?.map((item, index) => (
            <div key={index} className="border border-1 border-gray-200 bg-gray-100 rounded-lg">
              <div className="p-4">
                <p className="px-1 w-[72%] md:w-[30%] text-white font-bold bg-[#E95B3E] rounded">Discount</p>
              </div>

              <div className="flex">
                <div className="md:w-[80%] w-[80%]">
                  <div className="border border-1 border-gray-200 rounded-lg mx-4">
                    <Link to={`/productdetail/${item?._id}`} state={{ item }}>
                      <img
                        src={item.imgUrl}
                        alt={item.name} // Corrected to "name"
                        className="rounded-lg w-full h-28 md:h-56 hover:scale-110 transition-all duration-500"
                      />
                    </Link>
                  </div>
                  <div className="ml-5">
    <p className="mt-3 text-blue-400">OnlineBK</p>
    <p className="ml text-md font-bold">{item.name}</p> {/* Product Name */}
    <p className="text-xl font-bold">Rs.{item.price}</p> {/* Product Price */}

    {/* Render stars based on average rating */}
    <div className="flex items-center">
        {Array.from({ length: 5 }, (_, index) => {
            const ratingValue = item.rating?.averageRating || 0;
            return (
                <svg
                    key={index}
                    className={`w-6 h-6 ${index < ratingValue ? 'text-yellow-400' : 'text-gray-300'}`} // Filled for current rating, empty otherwise
                    fill={index < ratingValue ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                </svg>
            );
        })}
        {/* Text showing the rating value */}
        <p className="ml-2 text-lg font-bold text-gray-700">
            {item.rating?.averageRating ? item.rating.averageRating.toFixed(1) : 'No ratings yet'}
        </p>
    </div>
</div>
                </div>
                <div className="md:w-[20%] mt-4 md:mt-24 md:px-4">
                  <div>
                    <button
                      className={`w-7 h-7 flex items-center justify-center bg-[#D55B45] text-white rounded-full`}
                      onClick={() => handleAddToWishList(item._id)}
                    >
                      <span className="text-white">♥</span>
                    </button>
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

export default Snacks;
