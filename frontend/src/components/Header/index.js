import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./styled";
import cartImg from "../../img/cart-icon.svg";
import Search from "../search";

const ComponentsHeader = () => {
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
            <img src={cartImg} alt="cart" />
          </Link>
        </ul>
      </section>
    </Header>
  );
};

export default ComponentsHeader;
