import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";
import { ModalComponent } from "../ModalComponent";
import FormComponent from "../FormComponent/FormComponent";

const CardComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleClick = () => {
    //event.stopPropagation(); // Evita que el clic llegue al contenedor padre
    setOpenModal(true);
  };
  return (
    <Box className={styles.box_main}>
      <Card className={styles.card}>
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
            Product Name
          </Typography>
          <Typography
            sx={{ color: "black" }}
            variant="body1"
            color="text.secondary"
          >
            Product Price
          </Typography>
          <Typography
            sx={{ color: "black" }}
            variant="body1"
            color="text.secondary"
          >
            Product Stock
          </Typography>
          <Button
            onClick={() => handleClick()}
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            Pay with Credit Card
          </Button>
        </CardContent>
      </Card>

      <Card className={styles.card}>
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
            Product Name
          </Typography>
          <Typography
            sx={{ color: "black" }}
            variant="body1"
            color="text.secondary"
          >
            Product Price
          </Typography>
          <Typography
            sx={{ color: "black" }}
            variant="body1"
            color="text.secondary"
          >
            Product Stock
          </Typography>
        </CardContent>
      </Card>

      <Card className={styles.card}>
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
            Product Name
          </Typography>
          <Typography
            sx={{ color: "black" }}
            variant="body1"
            color="text.secondary"
          >
            Product Price
          </Typography>
          <Typography
            sx={{ color: "black" }}
            variant="body1"
            color="text.secondary"
          >
            Product Stock
          </Typography>
        </CardContent>
      </Card>

      <Card className={styles.card}>
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
            Product Name
          </Typography>
          <Typography
            sx={{ color: "black" }}
            variant="body1"
            color="text.secondary"
          >
            Product Price
          </Typography>
          <Typography
            sx={{ color: "black" }}
            variant="body1"
            color="text.secondary"
          >
            Product Stock
          </Typography>
        </CardContent>
      </Card>

      {openModal && (
        <ModalComponent
          open={openModal}
          handleOpen={handleOpen}
          handleClose={handleClose}
        >
          <FormComponent />
        </ModalComponent>
      )}
    </Box>
  );
};

export default CardComponent;
