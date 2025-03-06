import React, { useState } from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  let [data, setData] = useState({});
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
