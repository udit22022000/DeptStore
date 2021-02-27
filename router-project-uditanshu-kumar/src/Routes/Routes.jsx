import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../Components/About";
import Contact from "../Components/Contact";

import { MackbookPage } from "../Pages/MacbookPage";
import { MacbookItem } from "../Pages/MacbookItem";

import { IphonePage } from "../Pages/IphonePage";
import { IphoneItem } from "../Pages/IphoneItem";

import { IpadPage } from "../Pages/IpadPage";
import { IpadItem } from "../Pages/IpadItem";

import { Login } from "../Pages/Login";
import { Cart } from "./Cart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Home Page</h1>
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/macbook">
        <MackbookPage />
      </Route>
      <Route exact path="/macbook/:macId">
        <MacbookItem />
      </Route>
      <Route exact path="/iphone">
        <IphonePage />
      </Route>
      <Route exact path="/iphone/:iphoneId">
        <IphoneItem />
      </Route>
      <Route exact path="/ipad">
        <IpadPage />
      </Route>
      <Route exact path="/ipad/:ipadId">
        <IpadItem />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/faq">
        <h1>FAQ's Page</h1>
      </Route>
      <Route>
        <h3>Error 404: Page Not Found</h3>
      </Route>
    </Switch>
  );
};

export { Routes };
