import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";

const CardComponent = () => {
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
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardComponent;
