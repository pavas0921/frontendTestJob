import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, IconButton } from "@mui/material";
import styles from "./styles.module.scss";
import { ModalComponent } from "../ModalComponent";
import FormComponent from "../FormComponent/FormComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCustomerState,
  clearCustomerState,
} from "../../features/customer/customerSlice";
import {
  selectProductState,
  getProducts,
} from "../../features/product/productSlice";
import {
  clearState,
  selectTransactionState,
} from "../../features/transactions/transactionSlice";
import { TransactionComponent } from "../TransactionComponent";
import { ResumeComponent } from "../ResumeComponent";
import { ClearIcon } from "@mui/x-date-pickers";

const CardComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(true);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const dispatch = useDispatch();
  const { products } = useSelector(selectProductState);
  const { customerFlag } = useSelector(selectCustomerState);
  const [productQty, setProductQty] = useState(0);
  localStorage.setItem("produtcQty", productQty);

  const transactionResponse = useSelector(selectTransactionState);

  const handleClick = (event, item) => {
    dispatch(clearState());
    dispatch(clearCustomerState());
    setShowCustomerForm(true);
    localStorage.setItem("productId", +item.id);
    localStorage.setItem("price", +item.price * productQty);
    localStorage.setItem("baseFee", +item.price * 0.2);
    localStorage.setItem("deliveryFee", +item.price * 0.2);
    localStorage.setItem("productPrice", +item.price);
    setOpenModal(true);
    console.log("item", item);
  };

  const AddQty = () => {
    localStorage.setItem("produtcQty", productQty);
    const qty = productQty + 1;
    setProductQty(qty);
  };

  const ReduceQty = () => {
    const qty = productQty - 1;
    setProductQty(qty);
    localStorage.setItem("produtcQty", productQty);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (customerFlag) {
      //dispatch(clearCustomerState());
      setShowCustomerForm(false);
    }
  }, [customerFlag]);

  useEffect(() => {
    if (transactionResponse.transactionFlag) {
      setShowCustomerForm(false);
      dispatch(clearCustomerState());
      //dispatch(clearState());
      console.log("res", transactionResponse.transaction.status);
    }
  }, [transactionResponse]);

  return (
    <Box className={styles.box_main}>
      {products.map((item, index) => (
        <Card key={index} className={styles.card}>
          <CardContent
            sx={{
              minHeight: "25vh",
              maxHeight: "25vh",
              width: "75%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Box className={styles.box_columns}>
              <Typography
                sx={{ color: "black", fontWeight: "bold" }}
                gutterBottom
                variant="h6"
                component="div"
              >
                {item.productName}
              </Typography>
              <Typography
                sx={{ color: "black" }}
                variant="body1"
                color="text.secondary"
              >
                Precio {item.price}
              </Typography>

              <Typography
                sx={{ color: "black" }}
                variant="body1"
                color="text.secondary"
              >
                {item.stock} Disponibles
              </Typography>

              <Typography
                sx={{ color: "black" }}
                variant="body1"
                color="text.secondary"
              >
                {item.description}
              </Typography>
            </Box>
            <Box className={styles.box_columns}>
              <Box>
                <Typography variant="h6" color="initial">
                  Quantity
                </Typography>
                <Box>
                  <IconButton onClick={AddQty}>
                    <AddIcon />
                  </IconButton>
                  <Typography variant="p" color="initial">
                    {productQty}
                  </Typography>
                  <IconButton onClick={ReduceQty}>
                    <RemoveIcon />
                  </IconButton>
                </Box>
              </Box>
              <Box>
                <Button
                  onClick={(event) => handleClick(event, item)}
                  variant="contained"
                >
                  Buy
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
      {openModal && (
        <ModalComponent
          open={openModal}
          handleOpen={handleOpen}
          handleClose={handleClose}
        >
          {showCustomerForm && <FormComponent />}
          {customerFlag && <TransactionComponent />}
          {transactionResponse.transactionFlag && (
            <ResumeComponent
              transactionResponse={transactionResponse.transaction}
              handleClose={handleClose}
              setShowCustomerForm={setShowCustomerForm}
              clearCustomerState={clearCustomerState}
              clearState={clearState}
              dispatch={dispatch}
            />
          )}
        </ModalComponent>
      )}
    </Box>
  );
};

export default CardComponent;
