import { createSlice } from "@reduxjs/toolkit";

const cartAndWishList = createSlice({
  name: "cartAndWishList",
  initialState: {
    Cartproducts:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("CartProducts")) || []
        : [],
    WishListproducts:
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("wishlist")) || []
        : [],
    successMessage: false,
  },

  reducers: {
    addToCartProductRequest: (state) => {},
    addToCartProductSuccess: (state, action) => {
      if (!Array.isArray(state.Cartproducts)) {
        state.Cartproducts = [];
      }

      state.Cartproducts = action.payload;
      state.successMessage = true;
    },
    addToCartProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
      state.successMessage = false;
    },
    removeToCartProductRequest: (state) => {},
    removeToCartProductSuccess: (state, action) => {
      debugger;
      if (!Array.isArray(state.Cartproducts)) {
        state.Cartproducts = [];
      }

      state.Cartproducts = action.payload;
      state.successMessage = true;
    },
    removeToCartProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
      state.successMessage = false;
    },
    addToWishListProductRequest: (state) => {},
    addToWishListProductSuccess: (state, action) => {
      if (!Array.isArray(state.WishListproducts)) {
        state.WishListproducts = [];
      }

      state.WishListproducts = action.payload;
    },
    addToWishListProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
      state.successMessage = false;
    },
  },
});

export const {
  addToCartProductRequest,
  addToCartProductSuccess,
  addToCartProductFailure,
  removeToCartProductRequest,
  removeToCartProductSuccess,
  removeToCartProductFailure,
  addToWishListProductRequest,
  addToWishListProductSuccess,
  addToWishListProductFailure,
} = cartAndWishList.actions;
export default cartAndWishList.reducer;
