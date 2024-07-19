import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProductsAPI } from "../../services/product";

const initialState = {
  products: [],
  productsLoading: false,
  productMessage: null,
  productHttpStatus: null,
  productStatus: null,
  productFlag: false,
};

export const getProducts = createAsyncThunk("get/products", async () => {
  const data = await getAllProductsAPI();
  return data;
});

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.products = action.payload.data;
      });
  },
});

export const { clearAlert } = ProductSlice.actions;
export const selectProductState = (state) => state.products;
export default ProductSlice.reducer;
