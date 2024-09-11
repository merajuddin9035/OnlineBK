import axios from "axios";
import { takeLatest, put, call } from "redux-saga/effects";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addToCartProductRequest,
  addToCartProductSuccess,
  addToCartProductFailure,
  removeToCartProductRequest,
  removeToCartProductSuccess,
  removeToCartProductFailure,
  addToWishListProductRequest,
  addToWishListProductSuccess,
  addToWishListProductFailure,
} from "../Slice/cartAndWishSlice";

function* addToCartProduct(action) {
  try {
    // Assuming action.payload is the product object

    if (typeof window !== "undefined") {
      let updatedCartProducts = JSON.parse(
        localStorage.getItem("CartProducts") || "[]"
      );

      // Ensure updatedProducts is an array
      if (!Array.isArray(updatedCartProducts)) {
        updatedCartProducts = [];
      }

      // Check if the product is already in the cart
      const existingProductIndex = updatedCartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update its quantity or any other property
        updatedCartProducts[existingProductIndex] = action.payload;
        toast("The Product Already Added ", {
          position: "top-center",
        });
      } else {
        // If the product is not in the cart, add it to the cart
        updatedCartProducts.push(action.payload);
        toast(" Product Added in Cart Successfully ", {
          position: "top-center",
        });
      }
      yield put(addToCartProductSuccess(updatedCartProducts));
      localStorage.setItem("CartProducts", JSON.stringify(updatedCartProducts));
    }
  } catch (error) {
    console.log(error);
    yield put(addToCartProductFailure(error.message));
  }
}
function* removeToCartProduct(action) {
  try {
    // Assuming action.payload is the product object
    debugger;
    if (typeof window !== "undefined") {
      let updatedCartProducts = JSON.parse(
        localStorage.getItem("CartProducts") || "[]"
      );

      // Ensure updatedProducts is an array
      if (!Array.isArray(updatedCartProducts)) {
        updatedCartProducts = [];
      }

      // Check if the product is already in the cart
      const existingProductIndex = updatedCartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        updatedCartProducts.splice(existingProductIndex, 1);
      }
      yield put(removeToCartProductSuccess(updatedCartProducts));
      localStorage.setItem("CartProducts", JSON.stringify(updatedCartProducts));
      toast("Product Remove from cart ", {
        position: "top-center",
      });
    }
  } catch (error) {
    console.log(error);
    yield put(removeToCartProductFailure(error.message));
  }
}
function* addToWishListProduct(action) {
  try {
    // Assuming action.payload is the product object

    if (typeof window !== "undefined") {
      let updatedWishProducts = JSON.parse(
        localStorage.getItem("wishlist") || "[]"
      );

      // Ensure updatedProducts is an array
      if (!Array.isArray(updatedWishProducts)) {
        updatedWishProducts = [];
      }

      // Check if the product is already in the cart
      const existingProductIndex = updatedWishProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        // If the product is already in the cart, update its quantity or any other property
        updatedWishProducts.splice(existingProductIndex, 1);
        toast("Product Remove from Wishlist ", {
          position: "top-center",
        });
      } else {
        // If the product is not in the cart, add it to the cart
        updatedWishProducts.push(action.payload);
        toast(" Product Added in WishList ", {
          position: "top-center",
        });
      }
      yield put(addToWishListProductSuccess(updatedWishProducts));
      localStorage.setItem("wishlist", JSON.stringify(updatedWishProducts));
    }
  } catch (error) {
    console.log(error);
    yield put(addToWishListProductFailure(error.message));
  }
}

function* watchAddToCartProduct() {
  yield takeLatest(addToCartProductRequest.type, addToCartProduct);
}
function* watchRemoveToCartProduct() {
  yield takeLatest(removeToCartProductRequest.type, removeToCartProduct);
}
function* watchAddToWishListProduct() {
  yield takeLatest(addToWishListProductRequest.type, addToWishListProduct);
}

export {
  watchAddToCartProduct,
  watchAddToWishListProduct,
  watchRemoveToCartProduct,
};
