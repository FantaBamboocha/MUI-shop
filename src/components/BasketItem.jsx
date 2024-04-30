import { IconButton, ListItem, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

const BasketItem = (props) => {
  const { id, name, price, quantity, removeFromOrder } = props;
  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price}руб x{quantity}
      </Typography>
      <IconButton
        className="btn btn-primary"
        onClick={() => removeFromOrder(id)}
      >
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
