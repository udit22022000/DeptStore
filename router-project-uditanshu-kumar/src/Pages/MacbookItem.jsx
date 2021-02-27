import React from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";
import styles from "./Products2.module.css";
import { AuthContext } from "../Context/AuthContextProvider";

const MacbookItem = () => {
  const [data, setData] = React.useState(null);

  const { macId } = useParams();

  let history = useHistory();

  const { isAuth } = React.useContext(AuthContext);

  React.useEffect(() => {
    axios
      .get(`https://json-server-react-cart.herokuapp.com/macbooks/${macId}`)
      .then((res) => setData(res.data));
  }, [macId]);

  const handleCart = (id) => {
    if (isAuth) {
      axios.post("https://json-server-react-cart.herokuapp.com/cart", {
        type: "macbooks",
        id: id,
      });
    } else {
      history.push("/login");
    }
  };

  return data !== null ? (
    <div className={styles.mainContainer}>
      <h3>{data.name}</h3>
      <div>
        <img src={data.image} alt="macbookImage" />
        <div>
          <b>Price</b>: ${data.price}
        </div>
      </div>

      <div>
        <h3>Specifications :--</h3>

        <div>
          <b>Display</b>: {data.display}
        </div>
        <div>
          <b>Processor</b>: {data.processor}
        </div>
        <div>
          <b>Memory</b>: {data.memory}
        </div>
        <div>
          <b>Storage</b>: {data.storage}
        </div>
        <div>
          <b>Battery</b>: {data.battery}
        </div>
      </div>
      <div>
        <button onClick={() => handleCart(data.id)}>Add To Cart +</button>
        <div>
          <Link to="/macbook">Go Back</Link>
        </div>
      </div>
    </div>
  ) : null;
};

export { MacbookItem };
