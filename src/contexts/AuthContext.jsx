import axios from "../config/axios";
import { createContext } from "react";
import { useState } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isOpenSell, setIsOpenSell] = useState(false);
  const toggleModalSell = () => {
    setIsOpenSell(!isOpenSell);
  };
  const [isOpenBuy, setIsOpenBuy] = useState(false);
  const toggleModalBuy = () => {
    setIsOpenBuy(!isOpenBuy);
  };



  useEffect(() => {
    if (getAccessToken()) {
      axios
        .get("/auth/me")
        .then((res) => {
          setAuthUser(res.data.user);
          console.log(
            "🚀 ~ file: AuthContext.jsx:24 ~ .then ~ res.data.user:",
            res.data.user
          );
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } else {
      setInitialLoading(false);
    }
  }, []);

  // console.log("authUser :",authUser);
  const login = async (credential) => {
    const res = await axios.post("/auth/login", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
    console.log(
      "🚀 ~ file: AuthContext.jsx:41 ~ login ~ res.data.user:",
      res.data.user.role
    );
    // console.log(authUser.role);
    console.log("🚀 ~ file: AuthContext.jsx:39 ~ login ~ res:", res);
  };

  const register = async (registerInputObject) => {
    const res = await axios.post("/auth/register", registerInputObject);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
    console.log(res);
  };

  const logout = () => {
    removeAccessToken();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        authUser,
        initialLoading,
        register,
        logout,
        toggleModalSell,
        isOpenSell,
        toggleModalBuy,
        isOpenBuy,

      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
