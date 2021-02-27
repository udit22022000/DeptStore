import React from "react";
import styles from "./Cart.module.css";
import axios from "axios";
import { AuthContext } from "../Context/AuthContextProvider";
import { useHistory } from "react-router-dom";

const Cart = () => {
  let cartItems = React.useRef([]);
  const [itemDetails, setItemDetails] = React.useState([]);

  const { isAuth } = React.useContext(AuthContext);

  const getCartItems = async () => {
    let response = await axios.get(
      "https://json-server-react-cart.herokuapp.com/cart"
    );
    cartItems = await response.data;
    await console.log(cartItems);

    let response2;
    for (let i = 0; i < cartItems.length; i++) {
      response2 = await axios.get(
        `https://json-server-react-cart.herokuapp.com/${cartItems[i].type}/${cartItems[i].id}`
      );
      await setItemDetails((prev) => [...prev, response2.data]);
    }
  };

  let history = useHistory();
  React.useEffect(() => {
    if (isAuth) {
      getCartItems();
    } else {
      history.push("/login");
    }
  }, [isAuth]);

  return (
    <div className={styles.mainContainer}>
      {itemDetails.map(({ name, id, image, price }) => (
        <div key={`cart-${id}`}>
          <img src={image} alt="itemPic" />
          <div>{name}</div>
          <div>Price: $ {price}</div>
        </div>
      ))}
    </div>
  );
};

export { Cart };
