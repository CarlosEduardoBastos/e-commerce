import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./styled";
import cartImg from "../../img/cart-icon.svg";
import Search from "../search";
import { AppContext } from "../../context/ProdutosContext";

const ComponentsHeader = () => {
  const { quantidade } = React.useContext(AppContext);
  return (
    <Header>
      <section className="header-component">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <ul>
          <Search />
          <Link to="/">Home</Link>
          <Link to="/cart">
            <div className="cartImg">
              <img src={cartImg} alt="cart" />
              <small>{quantidade}</small>
            </div>
          </Link>
        </ul>
      </section>
    </Header>
  );
};

export default ComponentsHeader;
