import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function Authenicated({ children }) {
  const { authUser } = useAuth();
  console.log(authUser);
  if (!authUser) {
    return <Navigate to="/" />;
  }

  // if (authUser?.role !== "USER") {
  //   return <Navigate to="/" />;
  // }

  if (authUser?.role !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return children;
}
