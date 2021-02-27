import React from "react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);

  const toggleIsAuth = () => {
    setIsAuth((prev) => !prev);
  };

  const value = { isAuth, toggleIsAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider };
