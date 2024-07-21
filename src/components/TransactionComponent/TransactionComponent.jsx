import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import styles from "./styles.module.scss";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCustomerState,
  createCustomer,
} from "../../features/customer/customerSlice";
import {
  selectTransactionState,
  createTransaction,
} from "../../features/transactions/transactionSlice";
import { LoaderComponent } from "../LoaderComponent";

const TransactionComponent = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({});
  const customerResponse = useSelector(selectCustomerState);
  const { customerLoading } = customerResponse;
  const transactionResponse = useSelector(selectTransactionState);
  const { transactionLoading } = transactionResponse;

  const onSubmit = (body) => {
    const currentDate = new Date();
    const isoCurrentDateString = currentDate.toISOString();
    body.status = "PENDING";
    body.date = isoCurrentDateString;
    body.baseFee = +localStorage.getItem("baseFee");
    body.deliveryFee = +localStorage.getItem("deliveryFee");
    body.total =
      +body.baseFee + +body.deliveryFee + +localStorage.getItem("price");
    body.customerID = +localStorage.getItem("createdCustomer");
    body.customer_email = localStorage.getItem("customer_email");
    console.log(body);
    dispatch(createTransaction(body));
  };
  return (
    <Box className={styles.box_main}>
      <Box className={styles.box_title}>
        <Typography variant="h4" color="initial">
          Crédit Card Information
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={styles.box_customer}>
          <TextField
            {...register("number", { required: true })}
            name="number"
            placeholder="Credit Card Number"
            size="small"
            variant="outlined"
            className={styles.customerInput}
            helperText={errors.number ? "Este campo es requerido" : ""}
          />
          <TextField
            {...register("exp_month", { required: true })}
            name="exp_month"
            id="outlined-basic"
            placeholder="Expires Month"
            size="small"
            variant="outlined"
            className={styles.customerInput}
            helperText={errors.exp_month ? "Este campo es requerido" : ""}
          />
          <TextField
            {...register("exp_year", { required: true })}
            name="exp_year"
            placeholder="Expires Year"
            size="small"
            variant="outlined"
            className={styles.customerInput}
            helperText={errors.exp_year ? "Este campo es requerido" : ""}
          />
          <TextField
            {...register("cvc", { required: true })}
            name="cvc"
            placeholder="CVC"
            type="password"
            size="small"
            variant="outlined"
            className={styles.customerInput}
            helperText={errors.cvc ? "Este campo es requerido" : ""}
          />
          <TextField
            {...register("card_holder", { required: true })}
            name="card_holder"
            placeholder="Card Holder"
            size="small"
            variant="outlined"
            className={styles.customerInput}
            helperText={errors.card_holder ? "Este campo es requerido" : ""}
          />
          <Box className={styles.box_btn}>
            <Button type="submit" variant="contained">
              Pay With Credit Card
            </Button>
          </Box>
        </Box>
      </form>
      {(customerLoading || transactionLoading) && (
        <Box>
          <LoaderComponent />
        </Box>
      )}
    </Box>
  );
};

export default TransactionComponent;
