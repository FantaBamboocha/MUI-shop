import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
          order.map((item) => (
            <BasketItem
              key={item.name}
              removeFromOrder={removeFromOrder}
              {...item}
            />
          ))
        ) : (
          <ListItem>Корзина пуста</ListItem>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
