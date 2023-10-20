import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { getAccessToken } from "../../utils/local-storage";

export default function NotLogin({ children }) {
  const { authUser } = useAuth();
  console.log(authUser);
  if (!getAccessToken()) {
      return <Navigate to="/" />;
    }


  return children;
}
