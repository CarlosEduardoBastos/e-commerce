import React from "react";
import { AppContext } from "../../context/ProdutosContext";

const Cart = () => {
  const { cart } = React.useContext(AppContext);
  console.log(cart);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
