import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTransactionAPI } from "../../services/transaction";

const initialState = {
  transaction: {},
  transactionLoading: false,
  transactionFlag: false,
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTransaction.pending, (state) => {
        state.transactionLoading = true;
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.transactionLoading = false;
        console.log("act", action.payload);
      });
  },
});

export const selectTransactionState = (state) => state.transaction;
export default transactionSlice.reducer;
