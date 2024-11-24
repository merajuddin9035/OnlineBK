import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartProductRequest, addToWishListProductRequest } from '../../../redux/Slice/cartAndWishSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Chicken = () => {
  const dispatch = useDispatch();
  const wishListProducts = useSelector((state) => state.cartAndWishList.WishListproducts);

  const [chickenProducts, setChickenProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Chicken Products
  const fetchChickenProducts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:5000/api/products/category/chicken'

      );
      const products = Array.isArray(response.data) ? response.data : [];
      setChickenProducts(products);
    } catch (err) {
      console.error('Error fetching chicken products:', err.response || err.message || err);
      setError(err.response?.data?.message || 'Failed to fetch chicken products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChickenProducts();
  }, []);

  // Handle Retry on Error
  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchChickenProducts();
  };

  // Add to Cart Handler
  const handleAddToCart = (itemId) => {
    const selectedItem = chickenProducts.find((item) => item._id === itemId);
    if (selectedItem) {
      dispatch(addToCartProductRequest(selectedItem));
    } else {
      console.error('Item not found');
    }
  };

  // Add to WishList Handler
  const handleAddToWishList = (itemId) => {
    const selectedProduct = chickenProducts.find((item) => item._id === itemId);
    if (selectedProduct) {
      dispatch(addToWishListProductRequest(selectedProduct));
    } else {
      console.error('Item not found');
    }
  };

  // Render Loading State
  if (loading) {
    return (
      <div className="text-center">
        <p>Loading chicken products...</p>
      </div>
    );
  }

  // Render Error State
  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
        <button
          onClick={handleRetry}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  // Render Empty State
  if (chickenProducts.length === 0) {
    return <p className="text-center text-gray-500">No chicken products available.</p>;
  }

  // Render Product List
  return (
    <div className="text-center mt-10 p-5">
      <p className="text-3xl font-bold mb-10">ALL Chicken Products List</p>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {chickenProducts.map((item) => (
          <div key={item._id} className="border border-1 border-gray-200 bg-gray-100 rounded-lg">
            <div className="p-4">
              <p className="px-1 w-[72%] md:w-[30%] text-white font-bold bg-[#E95B3E] rounded">
                {item.discount ? `${item.discount}% OFF` : 'No Discount'}
              </p>
            </div>
            <div className="flex">
              <div className="md:w-[80%] w-[80%]">
                <div className="border border-1 border-gray-200 rounded-lg mx-4">
                  <Link to={`/productdetail/${item._id}`} state={{ item }}>
                    <img
                      src={item.imgUrl || '/default-image.jpg'}
                      alt={item.name || 'Chicken Product'}
                      className="rounded-lg w-full h-28 md:h-56 hover:scale-110 transition-all duration-500"
                      onError={(e) => {
                        e.target.src = '/default-image.jpg'; // Fallback for broken images
                      }}
                    />
                  </Link>
                </div>
                <div className="ml-5">
                  <p className="mt-3 text-blue-400">OnlineBK</p>
                  <p className="ml text-md font-bold">{item.name || 'Unknown Product'}</p>
                  <p className="text-xl font-bold">Rs.{item.price || 'N/A'}</p>
                </div>
              </div>
              <div className="md:w-[20%] mt-4 md:mt-24 md:px-4">
                <button
                  className="w-7 h-7 flex items-center justify-center bg-[#D55B45] text-white rounded-full"
                  aria-label="Add to wishlist"
                  onClick={() => handleAddToWishList(item._id)}
                >
                  ♥
                </button>
                <button
                  className="mt-2 w-7 h-7 flex items-center justify-center bg-[#D55B45] text-white rounded-full"
                  aria-label="Add to cart"
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

export default Chicken;
