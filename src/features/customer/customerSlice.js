import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCustomerAPI } from "../../services/customer";

const initialState = {
  customers: [],
  customerLoading: false,
  customerMessage: null,
  customerHttpStatus: null,
  customerStatus: null,
  customerFlag: false,
};

export const createCustomer = createAsyncThunk(
  "post/createCustomer",
  async (body) => {
    const data = await createCustomerAPI(body);
    return data;
  }
);

export const CustomerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    clearAlert: (state) => {
      state.customerStatus = null;
      state.customerHttpStatus = null;
      state.customerMessage = null;
      state.customerFlag = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.pending, (state) => {
        state.customerLoading = true;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        console.log("ACT", action);
      });
  },
});

export const { clearAlert } = CustomerSlice.actions;
export const selectCustomerState = (state) => state.customers;
export default CustomerSlice.reducer;
