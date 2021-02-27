import React from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { isAuth, toggleIsAuth } = React.useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleIsAuth();
  };
  return !isAuth ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ marginBottom: "20px" }}>Login</div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <input
          placeholder="Enter Email-Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter Password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  ) : (
    <div>-----Logged In-----</div>
  );
};

export { Login };
