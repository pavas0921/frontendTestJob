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

const FormComponent = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({});
  const customerResponse = useSelector(selectCustomerState);

  const onSubmit = (body) => {
    dispatch(createCustomer(body));
  };

  return (
    <Box className={styles.box_main}>
      <Box className={styles.box_title}>
        <Typography variant="h4" color="initial">
          Delivery Information
        </Typography>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={styles.box_customer}>
          <TextField
            {...register("fullName", { required: true })}
            name="fullName"
            placeholder="Full Name"
            size="small"
            variant="outlined"
            className={styles.customerInput}
            helperText={errors.fullName ? "Este campo es requerido" : ""}
          />
          <TextField
            {...register("address", { required: true })}
            name="address"
            id="outlined-basic"
            placeholder="Address"
            size="small"
            variant="outlined"
            className={styles.customerInput}
            helperText={errors.address ? "Este campo es requerido" : ""}
          />
          <TextField
            {...register("email", { required: true })}
            name="email"
            type="email"
            placeholder="Email"
            size="small"
            variant="outlined"
            className={styles.customerInput}
            helperText={errors.email ? "Este campo es requerido" : ""}
          />
          <TextField
            {...register("identification", { required: true })}
            name="identification"
            placeholder="Identification Number"
            size="small"
            variant="outlined"
            className={styles.customerInput}
            helperText={errors.identification ? "Este campo es requerido" : ""}
          />
          <Box className={styles.box_btn}>
            <Button type="submit" variant="contained">
              Save Delivery Info
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default FormComponent;
