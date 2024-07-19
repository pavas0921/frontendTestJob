import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import React from "react";
import styles from "./styles.module.scss";

const LoaderComponent = () => {
  return (
    <Stack className={styles.div_main} spacing={2} direction="row">
      <CircularProgress className={styles.circular} />
    </Stack>
  );
};

export default LoaderComponent;
