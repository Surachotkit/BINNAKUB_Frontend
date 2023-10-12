import axios from "../config/axios";
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const login = async (credential) => {
    const res = await axios.post("/auth/login", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
    console.log(res);
  };
  console.log(authUser);

  const register = async (registerInputObject) => {
    const res = await axios.post("/auth/register", registerInputObject);
    // addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
    console.log(res);
  };
//   console.log(register);

  return (
    <AuthContext.Provider value={{ login, register }}>
      {children}
    </AuthContext.Provider>
  );
}
