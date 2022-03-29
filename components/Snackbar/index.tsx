import { SnackbarContext } from "../../providers/SnackbarProvider";
import Alert from "@mui/material/Alert";
import React, { FC, useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import useStyles from "./styles";

const PositionedSnackbar: FC = () => {
  const { message, type, open, closeSnackbar } = useContext(SnackbarContext);
  const { classes } = useStyles();
  return (
    <div>
      <Snackbar
        className={classes.root}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        open={open}
        onClose={closeSnackbar}
        autoHideDuration={3000}
      >
        <Alert severity={type} variant="filled" onClose={closeSnackbar}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default PositionedSnackbar;
