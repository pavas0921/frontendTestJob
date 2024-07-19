import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createCustomerAPI } from "../../services/customer";

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
        state.customerLoading = false;
        if (action.payload.statusCode === 201) {
          state.customers = action.payload.data;
          localStorage.setItem("createdCustomer", action.payload.data.id);
          localStorage.setItem("customer_email", action.payload.data.email);
          state.customerHttpStatus = action.payload.statusCode;
          state.customerFlag = true;
        }
      });
  },
});

export const { clearAlert } = CustomerSlice.actions;
export const selectCustomerState = (state) => state.customers;
export default CustomerSlice.reducer;
