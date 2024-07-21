import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCustomerAPI } from "../../services/customer";
import { clearState } from "../transactions/transactionSlice";

const initialState = {
  customers: {},
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
    clearCustomerState: (state) => {
      state.customerFlag = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCustomer.pending, (state) => {
        state.customerLoading = true;
      })
      .addCase(createCustomer.fulfilled, (state, action) => {
        state.customerLoading = false;
        if (action.payload.statusCode === 201) {
          state.customers = action.payload.data;
          localStorage.setItem("createdCustomer", action.payload.data.id);
          localStorage.setItem("customer_email", action.payload.data.email);
          localStorage.setItem("address", action.payload.data.address);
          state.customerHttpStatus = action.payload.statusCode;
          state.customerFlag = true;
        }
      });
  },
});

export const { clearCustomerState } = CustomerSlice.actions;
export const selectCustomerState = (state) => state.customers;
export default CustomerSlice.reducer;
