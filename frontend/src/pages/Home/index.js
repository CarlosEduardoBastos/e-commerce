import React from "react";
import CardComponent from "../../components/Card";
import { HomeComponent } from "./styled";

const Home = () => {
  return (
    <HomeComponent>
      <div className="banner">
        <div className="banner-text">
          <h1>Procure seu jogo</h1>
        </div>
      </div>
      <div className="card-home">
        <CardComponent />
      </div>
    </HomeComponent>
  );
};

export default Home;
