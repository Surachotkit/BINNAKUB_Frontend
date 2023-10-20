import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


export default function CheckIsAdmin({ children }) {
  const { authUser } = useAuth();
  console.log("🚀 ~ file: CheckIsAdmin.jsx:7 ~ CheckIsAdmin ~ authUser:", authUser.role)
  console.log("authUser :",authUser)

  return children;
}