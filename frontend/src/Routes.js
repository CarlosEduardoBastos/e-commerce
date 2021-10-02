import React from "react";
import { Route, Switch } from "react-router";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
