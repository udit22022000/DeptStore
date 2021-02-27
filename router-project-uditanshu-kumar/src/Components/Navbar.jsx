import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const barItems = [
    {
      to: "/macbook",
      title: "Macbook",
    },
    {
      to: "/ipad",
      title: "IPad",
    },
    {
      to: "/iphone",
      title: "IPhone",
    },
    {
      to: "/login",
      title: "Login",
    },
  ];

  return (
    <div className={styles.navMain}>
      <div>
        <h2>10% Instant Discount* | </h2>&nbsp;&nbsp;
        <h5>
          On HDFC Bank Cards & EMI Transactions<br></br>*T&C Apply
        </h5>
      </div>
      <div>
        <div key="home">
          <Link to="/">
            <i className="fa fa-apple" style={{ fontSize: "24px" }}></i>
          </Link>
        </div>
        {barItems.map(({ to, title }) => {
          return (
            <div key={title}>
              <Link to={to}>{title}</Link>
            </div>
          );
        })}
        <div key="cart">
          <Link to="/cart">
            <i className="fa fa-shopping-cart" style={{ fontSize: "24px" }}></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Navbar };
