import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "../features/customer/customerSlice";

export const store = configureStore({
  reducer: {
    customers: customerReducer,
  },
});
