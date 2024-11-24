import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCartProductRequest, addToWishListProductRequest } from "../../../redux/Slice/cartAndWishSlice";
import { Link } from "react-router-dom";
import axios from "axios";

const Snacks = () => {
  const dispatch = useDispatch();
  const wishListProducts = useSelector((state) => state.cartAndWishList.WishListproducts);

  const [snackProducts, setSnackProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSnackProducts = async () => {
      try {
        const response = await axios.get('https://online-bk-merajuddins-projects.vercel.app/category/snacks');
        const products = Array.isArray(response.data) ? response.data : [];
        setSnackProducts(products);
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
    return (
      <div className="text-center">
        <p>Loading snack products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="text-center mt-10 p-5">
      <p className="text-3xl font-bold mb-10">ALL Snack Products List</p>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {Array.isArray(snackProducts) && snackProducts.map((item, index) => (
          <div key={index} className="border border-1 border-gray-200 bg-gray-100 rounded-lg">
            <div className="p-4">
              <p className="px-1 w-[72%] md:w-[30%] text-white font-bold bg-[#E95B3E] rounded">
                {item.discount || 'No Discount'}
              </p>
            </div>
            <div className="flex">
              <div className="md:w-[80%] w-[80%]">
                <div className="border border-1 border-gray-200 rounded-lg mx-4">
                  <Link to={`/productdetail/${item?._id}`} state={{ item }}>
                    <img
                      src={item.imgUrl || '/default-image.jpg'}
                      alt={item.name || 'Snack Image'}
                      className="rounded-lg w-full h-28 md:h-56 hover:scale-110 transition-all duration-500"
                    />
                  </Link>
                </div>
                <div className="ml-5">
                  <p className="mt-3 text-blue-400">OnlineBK</p>
                  <p className="ml text-md font-bold">{item.name || 'Unknown Snack'}</p>
                  <p className="text-xl font-bold">Rs.{item.price || 'N/A'}</p>
                </div>
              </div>
              <div className="md:w-[20%] mt-4 md:mt-24 md:px-4">
                <button
                  className="w-7 h-7 flex items-center justify-center bg-[#D55B45] text-white rounded-full"
                  onClick={() => handleAddToWishList(item._id)}
                >
                  ♥
                </button>
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
  );
};

export default Snacks;
