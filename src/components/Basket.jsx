import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import BasketItem from "./BasketItem";

const Basket = (props) => {
  const { order = [], cartOpen, closeCart, removeFromOrder } = props;

  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List>
        <ListItem>
          <ListItemIcon>
            <ShoppingCartTwoToneIcon />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />
        {order.length ? (
          <>
            {order.map((item) => (
              <BasketItem
                key={item.name}
                removeFromOrder={removeFromOrder}
                {...item}
              />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: "bold" }}>
                Общая стоимость:{" "}
                {order.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}{" "}
                рублей.
              </Typography>
            </ListItem>
          </>
        ) : (
          <ListItem>Корзина пуста</ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
