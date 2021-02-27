import React from "react";
import axios from "axios";
import { useParams, Link, useHistory } from "react-router-dom";
import styles from "./Products2.module.css";
import { AuthContext } from "../Context/AuthContextProvider";

const IpadItem = () => {
  const [data, setData] = React.useState(null);

  const { isAuth } = React.useContext(AuthContext);

  const { ipadId } = useParams();

  React.useEffect(() => {
    axios
      .get(`https://json-server-react-cart.herokuapp.com/ipads/${ipadId}`)
      .then((res) => setData(res.data));
  }, [ipadId]);

  let history = useHistory();
  const handleCart = (id) => {
    if (isAuth) {
      axios.post("https://json-server-react-cart.herokuapp.com/cart", {
        type: "ipads",
        id: id,
      });
    } else {
      // <Redirect push to="/login" />;
      history.push("/login");
    }
  };

  return data !== null ? (
    <div className={styles.mainContainer}>
      <h3>{data.name}</h3>
      <div>
        <img src={data.image} alt="macbookImage" style={{ width: "150px" }} />
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
          <b>Camera</b>: {data.camera}
        </div>
        <div>
          <b>Network</b>: {data.network}
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
      </div>
      <div>
        <button onClick={() => handleCart(data.id)}>Add To Cart +</button>
        <div>
          <Link to="/ipad">Go Back</Link>
        </div>
      </div>
    </div>
  ) : null;
};

export { IpadItem };
