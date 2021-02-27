import React from "react";
import axios from "axios";

const About = () => {
  const [data, setData] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://json-server-react-cart.herokuapp.com/about")
      .then((res) => setData(res.data[0]));
  }, []);

  return <div style={{ width: "80%" }}>{data}</div>;
};

export default About;
