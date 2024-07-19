import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customer/customerSlice";
import productsReducer from "../features/product/productSlice";
import transactionReducer from "../features/transactions/transactionSlice";

export const store = configureStore({
  reducer: {
    customers: customerReducer,
    products: productsReducer,
    transaction: transactionReducer,
  },
});
