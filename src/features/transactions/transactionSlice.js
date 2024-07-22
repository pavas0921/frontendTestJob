import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTransactionAPI } from "../../services/transaction";

const initialState = {
  transaction: {},
  transactionLoading: false,
  transactionFlag: false,
  product: {},
};

export const createTransaction = createAsyncThunk(
  "post/createTransaction",
  async (body) => {
    const data = await createTransactionAPI(body);
    return data;
  }
);

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    clearState: (state) => {
      state.transaction = {};
      state.transactionFlag = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        state.transactionLoading = true;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.transactionLoading = false;
        if (
          action.payload.httpStatus === 200 ||
          action.payload.httpStatus === 201
        ) {
          state.transactionFlag = true;
          state.transaction = action.payload.data;
          state.product = action.payload.product;
          console.log("act", action.payload);
        }
      });
  },
});

export const { clearState } = transactionSlice.actions;
export const selectTransactionState = (state) => state.transaction;
export default transactionSlice.reducer;
