import { configureStore } from "@reduxjs/toolkit";

import rootSaga from "./Saga/rootSaga";
import createSagaMiddleware from "redux-saga";

import CartReducer from "./Slice/cartAndWishSlice";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cartAndWishList: CartReducer,
  },
  middleware: () => [sagaMiddleware],

  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
});
sagaMiddleware.run(rootSaga);
export default store;
