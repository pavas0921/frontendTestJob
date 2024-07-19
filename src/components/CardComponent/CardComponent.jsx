import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { ModalComponent } from "../ModalComponent";
import FormComponent from "../FormComponent/FormComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCustomerState,
  createCustomer,
} from "../../features/customer/customerSlice";
import {
  selectProductState,
  getProducts,
} from "../../features/product/productSlice";
import { TransactionComponent } from "../TransactionComponent";

const CardComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const dispatch = useDispatch();
  const { products } = useSelector(selectProductState);

  const handleClick = (event, item) => {
    localStorage.setItem("productId", item.id);
    localStorage.setItem("price", item.price);
    localStorage.setItem("baseFee", item.price * 0.2);
    localStorage.setItem("deliveryFee", item.price * 0.2);
    setOpenModal(true);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const { customerFlag } = useSelector(selectCustomerState);
  return (
    <Box className={styles.box_main}>
      {products.map((item, index) => (
        <Card
          key={index}
          className={styles.card}
          onClick={(event) => handleClick(event, item)}
        >
          <CardContent
            sx={{
              minHeight: "25vh",
              maxHeight: "25vh",
              width: "75%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
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
            {item.stock >= 0 && (
              <Typography
                sx={{ color: "black" }}
                variant="body1"
                color="text.secondary"
              >
                {item.stock} Disponibles
              </Typography>
            )}

            <Typography
              sx={{ color: "black" }}
              variant="body1"
              color="text.secondary"
            >
              {item.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
      {openModal && (
        <ModalComponent
          open={openModal}
          handleOpen={handleOpen}
          handleClose={handleClose}
        >
          {!customerFlag ? <FormComponent /> : <TransactionComponent />}
        </ModalComponent>
      )}
    </Box>
  );
};

export default CardComponent;
