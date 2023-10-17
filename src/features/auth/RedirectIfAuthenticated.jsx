import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  console.log("authUser :",authUser)
  if (authUser?.role === "USER") {
    return <Navigate to="/" />;
  }
  if (authUser?.role === "ADMIN") {
    return <Navigate to="/profile/dashboard" />;
  }
  return children;
}
