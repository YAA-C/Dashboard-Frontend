import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [apikey, setApiKey] = useState("");

  useEffect(() => {
    axios
      .post("http://localhost:3001/user/getUser", {
        id: window.localStorage.getItem("userID"),
      })
      .then((res) => {
        setUsername(res.data.user.username);
        setApiKey(res.data.user.apikey);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <UserDataContext.Provider value={{ username, apikey }}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useData = () => {
  return useContext(UserDataContext);
};
