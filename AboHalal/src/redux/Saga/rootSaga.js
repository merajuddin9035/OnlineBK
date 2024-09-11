import { all } from "redux-saga/effects";
import {
  watchAddToCartProduct,
  watchRemoveToCartProduct,
  watchAddToWishListProduct,
} from "./cartAndWishSaga";
export default function* rootSaga() {
  yield all([
    watchAddToCartProduct(),
    watchAddToWishListProduct(),
    watchRemoveToCartProduct(),
  ]);
}
