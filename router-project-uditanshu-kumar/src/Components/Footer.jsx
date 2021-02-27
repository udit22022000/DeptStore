import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const footItems = [
    {
      to: "/about",
      title: "About Us",
    },
    {
      to: "/contact",
      title: "Contact Us",
    },
    {
      to: "/faq",
      title: "FAQ",
    },
  ];

  const socialIcons = [
    {
      image: "fa fa-twitter",
    },
    {
      image: "fa fa-linkedin",
    },
    {
      image: "fa fa-facebook-square",
    },
  ];

  return (
    <div className={styles.footMain}>
      <div>
        {footItems.map(({ to, title }) => {
          return (
            <div key={title}>
              <Link to={to}>{title}</Link>
            </div>
          );
        })}
      </div>
      <div>
        {socialIcons.map(({ image }) => {
          return (
            <div key={image}>
              <i
                className={image}
                style={{ fontSize: "24px", color: "white" }}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Footer };
