import { useState } from "react";
import { Container } from "@mui/material";

import Basket from "./Basket";
import GoodsList from "./GoodsList";
import Header from "./Header";
import Search from "./Search";
import Snack from "./Snack";

import { goods } from "../data/goods";

const App = () => {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [isCartOpen, setCartOpen] = useState(false);
  const [isSnackOpen, setSnackOpen] = useState(false);
  const [products, setProducts] = useState(goods);

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch("");
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
        },
      ]);
    }

    setSnackOpen(true);
  };

  const removeFromOrder = (goodsItemId) => {
    setOrder(order.filter((item) => item.id !== goodsItemId));
  };

  return (
    <>
      <Header handleCart={() => setCartOpen(true)} orderLength={order.length} />
      <Container maxWidth="lg">
        <Search value={search} onChange={handleChange} />
        <GoodsList goods={products} setOrder={addToOrder} />
      </Container>
      <Basket
        order={order}
        cartOpen={isCartOpen}
        closeCart={() => setCartOpen(false)}
        removeFromOrder={removeFromOrder}
      />

      <Snack
        isSnackOpen={isSnackOpen}
        handleClose={() => setSnackOpen(false)}
      />
    </>
  );
};

export default App;
