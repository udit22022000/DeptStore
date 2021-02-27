import React from "react";
import axios from "axios";

const Contact = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://json-server-react-cart.herokuapp.com/contacts")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div
      style={{
        width: "80%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {data?.map(({ title, details }) => {
        return (
          <div key={title}>
            <b>{title}</b>

            <div>{details}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
