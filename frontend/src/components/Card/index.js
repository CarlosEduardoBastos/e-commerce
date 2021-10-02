import React from "react";
import { AppContext } from "../../context/ProdutosContext";

import { Card } from "./styled";

const CardComponent = () => {
  const { cart, setCart, dadosFiltrados } = React.useContext(AppContext);
  console.log(dadosFiltrados);

  return (
    <Card>
      <div>
        {dadosFiltrados.map((dado) => (
          <li key={dado.id}>
            <div className="img-card">
              <img src={"../" + dado.image} alt="" />
            </div>
            <h2>{dado.name}</h2>
            <button onClick={() => setCart([...cart, dado])}>AddCart</button>
          </li>
        ))}
      </div>
    </Card>
  );
};

export default CardComponent;
