import React from "react";
import { AppContext } from "../../context/ProdutosContext";
import { CartComponent, CartItens } from "./styled";

const Cart = () => {
  const { cart } = React.useContext(AppContext);
  const [value, setValue] = React.useState(0);
  return (
    <CartComponent>
      <CartItens>
        <p>
          Valor do carrinho R$
          {value}
        </p>
        {cart &&
          cart.map((dado) => (
            <li key={dado.id}>
              <section className="cartImg">
                <img src={dado.image} alt="" />
              </section>
              <div>
                <h4>{dado.name}</h4>
                <span>R$ {dado.price}</span>
              </div>
              <button
                onClick={() => {
                  setValue(dado.price + value);
                }}
              >
                Comprar
              </button>
            </li>
          ))}
      </CartItens>
    </CartComponent>
  );
};

export default Cart;
