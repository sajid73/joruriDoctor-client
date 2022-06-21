import { myProfile } from "../api";

const { createContext, useState, useEffect } = require("react");

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const context = {
    user,
    setUser,
  };

  const loadUserData = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const res = await myProfile(token);
      setUser(res.data.user);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
