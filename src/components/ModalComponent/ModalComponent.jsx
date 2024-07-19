import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import styles from "./styles.module.scss";

const ModalComponent = ({ children, open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modalContainer}>{children}</Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
