// UserContext.js
import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState({
    username: "q",
    password: "q",
    usertype: "retailer",
  });
  //{username:"q",password:"q",usertype:"retailer"}
  const login = (username, password, usertype) => {
    setLoggedUser({ username, password, usertype });
  };

  const logout = () => {
    setLoggedUser(null);
  };

  return (
    <UserContext.Provider value={{ loggedUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
