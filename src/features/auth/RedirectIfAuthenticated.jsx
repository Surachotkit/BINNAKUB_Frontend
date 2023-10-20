import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  console.log("authUser :",authUser)
  if(authUser){
    return <Navigate to="/"/>
  }


  return children;
}
