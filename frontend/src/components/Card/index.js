import React from "react";
import { AppContext } from "../../context/ProdutosContext";

import { Card } from "./styled";

const CardComponent = () => {
  const { cart, setCart, dadosFiltrados, setQuantidade, quantidade } =
    React.useContext(AppContext);
  return (
    <Card>
      <div>
        {dadosFiltrados.map((dado) => (
          <li key={dado.id}>
            <div className="img-card">
              <img src={"../" + dado.image} alt="" />
            </div>
            <h2>{dado.name}</h2>
            <small>score: {dado.score}</small>
            <span>R$ {dado.price}</span>
            <button
              onClick={() => {
                setCart([...cart, dado]);
                setQuantidade(quantidade + 1);
              }}
            >
              Comprar
            </button>
          </li>
        ))}
      </div>
    </Card>
  );
};

export default CardComponent;
