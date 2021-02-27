import React from "react";
import axios from "axios";
import styles from "./Products.module.css";
import { useHistory } from "react-router-dom";

const IpadPage = () => {
  const [data, setData] = React.useState([]);
  const [order, setOrder] = React.useState("ascending");

  const history = useHistory();

  React.useEffect(() => {
    axios
      .get("https://json-server-react-cart.herokuapp.com/ipads")
      .then((res) => setData(res.data));
  }, []);

  const handleProduct = (id) => {
    history.push(`/ipad/${id}`);
  };

  let sortedData;

  if (order === "ascending") {
    sortedData = data.sort((item1, item2) => item1.price - item2.price);
  } else if (order === "descending") {
    sortedData = data.sort((item1, item2) => item2.price - item1.price);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainContainer1}>
        <span>Sort By (Price) : &nbsp;&nbsp;</span>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className={styles.mainContainer2}>
        {sortedData?.map(({ id, name, image, price }) => {
          return (
            <div key={id} style={{ background: "white" }}>
              <h3>{name}</h3>
              <img src={image} alt="IphoneImage" style={{ width: "120px" }} />
              <div>Price : ${price}</div>
              <div>
                <button onClick={() => handleProduct(id)}>Learn More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { IpadPage };
