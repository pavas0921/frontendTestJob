import React from "react";
import Box from "@mui/material/Box";
import styles from "./styles.module.scss";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const ResumeComponent = ({
  transactionResponse,
  dispatch,
  clearState,
  clearCustomerState,
  setShowCustomerForm,
  handleClose,
  setProductQty,
}) => {
  const closeModal = () => {
    handleClose();
    dispatch(clearState());
    dispatch(clearCustomerState());
    setShowCustomerForm(true);
    localStorage.clear();
    setShowCustomerForm(true);
    setProductQty(0);
  };
  return (
    <Box className={styles.box_main}>
      <Typography sx={{ marginBottom: 2 }} variant="h4" color="initial">
        RESUME
      </Typography>
      <Typography variant="h5" color="initial">
        Payment Status: {transactionResponse.status}
      </Typography>
      <Typography variant="h5" color="initial">
        Delivery Information: {localStorage.getItem("address")}
      </Typography>
      <Typography variant="h5" color="initial">
        Customer Email: {localStorage.getItem("customer_email")}
      </Typography>
      <Typography variant="h5" color="initial">
        Base Fee: {localStorage.getItem("baseFee")}
      </Typography>
      <Typography variant="h5" color="initial">
        Delivery Fee: {localStorage.getItem("deliveryFee")}
      </Typography>
      <Typography variant="h5" color="initial">
        Product Price: {localStorage.getItem("price")}
      </Typography>
      <Typography variant="h5" color="initial">
        Total Paid: {transactionResponse.total}
      </Typography>
      <Box className={styles.box_btn}>
        <Button onClick={closeModal} variant="contained">
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default ResumeComponent;
