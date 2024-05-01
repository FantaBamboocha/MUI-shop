import { Alert, Snackbar } from "@mui/material";

const Snack = ({ isSnackOpen, handleClose }) => {
  return (
    <Snackbar open={isSnackOpen} onClose={handleClose} autoHideDuration={2000}>
      <Alert severity="success">Товар добавлен в корзину</Alert>
    </Snackbar>
  );
};

export default Snack;
