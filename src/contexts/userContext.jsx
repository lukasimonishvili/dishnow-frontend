import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";
import api from "../api";

const userContext = createContext();

export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const logIn = async (freshToken) => {
    const token = freshToken || window.localStorage.getItem("token");
    if (!!token) {
      try {
        if (freshToken) localStorage.setItem("token", freshToken);
        const decoded = jwtDecode(token);
        const userRequest = await api.get("/user/get/" + decoded.sub);
        setUser(userRequest.data);
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  };

  return (
    <userContext.Provider value={{ logOut, logIn, user }}>
      {children}
    </userContext.Provider>
  );
};
